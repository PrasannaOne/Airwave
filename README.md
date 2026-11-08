<div align="center">

# Airwave

### Find your frequency.

A little corner of the internet filled with radio.
Discover stations from around the world and listen live, all in one clean, browser-based player.

<a href="https://prasannaone.github.io/Airwave/">
  <img src="https://img.shields.io/badge/🎧%20OPEN%20AIRWAVE-LISTEN%20LIVE-7655E8?style=for-the-badge&labelColor=171522&color=7655E8" alt="Open Airwave · Listen live" height="48">
</a>

[View source](https://github.com/PrasannaOne/Airwave)

</div>

---

## What is Airwave?

Airwave is a lightweight internet radio player built as a standalone web app. It brings a large directory of radio stations into one simple listening space, with quick discovery tools and a player that stays with you while you browse.

No account. No installation. No backend to run.

## Features

- **Explore 63,168+ radio stations** from the bundled station catalogue.
- **Find stations quickly** with search and country, language, and genre filters.
- **Browse your way** with Explore, Favourites, Recent, and Hidden views.
- **Surprise Me** with a random playable station from your current filtered results.
- **Listen live** with a persistent mini-player and an expandable player sheet.
- **Stay in control** with play/pause, previous/next station navigation, and a 5–60 minute sleep timer.
- **Make it yours** with five themes: Midnight Purple, AMOLED Black, Ocean, Light, and Forest.
- **Choose your display language** with the English/Tamil setting.
- **Keep your list tidy** by hiding stations and restoring them later.
- **Back up favourites** with JSON import and export.

## Getting started

1. Open [Airwave](https://prasannaone.github.io/Airwave/).
2. Search for a station, or browse using the filters.
3. Select a station to start listening.
4. Save favourites, revisit recent stations, or let **Surprise Me** pick something for you.

Airwave needs an internet connection to load the station catalogue and play live streams. Use an up-to-date browser with gzip decompression support.

## Your data

Favourites, recently played stations, hidden stations, and browsing preferences are saved in your browser when local storage is available. They stay in that browser and are not automatically synced between devices.

Use **Settings → Export** to download a JSON backup of your favourites. Importing a backup merges favourites without adding duplicates. Stations that are not in the bundled catalogue are kept separately and remain playable. Importing a backup does not modify the station catalogue.

## How it works

Airwave is a static, client-side web app built with:

- HTML
- CSS
- Vanilla JavaScript
- The browser's audio playback and storage capabilities

The station catalogue is stored separately as `stations.json.gz` and loaded by `index.html` when the app starts. Keep both files in the same directory when hosting the app. The catalogue is based on [Radio Browser](https://www.radio-browser.info/); station streams are provided by the stations' own stream servers.

To host your own copy, place `index.html` and `stations.json.gz` together on any static web host that serves files over HTTP or HTTPS. Open the hosted `index.html` URL to use the app.

## Credits

The station directory is powered by [Radio Browser](https://www.radio-browser.info/).

Airwave is an independent project and is not affiliated with Radio Browser or the stations listed in its catalogue. Stream availability and playback quality depend on each station's stream server.

---

<div align="center">

Made by **Prasanna** ❤️

[Airwave](https://prasannaone.github.io/Airwave/) · [Telegram](https://t.me/PrasannaOne)

</div>
