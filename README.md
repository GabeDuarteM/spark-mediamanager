# [WIP] Spark Mediamanager

[![travis](https://img.shields.io/travis/GabrielDuarteM/spark-mediamanager/master.svg)](https://travis-ci.org/GabrielDuarteM/spark-mediamanager)
[![appveyor](https://img.shields.io/appveyor/ci/gabrielduartem/spark-mediamanager/master.svg)](https://ci.appveyor.com/project/GabrielDuarteM/spark-mediamanager)
[![codecov](https://img.shields.io/codecov/c/github/GabrielDuarteM/spark-mediamanager.svg)](https://codecov.io/gh/GabrielDuarteM/spark-mediamanager)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
![got](https://img.shields.io/badge/valar-morghulis-brightgreen.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/RkdEqExiEGhtxGZTKJW3uDnk/GabrielDuarteM/spark-mediamanager'><img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/RkdEqExiEGhtxGZTKJW3uDnk/GabrielDuarteM/spark-mediamanager.svg' /></a>

## Description

This is a Media manager, that will give you the possibility to rename those ugly filenames (like `Game.of.Thrones.S07E07.The.Dragon.and.the.Wolf.AMZN.WEBRip.DDP2.`) into something more friendly (like `Game of Thrones - S07E07 - The Dragon and the Wolf`). 

The final filename would be configured according to the user preferences, with the default being something like `{{Title}} - {{S00E00}} - {{EpisodeTitle}}`.

Besides that, the user can configure it to move or soft/hard link the file to some specific directory too.

Spark Mediamanager is supposed to work with `Series`, `Animes` and `Movies` too.

## How to run

* Run `git clone https://github.com/GabrielDuarteM/spark-mediamanager.git`
* If you don't have yarn installed, download it [here](https://yarnpkg.com/pt-BR/docs/install) (this repo uses some yarn-specific features). 
* Run `yarn start`

## Screenshots

![Main screen](http://i.imgur.com/P33ZfDZ.jpg)

![Edit videos](http://i.imgur.com/qPKHeS9.jpg)
