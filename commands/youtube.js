const { canModifyQueue } = require("../util/Util");
const { Client } = require("discord.js")//Importing client
const client = new Client()//creating a new discord.js client
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "youtube",
  aliases: ["yt"],
  description: "Starts a YouTube Together session",
  async execute(client, interaction, args){
    const guild = client.guilds.cache.get(interaction.guild_id);
            const member = guild.members.cache.get(interaction.member.user.id);

            if (!member.voice.channel) return client.sendTime(interaction, "❌ | You must be in a voice channel to use this command.");
            if(!member.voice.channel.permissionsFor(guild.me).has("CREATE_INSTANT_INVITE"))return client.sendTime(interaction, "❌ | **Bot doesn't have Create Invite Permission**");

            let Invite = await member.voice.channel.activityInvite("755600276941176913")//Made using discordjs-activity package
            let embed = new MessageEmbed()
            .setAuthor("YouTube Together", "https://cdn.discordapp.com/emojis/749289646097432667.png?v=1")
            .setColor("#FF0000")
            .setDescription(`
            Using **YouTube Together** you can watch YouTube with your friends in a Voice Channel. Click *Join YouTube Together* to join in!

            __**[Join YouTube Together](https://discord.com/invite/${Invite.code})**__

            ⚠ **Note:** This only works in Desktop
            `)
    return message.channel.send(embed);
    }
};
