/**
 * Module Imports
 */
const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX, LOCALE, MONGODB_URI } = require("./util/EvobotUtil");
const path = require("path");
const i18n = require("i18n");
const { Structures, Invite } = require('discord.js');
const fetch = require("node-fetch")
const mongoDB = require('mongoose');
const blacklistModel = require('./schemas/blacklist');
const fs = require('fs');
const { exists } = require("./schemas/blacklist");

Structures.extend('VoiceChannel', VoiceChannel => {
  return class EpicVoiceChannel extends VoiceChannel {
    constructor(client, data) {
      super(client, data);
      this.applications = {
        "youtube_together": "755600276941176913",
        "watch_together_dev": "880218832743055411",
        "fishington": "814288819477020702",
        "chess_in_the_park": "832012774040141894",
        "chess_in_the_park_dev": "832012586023256104",
        "betrayal": "773336526917861400",
        "doodlecrew": "878067389634314250",
        "wordsnacks": "879863976006127627",
        "lettertile": "879863686565621790",
        "poker_night": "755827207812677713"
      }
    }

    /**
     * Creates Activity Invite in the voice channel
     * @param {string} Application - Application
     * @returns {Invite}
     */
    activityInvite(application) {
      return new Promise(res => {
        let fetched = fetch(`https://discord.com/api/v8/channels/${this.id}/invites`, {
          method: 'POST',
          body: JSON.stringify({
            max_age: 86400,
            max_uses: 0,
            target_application_id: this.applications[application]?this.applications[application]:application,
            target_type: 2,
            temporary: false,
            validate: null
          }),
          headers: {
            "Authorization": `Bot ${this.client.token}`,
            "Content-Type": "application/json"
          }
        }).then(response => response.json())
        res(fetched)
      })
    }
  }
});

const client = new Client({
  disableMentions: "everyone",
  restTimeOffset: 0
});
if (MONGODB_URI) {
  const db = mongoDB.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log(`Connected to database`)).catch(err => console.log(`Oops, there was an error! ${err}`))
} else {
  console.log(`No MongoDB URI was provided. Blacklist system won't work.`)
}


client.login(TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

i18n.configure({
  locales: ["en", "es", "ko", "fr", "tr", "pt_br", "zh_cn", "zh_tw"],
  directory: path.join(__dirname, "locales"),
  defaultLocale: "en",
  objectNotation: true,
  register: global,

  logWarnFn: function (msg) {
    console.log("warn", msg);
  },

  logErrorFn: function (msg) {
    console.log("error", msg);
  },

  missingKeyFn: function (locale, value) {
    return value;
  },

  mustacheConfig: {
    tags: ["{{", "}}"],
    disable: false
  }
});

/**
 * Client Events
 */
client.on("ready", () => {
  console.log(`${client.user.username} ready!`);
  client.user.setActivity(`${PREFIX}help and ${PREFIX}play`, { type: "LISTENING" });
});
client.on("warn", (info) => console.log(info));
client.on("error", console.error);

/**
 * Import all commands
 */
// First get the category directories
const isDirectory = source => fs.lstatSync(source).isDirectory();
const getDirectories = source => fs.readdirSync(source).map(name => path.join(source, name)).filter(isDirectory);

// Then load the commands
getDirectories(__dirname + '/commands').forEach(category => {
  const commandFiles = fs.readdirSync(category).filter(file => file.endsWith('.js'));

  for(const file of commandFiles) {
    const command = require(`${category}/${file}`);
    client.commands.set(command.name, command);
  }
});

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
  if (!prefixRegex.test(message.content)) return;

  const [, matchedPrefix] = message.content.match(prefixRegex);

  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  if (MONGODB_URI) {
    const blacklisted = await blacklistModel.find();

    let isBlacklisted;

    if (blacklisted) {
      isBlacklisted = blacklisted.find(u => u.userId === message.author.id)
    }

    if (isBlacklisted) return;
  }


  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        i18n.__mf("common.cooldownMessage", { time: timeLeft.toFixed(1), name: command.name })
      );
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply(i18n.__("common.errorCommend")).catch(console.error);
  }
});
