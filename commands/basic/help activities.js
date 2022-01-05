const { MessageEmbed } = require("discord.js");
const { LOCALE } = require("../../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "help activities",
  description: i18n.__("help.description"),
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle(i18n.__mf("help.embedTitle", { botname: message.client.user.username }))
      .setDescription("<:rocket:420150420046660911> **Discord Activities**\nHere are a list of available commands.\n*After using the command, the host will then need to click on the link provided.\nOther members can join the same session via the voice channel.*")
      .setColor("#00b515");

    commands.forEach((cmd,i) => {
      if (i<8){
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
