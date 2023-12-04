import { SlashCommandBuilder } from 'discord.js';
import { getRecipesFromIngredients } from '../../lib/tools.js';

// Creates an Object in JSON with the data required by Discord's API to create a SlashCommand
const create = () => {
	const command = new SlashCommandBuilder()
		.setName('recipe')
		.setDescription('Simule une cuisson.')
		.addStringOption((option) =>
			option.setName('ing1')
            .setDescription('Premier ingrédient')
            .setRequired(true)
            .setAutocomplete(true)
		)
        .addStringOption((option) =>
			option.setName('ing2')
            .setDescription('Deuxième ingrédient')
            .setRequired(true)
            .setAutocomplete(true)
		)
        .addStringOption((option) =>
			option.setName('ing3')
            .setDescription('Troisième ingrédient')
            .setRequired(true)
            .setAutocomplete(true)
        )
        .addStringOption((option) =>
			option.setName('ing4')
            .setDescription('Quatrième ingrédient')
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

    let recipes = getRecipesFromIngredients([ing1, ing2, ing3, ing4])

	if (recipes !== null) interaction.reply({ content: `Result is ${recipes[2].name}!` });
	else
		interaction.reply({
			content: 'Pong!',
			ephemeral: true,
		});
};

export { create, invoke };
