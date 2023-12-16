const once = false;
const name = 'interactionCreate';

async function invoke(bot, interaction) {
	// Check if the interaction is a command and call the invoke method in the corresponding file
	// The #commands ES6 import-abbreviation is defined in the package.json
	if (interaction.isChatInputCommand()) {
		(await import(`#commands/${interaction.commandName}`)).invoke(bot, interaction);
	}
	if (interaction.isAutocomplete()){
		(await import(`#commands/${interaction.commandName}`)).autocomplete(bot, interaction);
	}
}

export { once, name, invoke };
