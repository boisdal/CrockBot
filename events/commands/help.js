import { SlashCommandBuilder } from 'discord.js';
import { createEmbedForHelp } from '#lib/embeds';

const helpTopics = {
    'tags': {
        'title': 'Tags in Don\'t Starve cooking',
        'thumbnail': 'tag',
        'sections': [
            {
                'name': 'General purpose',
                'value': `Recipes come with a set of requirements, many of which concern tags.
                            Those are a way to categorize ingredients.
                            Because it makes sense to be able to replace a fruit by another fruit.
                            Hence, most of them describe a real life type of food.`
            },
            {
                'name': 'Specific tags',
                'value': `Since this is don't starve, ingredients can have a 'monster' tag which will impact many recipes.
                            An ingredient can also be typed as 'magic' or 'inedible'.`
            }
        ]
    }
};

let helpTopicsAutocomplete = [];
for (let topic of Object.keys(helpTopics)) {
    helpTopicsAutocomplete.push({'name': topic, 'value': topic});
}

// Creates an Object in JSON with the data required by Discord's API to create a SlashCommand
const create = () => {
	const command = new SlashCommandBuilder()
		.setName('help')
		.setDescription('Get help on different subjects.')
		.addStringOption((option) =>
			option.setName('topic')
            .setDescription('Topic')
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
	const topic = interaction.options.getString('topic');
    const ephemeral = interaction.options.getBoolean('private') ?? false;

    let topicAnswer = helpTopics[topic];

    let message = createEmbedForHelp(topicAnswer, ephemeral);
	interaction.reply(message);
};

// Called by the interactionCreate event listener when the arguments are being fullfilled
const autocomplete =  async (interaction) => {
    const focusedOption = interaction.options.getFocused(true);
    if (focusedOption.name != 'private') {
        const choices = helpTopicsAutocomplete;
        const input = focusedOption.value.toLowerCase();
        const starting = choices.filter(choice => choice.name.toLowerCase().startsWith(input));
        const matchNoStart = choices.filter(choice => choice.name.toLowerCase().includes(input) && !choice.name.toLowerCase().startsWith(input));
        let filtered = starting.concat(matchNoStart)
        if (focusedOption.value == '') {filtered = helpTopicsAutocomplete}
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
