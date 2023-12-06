import { SlashCommandBuilder } from 'discord.js';
import { getRecipeFromName, getRecipeArray } from '#lib/tools';
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
            .setAutocomplete(true));

	return command.toJSON();
};

// Called by the interactionCreate event listener when the corresponding command is invoked
const invoke = (interaction) => {
	const name = interaction.options.getString('name');
    let recipe = getRecipeFromName(name)
    let message = createEmbedForRecipe(recipe)
	interaction.reply(message);
};

// Called by the interactionCreate event listener when the arguments are being fullfilled
const autocomplete =  async (interaction) => {
    const focusedOption = interaction.options.getFocused(true);
    const choices = getRecipeArray()
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
