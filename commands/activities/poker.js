const { MessageEmbed } = require("discord.js");
const { Client } = require("discord.js")//Importing client
const client = new Client()//creating a new discord.js client

module.exports = {
    name: "poker",
    description: "Starts a Poker Night game session",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["pk"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {require("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    async execute(message, args){
        let Invite = await message.member.voice.channel.activityInvite("755827207812677713")//Made using discordjs-activity package
        let embed = new MessageEmbed()
        .setAuthor("Poker Night", "https://media.discordapp.net/attachments/803959840547405854/907967074402439198/unknown.png?v=1")
        .setColor("#FF0000")
        .setDescription(`
Using **Poker Night** you can play Poker Night with your friends in a Voice Channel. Click *Poker Night* to join in!

__**[Poker Night](https://discord.com/invite/${Invite.code})**__

⚠ **Note:** This only works in Desktop
`)
        message.channel.send(embed)
  }
};