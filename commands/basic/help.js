const { MessageEmbed } = require("discord.js");
const { LOCALE } = require("../../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "help",
  aliases: ["h"],
  description: i18n.__("help.description"),
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle(i18n.__mf("help.embedTitle", { botname: message.client.user.username }))
      .setDescription("Don't know how to use the bot?\nYou've come to the right place!\nEnter one of the commands below to see what this bot can do!")
      .setColor("#00b515")
      .setThumbnail("https://media.discordapp.net/attachments/803959840547405854/928244163592474634/MusicbotLogo.png");
        helpEmbed.addField(
          '\u200B','\u200B',false
        );
        helpEmbed.addField(
          `<:rocket:420150420046660911> Discord Activities`, `**${message.client.prefix}help activities**\nView available commands to start Discord Activities with this bot!`, true
        );
        helpEmbed.addField(
          `<:notepad_spiral:420150420046660911> Music Commands`,`**${message.client.prefix}help commands**\nView Basic Commands for the bot!`,true
        );

    helpEmbed.setTimestamp();
    helpEmbed.setFooter('Music is love, Music is life 🎧', 'https://cdn.discordapp.com/app-icons/877872539068690462/a79b3355cdad28648f0a0d9cd406dbe4.png');

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
