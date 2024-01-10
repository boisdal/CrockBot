import { SlashCommandBuilder, ChannelType } from 'discord.js';

// Creates an Object in JSON with the data required by Discord's API to create a SlashCommand
const create = () => {
	const command = new SlashCommandBuilder()
		.setName('config')
		.setDescription('Configure diverse parameters')
        .addSubcommand((subcommand) => 
            subcommand.setName('favorite')
            .setDescription('Configure which channel to use for favorite recipes')
            .addChannelOption((option) =>
                option.setName('channel')
                .setDescription('Forum type channel to use for favorite recipes')
                .addChannelTypes(ChannelType.GuildForum, ChannelType.GuildText)
                .setRequired(true))
            .addBooleanOption((option) =>
                option.setName('private')
                .setDescription('Keep the answer for yourself'))
        );
	return command.toJSON();
};

// Called by the interactionCreate event listener when the corresponding command is invoked
const invoke = (bot, interaction) => {
	let channel = interaction.options.getChannel('channel');
    bot.config.favChannel.data[interaction.guildId] = channel.id
    bot.config.favChannel.write()
    let ephemeral = interaction.options.getBoolean('private') ?? false;
    if (interaction.channelId == '1182003255987929178') {ephemeral = true;}
    let answer = `The channel ${channel.name} has succensfully been saved as favorite recipe receiver.`;
    interaction.reply({content: answer, ephemeral:true}).then();
};

export { create, invoke };
