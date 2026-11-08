<div align="center">

<h1><a href="https://prasannaone.github.io/Airwave/">🎧 OPEN AIRWAVE · LISTEN LIVE ↗</a></h1>

### Find your frequency.

Your lil corner of radio. Explore stations from around the world and listen live in one simple, browser-based player.

**Tap the big link above and you're on air.**

</div>

---

## What is Airwave?

Airwave is a lightweight internet radio player that brings a large directory of stations into one listening space. Find something familiar, explore somewhere new, or let Airwave pick a station for you.

No account. No installation. Just open it in your browser.

## Features

- **Explore 63,168 radio stations** from a bundled Radio Browser catalogue.
- **Search and filter** by station name, country, language, or genre.
- **Browse your way** with Explore, Favourites, and Recent.
- **Surprise Me** with a playable station from your current filtered results.
- **Keep listening while you browse** with a persistent mini-player and an expandable player.
- **Control playback** with play/pause and previous/next station navigation.
- **Set a sleep timer** from 5 to 60 minutes.
- **Make it yours** with Midnight Purple, AMOLED Black, Ocean, Light, and Forest themes.
- **Choose your interface language** with English and Tamil options.
- **Hide and restore stations** from Settings whenever you want a cleaner list.
- **Back up your favourites** with JSON import and export.

## Getting started

1. [Open Airwave](https://prasannaone.github.io/Airwave/).
2. Search for a station or explore with the country, language, and genre filters.
3. Select a station to start listening.
4. Save favourites, revisit recently played stations, or use **Surprise Me** to discover something random from your current results.

Airwave needs an internet connection to load the station catalogue and play live streams. Use an up-to-date browser that supports gzip decompression.

## Your data

Favourites, recently played stations, hidden stations, and browsing preferences are saved in your browser when local storage is available. They are not automatically synced between devices.

The JSON backup contains **favourites only**. Importing a backup merges favourites without duplicates. Imported stations that are not in the bundled catalogue are kept separately and remain playable. Hidden stations, listening history, and preferences are not included in the backup.

## How it works

Airwave is a static, client-side web app built with:

- HTML
- CSS
- Vanilla JavaScript
- Browser audio playback and local storage

The station catalogue is stored in the separate compressed file `stations.json.gz` and loaded by `index.html` when the app starts. Keep both files in the same directory when hosting your own copy.

The catalogue is based on [Radio Browser](https://www.radio-browser.info/). Radio streams are served by the stations' own stream servers, so availability and playback quality can vary by station.

## Credits

The station directory is powered by [Radio Browser](https://www.radio-browser.info/).

Airwave is an independent project and is not affiliated with Radio Browser or the stations listed in its catalogue.

---

<div align="center">

Made by **Prasanna** ❤️

[Telegram](https://t.me/PrasannaOne)

</div>
