const { MessageEmbed } = require("discord.js");
const { Client } = require("discord.js")//Importing client
const client = new Client()//creating a new discord.js client

module.exports = {
    name: "chesspark",
    description: "Starts a Chess in the Park game session",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["chess"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {require("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    async execute(message, args){
        let Invite = await message.member.voice.channel.activityInvite("832012774040141894")//Made using discordjs-activity package
        let embed = new MessageEmbed()
        .setAuthor("Chess in the Park", "https://media.discordapp.net/attachments/711904924639821885/907925486498373652/unknown.png?v=1")
        .setColor("#FF0000")
        .setDescription(`
Using **Chess in the Park** you can play Chess in the Park with your friends in a Voice Channel. Click *Chess in the Park* to join in!

__**[Chess in the Park](https://discord.com/invite/${Invite.code})**__

⚠ **Note:** This only works in Desktop
`)
        message.channel.send(embed)
  }
};