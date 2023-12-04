import { getFoodItemArray } from '../lib/tools.js';
const once = false;
const name = 'interactionCreate';

async function invoke(interaction) {
	// Check if the interaction is a command and call the invoke method in the corresponding file
	// The #commands ES6 import-abbreviation is defined in the package.json
	if (interaction.isChatInputCommand()) {
		(await import(`#commands/${interaction.commandName}`)).invoke(interaction);
	}
	if (interaction.isAutocomplete()){
		if (interaction.commandName === "recipe") { 
			const focusedOption = interaction.options.getFocused(true);
			let choices = getFoodItemArray()
			const filtered = choices.filter(choice => choice.name.toLowerCase().includes(focusedOption.value));
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
}

export { once, name, invoke };
