import { SlashCommandBuilder } from 'discord.js';
import { getRecipeOptions } from '#lib/tools';
import { createEmbedForRecipe } from '#lib/embeds';

// Creates an Object in JSON with the data required by Discord's API to create a SlashCommand
const create = () => {
	const command = new SlashCommandBuilder()
		.setName('recipe')
		.setDescription('Know everything about a recipe')
		.addStringOption((option) =>
			option.setName('name')
            .setDescription('Recipe name')
            .setRequired(true)
            .setAutocomplete(true))
        .addBooleanOption((option) =>
            option.setName('private')
            .setDescription('Keep the answer for yourself'))

	return command.toJSON();
};

// Called by the interactionCreate event listener when the corresponding command is invoked
const invoke = (bot, interaction) => {
	const name = interaction.options.getString('name');
    let ephemeral = interaction.options.getBoolean('private') ?? false;
    if (interaction.channelId == '1182003255987929178') {ephemeral = true;}
    let recipe = bot.recipes.byId(name);
    let message = createEmbedForRecipe(bot, recipe, ephemeral);
	interaction.reply(message);
};

// Called by the interactionCreate event listener when the arguments are being fullfilled
const autocomplete =  async (bot, interaction) => {
    const focusedOption = interaction.options.getFocused(true);
    if (focusedOption.name == 'name') {
        const choices = getRecipeOptions(bot);
        const input = focusedOption.value.toLowerCase();
        const starting = choices.filter(choice => choice.name.toLowerCase().startsWith(input));
        const matchNoStart = choices.filter(choice => choice.name.toLowerCase().includes(input) && !choice.name.toLowerCase().startsWith(input));
        let filtered = starting.concat(matchNoStart);
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
