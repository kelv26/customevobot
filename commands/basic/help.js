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
      .setDescription("Here are a list of available commands of the bot, Enjoy!")
      .setColor("#00b515");

    commands.forEach((cmd,i) => {
      if (i==0){
        helpEmbed.addField(
          '\u200B','~~-----------------------------------------------------------------------------------------------~~',false
        );
        helpEmbed.addField(
          '<:rocket:420150420046660911> Discord Activities', 'Commands to start discord activities.', false
        );
        helpEmbed.addField(
          `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
          `${cmd.description}`,
          true
        );
      }
      else if (i!=6){
        helpEmbed.addField(
          `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
          `${cmd.description}`,
          true
        );
      }
      else{
        helpEmbed.addField(
          '\u200B','~~-----------------------------------------------------------------------------------------------~~',false
        );
        helpEmbed.addField(
          '<:notepad_spiral:420150420046660911> Commands','Basic Commands for the bot.',false
        );
        helpEmbed.addField(
          `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
          `${cmd.description}`,
          true
        );
      }
    });

    helpEmbed.setTimestamp();
    helpEmbed.setFooter('Music is love, Music is life 🎧', 'https://cdn.discordapp.com/app-icons/877872539068690462/a79b3355cdad28648f0a0d9cd406dbe4.png');

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
