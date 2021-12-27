const { MessageEmbed } = require("discord.js");
const { Client } = require("discord.js")//Importing client
const client = new Client()//creating a new discord.js client

module.exports = {
    name: "lettertile",
    description: "Starts a Letter Tile session",
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
    async execute(message, args){
        let Invite = await message.member.voice.channel.activityInvite("879863686565621790")//Made using discordjs-activity package
        let embed = new MessageEmbed()
        .setAuthor("Letter Tile", "https://cdn.discordapp.com/emojis/749289646097432667.png?v=1")
        .setColor("#FF0000")
        .setDescription(`
Using **Letter Tile** you can play Letter Tile with your friends in a Voice Channel. Click *Join Letter Tile* to join in!

__**[Join Letter Tile](https://discord.com/invite/${Invite.code})**__

⚠ **Note:** This only works in Desktop
`)
        message.channel.send(embed)
  }
};