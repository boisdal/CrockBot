import { SlashCommandBuilder } from 'discord.js';
import { getRecipesFromIngredients, getFoodItemArray } from '#lib/tools';
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
        );

	return command.toJSON();
};

// Called by the interactionCreate event listener when the corresponding command is invoked
const invoke = (interaction) => {
	const ing1 = interaction.options.getString('ing1');
	const ing2 = interaction.options.getString('ing2');
	const ing3 = interaction.options.getString('ing3');
	const ing4 = interaction.options.getString('ing4');
    let ingredientArray = [ing1, ing2, ing3, ing4];

    let recipes = getRecipesFromIngredients(ingredientArray)

    let message = createEmbedForCook(recipes, ingredientArray)
	interaction.reply(message);
};

// Called by the interactionCreate event listener when the arguments are being fullfilled
const autocomplete =  async (interaction) => {
    const focusedOption = interaction.options.getFocused(true);
    const choices = getFoodItemArray()
    const starting = choices.filter(choice => choice.name.toLowerCase().startsWith(focusedOption.value))
    const matchNoStart = choices.filter(choice => choice.name.toLowerCase().includes(focusedOption.value) && !choice.name.toLowerCase().startsWith(focusedOption.value));
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

export { create, invoke, autocomplete };
