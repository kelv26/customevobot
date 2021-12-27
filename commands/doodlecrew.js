const { MessageEmbed } = require("discord.js");
const { Client } = require("discord.js")//Importing client
const client = new Client()//creating a new discord.js client

module.exports = {
    name: "doodlecrew",
    description: "Starts a Doodle Crew game session",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["doodle"],
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
        .setAuthor("Doodle Crew", "https://media.discordapp.net/attachments/711904924639821885/907924116693196800/unknown.png?v=1")
        .setColor("#FF0000")
        .setDescription(`
Using **Doodle Crew** you can play Doodle Crew with your friends in a Voice Channel. Click *Doodle Crew* to join in!

__**[Doodle Crew](https://discord.com/invite/${Invite.code})**__

⚠ **Note:** This only works in Desktop
`)
        message.channel.send(embed)
  }
};