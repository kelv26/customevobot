const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "lettertile",
    description: "Play Letter Tile in discord",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["lt"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {require("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
        if (!message.member.voice.channel) return client.sendTime(message.channel, "❌ | **You must be in a voice channel to play something!**");
        if(!message.member.voice.channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE"))return client.sendTime(message.channel, "❌ | **Bot doesn't have Create Invite Permission**");

        let Invite = await message.member.voice.channel.activityInvite("879863686565621790")//Made using discordjs-activity package
        let embed = new MessageEmbed()
        .setAuthor("Letter Tile", "https://media.discordapp.net/attachments/803959840547405854/907927062214488064/unknown.png?v=1")
        .setColor("#FF0000")
        .setDescription(`
Using **Letter Tile** you can play Letter Tile with your friends in a Voice Channel. Click *Letter Tile* to join in!

__**[Letter Tile](https://discord.com/invite/${Invite.code})**__

⚠ **Note:** This only works in Desktop
`)
        message.channel.send(embed)
    },
    SlashCommand: {
        options: [
        ],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
        run: async (client, interaction, args, { GuildDB }) => {
            const guild = client.guilds.cache.get(interaction.guild_id);
            const member = guild.members.cache.get(interaction.member.user.id);

            if (!member.voice.channel) return client.sendTime(interaction, "❌ | You must be in a voice channel to use this command.");
            if(!member.voice.channel.permissionsFor(guild.me).has("CREATE_INSTANT_INVITE"))return client.sendTime(interaction, "❌ | **Bot doesn't have Create Invite Permission**");

            let Invite = await member.voice.channel.activityInvite("879863686565621790")//Made using discordjs-activity package
            let embed = new MessageEmbed()
            .setAuthor("Letter Tile", "https://media.discordapp.net/attachments/803959840547405854/907927062214488064/unknown.png?v=1")
            .setColor("#FF0000")
            .setDescription(`
Using **Letter Tile** you can play Letter Tile with your friends in a Voice Channel. Click *Join Letter Tile* to join in!

__**[Join Letter Tile](https://discord.com/invite/${Invite.code})**__

⚠ **Note:** This only works in Desktop
`)
            interaction.send(embed.toJSON())
        },
    },
};
