[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/kelv26/evobot)

This is a custom [EvoBot](https://github.com/eritislami/evobot) from [@eritislami](https://github.com/eritislami) with Spotify support and Discord Activities. <br>
Modified by [@kelv26](https://github.com/kelv26)

## Requirements

1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. YouTube Data API v3 Key **[Guide](https://developers.google.com/youtube/v3/getting-started)**  
2.1 **(Optional)** Soundcloud Client ID **[Guide](https://github.com/zackradisic/node-soundcloud-downloader#client-id)**
3. Node.js v14.0.0 or newer (Recommended Node.js v14.15.5)
4. Spotify API key

## 🚀 Getting Started

If deploying to Heroku make sure to create config variables

```
git clone https://github.com/kelv26/customevobot
cd evobot
npm install
```

After installation finishes you can use `node index.js` to start the bot.

## ⚙️ Configuration

Copy or Rename `config.json.example` to `config.json` and fill out the values:

⚠️ **Note: Never commit or share your token or api keys publicly** ⚠️

```json
{
  "TOKEN": "",
  "YOUTUBE_API_KEY": "",
  "SOUNDCLOUD_CLIENT_ID": "",
  "MAX_PLAYLIST_SIZE": 10,
  "PREFIX": "/",
  "PRUNING": false,
  "LOCALE": "en",
  "DEFAULT_VOLUME": 100,
  "STAY_TIME": 30
}
```

Currently available locales are:
- English (en)
- French (fr)
- Spanish (es)
- Turkish (tr)
- Korean (ko)
- Brazilian Portuguese (pt_br)
- Simplified Chinese (zh_cn)
- Traditional Chinese (zh_tw)
- Check [Contributing](#-contributing) if you wish to help add more languages!

## 📝 Features & Commands

> Note: The default prefix is '/'

* 🎶 Play music from YouTube via url

`/play https://www.youtube.com/watch?v=GLvohMXgcBo`

* 🔎 Play music from YouTube via search query

`/play under the bridge red hot chili peppers`

* 🎶 Play music from Soundcloud via url

`/play https://soundcloud.com/blackhorsebrigade/pearl-jam-alive`

* 🎶 Play music, playlist or album from Spotify via url

`/play https://open.spotify.com/track/4GYUFc9nA3CqfotomfA95m?si=ae1394139f2e41cf`
`/play https://open.spotify.com/album/5EzDhyNZuO7kuaABHwbBKX?si=gpAopoThRgmJLwxy_FESgg`
`/play https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn?si=cb1683e2470a42cf`

* 🔎 Search and select music to play

`/search Pearl Jam`

Reply with song number or numbers seperated by comma that you wish to play

Examples: `1` or `1,2,3`

* 📃 Play youtube playlists via url

`/playlist https://www.youtube.com/watch?v=YlUKcNNmywk&list=PL5RNCwK3GIO13SR_o57bGJCEmqFAwq82c`

* 🔎 Play youtube playlists via search query

`/playlist linkin park meteora`
* Now Playing (/np)
* Queue system (/queue, /q)
* Loop / Repeat (/loop)
* Shuffle (/shuffle)
* Volume control (/volume, /v)
* Lyrics (/lyrics, /ly)
* Pause (/pause)
* Resume (/resume, /r)
* Skip (/skip, /s)
* Skip to song # in queue (/skipto, /st)
* Move a song in the queue (/move, /mv)
* Remove song # from queue (/remove, /rm)
* Show api ping (/ping)
* Show bot uptime (/uptime)
* Toggle pruning of bot messages (/pruning)
* Localization in 6 languages
* Help (/help, /h)
* Youtube Together (/youtube, /yt)
* Poker Night (/poker, /pk)
* Word Snacks (/wordsnacks, /ws)
* Letter Tile (/lettertile, /lt)
* Command Handler from [discordjs.guide](https://discordjs.guide/)
* Media Controls via Reactions

## 📝 Credits

[@eritislami](https://github.com/eritislami) For the core application from [@eritislami/evobot](https://github.com/eritislami/evobot)
