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
                            Those are a way to categorize ingredients like fruits or veggies.
                            Most of them describe a real life type of food.`
            },
            {
                'name': 'Mechanics',
                'value': `Ingredients sometimes have a value associated with a type.
                            For example, a green cap is valued as half a veggie.
                            So if a recipe needs 1 veggie, it'll need 2 green caps.
                            
                            Ingredients can also count as multiple of a tag, like a lobster counting for 2 fishes, or a tallbird egg counting as 4 eggs.`
            },
            {
                'name': 'Specific tags',
                'value': `Since this is don't starve, ingredients can have a 'monster' tag which will impact many recipes.
                            An ingredient can also be typed as 'magic' or 'inedible'.`
            }
        ]
    },
    'priorities': {
        'title': 'Priorities in Don\'t Starve cooking',
        'thumbnail': 'priorities',
        'sections': [
            {
                'name': 'Base mecanic',
                'value': `Recipes have a priorities associated to them that can be anything from 100 to -4.
                            It decides which of the possible outcome of the cooking is gonna be choosed.
                            Out of the recipes which requirements are met by the ingredients in the crockpot, the one with the highest priority is chosen.`
            },
            {
                'name': 'Same priority case',
                'value': `In some cases, one or more possible recipes have the exact same priority.
                            The outcome will be randomly chosen between the recipes.`
            }
        ]
    },
    'perishing': {
        'title': 'Perishing in Don\'t Starve cooking',
        'thumbnail': 'rot',
        'sections': [
            {
                'name': 'To be Filled',
                'value': `No idea what to write.`
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
const invoke = (bot, interaction) => {
	const topic = interaction.options.getString('topic');
    let ephemeral = interaction.options.getBoolean('private') ?? false;
    if (interaction.channelId == '1182003255987929178') {ephemeral = true;}

    let topicAnswer = helpTopics[topic];
    for (let section of topicAnswer.sections) {
        section.value = section.value.replace(/ {2,}/gm,'');
    }

    let message = createEmbedForHelp(topicAnswer, ephemeral);
	interaction.reply(message);
};

// Called by the interactionCreate event listener when the arguments are being fullfilled
const autocomplete =  async (bot, interaction) => {
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
