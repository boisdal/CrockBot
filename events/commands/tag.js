import { SlashCommandBuilder } from 'discord.js';
import { getFoodFromTag } from '#lib/tools';
import { createEmbedForTag } from '#lib/embeds';
import { tagList } from '#lib/food';

// Creates an Object in JSON with the data required by Discord's API to create a SlashCommand
const create = () => {
	const command = new SlashCommandBuilder()
		.setName('tag')
		.setDescription('Get to know what ingredients have a tag.')
		.addStringOption((option) =>
			option.setName('tagname')
            .setDescription('Tag name')
            .setRequired(true)
            .setAutocomplete(true)
		)
        .addBooleanOption((option) =>
            option.setName('private')
            .setDescription('Keep the answer for yourself'));

	return command.toJSON();
};

// Called by the interactionCreate event listener when the corresponding command is invoked
const invoke = (interaction) => {
	const tagName = interaction.options.getString('tagname');
    const ephemeral = interaction.options.getBoolean('private') ?? false;

    let foodItems = getFoodFromTag(tagName);

    let message = createEmbedForTag(foodItems, tagName, ephemeral);
	interaction.reply(message);
};

// Called by the interactionCreate event listener when the arguments are being fullfilled
const autocomplete =  async (interaction) => {
    const focusedOption = interaction.options.getFocused(true);
    if (focusedOption.name != 'private') {
        const choices = tagList;
        const input = focusedOption.value.toLowerCase();
        const starting = choices.filter(choice => choice.name.toLowerCase().startsWith(input));
        const matchNoStart = choices.filter(choice => choice.name.toLowerCase().includes(input) && !choice.name.toLowerCase().startsWith(input));
        let filtered = starting.concat(matchNoStart)
        if (focusedOption.value == '') {filtered = tagList}
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