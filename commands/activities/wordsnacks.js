const { MessageEmbed } = require("discord.js");
const { Client } = require("discord.js")//Importing client
const client = new Client()//creating a new discord.js client

module.exports = {
    name: "wordsnacks",
    description: "Starts a Words Snacks session",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["ws"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {require("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    async execute(message, args){
        let Invite = await message.member.voice.channel.activityInvite("879863976006127627")//Made using discordjs-activity package
        let embed = new MessageEmbed()
        .setAuthor("Word Snacks", "https://media.discordapp.net/attachments/803959840547405854/907967010183450694/unknown.png?v=1")
        .setColor("#FF0000")
        .setDescription(`
Using **Words Snacks** you can play Wrods Snacks with your friends in a Voice Channel. Click *Join Words Snacks* to join in!

__**[Join Words Snacks](https://discord.com/invite/${Invite.code})**__

⚠ **Note:** This only works in Desktop
`)
        message.channel.send(embed)
  }
};