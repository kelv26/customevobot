const { MessageEmbed } = require("discord.js");
const { Client } = require("discord.js")//Importing client
const client = new Client()//creating a new discord.js client

module.exports = {
    name: "betrayal",
    description: "Starts a Betrayal.io game session",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {require("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    async execute(message, args){
        let Invite = await message.member.voice.channel.activityInvite("773336526917861400")//Made using discordjs-activity package
        let embed = new MessageEmbed()
        .setAuthor("Betrayal.io", "https://media.discordapp.net/attachments/803959840547405854/928181633604005959/unknown.png?v=1")
        .setColor("#FF0000")
        .setDescription(`
Using **Betrayal.io** you can play Betrayal.io with your friends in a Voice Channel. Click *Betrayal.io* to join in!

__**[Betrayal.io](https://discord.com/invite/${Invite.code})**__

⚠ **Note:** This only works in Desktop
`)
        message.channel.send(embed)
  }
};