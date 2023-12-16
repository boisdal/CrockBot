import { SlashCommandBuilder } from 'discord.js';
import { getRecipesFromIngredients, getFoodOptions } from '#lib/tools';
import { createEmbedForCook } from '#lib/embeds';

// Creates an Object in JSON with the data required by Discord's API to create a SlashCommand
const create = () => {
	const command = new SlashCommandBuilder()
		.setName('cook')
		.setDescription('Simulate a crockpot cooking.')
		.addStringOption((option) =>
			option.setName('ing1')
            .setDescription('First ingredient')
            .setRequired(true)
            .setAutocomplete(true)
		)
        .addStringOption((option) =>
			option.setName('ing2')
            .setDescription('Second ingredient')
            .setRequired(true)
            .setAutocomplete(true)
		)
        .addStringOption((option) =>
			option.setName('ing3')
            .setDescription('Third ingredient')
            .setRequired(true)
            .setAutocomplete(true)
        )
        .addStringOption((option) =>
			option.setName('ing4')
            .setDescription('Fourth ingredient')
            .setRequired(true)
            .setAutocomplete(true)
        )
        .addBooleanOption((option) =>
            option.setName('private')
            .setDescription('Keep the answer for yourself'));

	return command.toJSON();
};

// Called by the interactionCreate event listener when the corresponding command is invoked
const invoke = (bot, interaction) => {
	const ing1 = interaction.options.getString('ing1');
	const ing2 = interaction.options.getString('ing2');
	const ing3 = interaction.options.getString('ing3');
	const ing4 = interaction.options.getString('ing4');
    let ephemeral = interaction.options.getBoolean('private') ?? false;
    if (interaction.channelId == '1182003255987929178') {ephemeral = true;}
    let ingredientArray = [ing1, ing2, ing3, ing4];

    let recipes = getRecipesFromIngredients(bot, ingredientArray);

    let message = createEmbedForCook(bot, recipes, ingredientArray, ephemeral);
	interaction.reply(message);
};

// Called by the interactionCreate event listener when the arguments are being fullfilled
const autocomplete =  async (bot, interaction) => {
    const focusedOption = interaction.options.getFocused(true);
    if (focusedOption.name != 'private') {
        const choices = getFoodOptions(bot);
        const input = focusedOption.value.toLowerCase();
        const starting = choices.filter(choice => choice.name.toLowerCase().startsWith(input));
        const matchNoStart = choices.filter(choice => choice.name.toLowerCase().includes(input) && !choice.name.toLowerCase().startsWith(input));
        let filtered = starting.concat(matchNoStart)
        if (focusedOption.value == '') {filtered = choices}
        let options;
        if (filtered.length > 25) {
            options = filtered.slice(0, 25);
        } else {
            options = filtered;
        }
        await interaction.respond(
            options,
        );
    }
}

export { create, invoke, autocomplete };
