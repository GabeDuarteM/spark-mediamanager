import { v4 } from "uuid"

import IVideo from "../@types/IVideo"

export const returnMockSerie = (): IVideo => ({
  id: v4(),
  path: "D:\\Videos\\Series\\Game of Thrones",
  api: {
    backdrop: "http://image.tmdb.org/t/p/w1280/gX8SYlnL9ZznfZwEH4KJUePBFUM.jpg",
    id: 1399,
    title: "Game of Thrones",
    number_of_episodes: 67,
    number_of_seasons: 7,
    overview:
      "Seven noble families fight for control of the mythical land of Westeros. " +
      "Friction between the houses leads to full-scale war. All while a very ancient" +
      " evil awakens in the farthest north. Amidst the war, a neglected military order " +
      "of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
    popularity: 106.193084,
    poster: "http://image.tmdb.org/t/p/w300/gwPSoYUHAKmdyVywgLpKKA4BjRr.jpg",
    seasons: [
      {
        air_date: "2010-12-05",
        episode_count: 13,
        id: 3627,
        poster: "http://image.tmdb.org/t/p/w300/kMTcwNRfFKCZ0O2OaBZS0nZ2AIe.jpg",
        season_number: 0
      },
      {
        air_date: "2011-04-17",
        episode_count: 10,
        id: 3624,
        poster: "http://image.tmdb.org/t/p/w300/zwaj4egrhnXOBIit1tyb4Sbt3KP.jpg",
        season_number: 1
      },
      {
        air_date: "2012-04-01",
        episode_count: 10,
        id: 3625,
        poster: "http://image.tmdb.org/t/p/w300/5tuhCkqPOT20XPwwi9NhFnC1g9R.jpg",
        season_number: 2
      },
      {
        air_date: "2013-03-31",
        episode_count: 10,
        id: 3626,
        poster: "http://image.tmdb.org/t/p/w300/7d3vRgbmnrRQ39Qmzd66bQyY7Is.jpg",
        season_number: 3
      },
      {
        air_date: "2014-04-06",
        episode_count: 10,
        id: 3628,
        poster: "http://image.tmdb.org/t/p/w300/dniQ7zw3mbLJkd1U0gdFEh4b24O.jpg",
        season_number: 4
      },
      {
        air_date: "2015-04-12",
        episode_count: 10,
        id: 62090,
        poster: "http://image.tmdb.org/t/p/w300/yKOltUHsp9X7dXWIm0hNGcIQa4G.jpg",
        season_number: 5
      },
      {
        air_date: "2016-04-24",
        episode_count: 10,
        id: 71881,
        poster: "http://image.tmdb.org/t/p/w300/zvYrzLMfPIenxoq2jFY4eExbRv8.jpg",
        season_number: 6
      },
      {
        air_date: "2017-07-16",
        episode_count: 7,
        id: 81266,
        poster: "http://image.tmdb.org/t/p/w300/sIIydZjHdFukLQ6jzfaS2c6InqD.jpg",
        season_number: 7
      }
    ],
    year: 2011
  }
})

export const returnMockMovie = (): IVideo => ({
  id: v4(),
  path: "D:\\Videos\\Movies\\The Matrix",
  api: {
    backdrop: "http://image.tmdb.org/t/p/w1280/7u3pxc0K1wx32IleAkLv78MKgrw.jpg",
    adult: false,
    belongs_to_collection: {
      id: 2344,
      name: "The Matrix Collection",
      poster: "http://image.tmdb.org/t/p/w300/lh4aGpd3U9rm9B8Oqr6CUgQLtZL.jpg",
      backdrop: "http://image.tmdb.org/t/p/w1280/RhUxjzNojIJsdZSYTn0CQvdKsn.jpg"
    },
    id: 603,
    overview:
      "Set in the 22nd century, The Matrix tells the story of a computer hacker " +
      "who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    popularity: 10.500883,
    poster: "http://image.tmdb.org/t/p/w300/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg",
    year: 1999,
    tagline: "Welcome to the Real World.",
    title: "The Matrix"
  }
})

export const returnMockAnime = (): IVideo => ({
  id: v4(),
  path: "D:\\Videos\\Animes\\Fate Stay Night Unlimited Bladeworks",
  api: {
    backdrop: "http://image.tmdb.org/t/p/w1280/pNNrGydIr8VtTaw9AdHFT8kuuOr.jpg",
    year: 2014,
    id: 61415,
    title: "Fate/stay night [Unlimited Blade Works]",
    number_of_episodes: 26,
    number_of_seasons: 2,
    overview:
      "Ten years ago, the magus Kiritsugu Emiya saved one lone survivor  " +
      "of a great disaster. As he cried in happiness, he proclaimed that by  " +
      "saving him, he had saved himself. The boy swore then that he would  become a hero who lived " +
      "to save others. Five years after the death of  his foster father, Shirō Emiya finds himself drawn " +
      "into a battle to the  death between seven magi called Masters, where each commands the spirit  of a hero of " +
      "legend called a Servant in pursuit of having one wish  granted by the legendary Holy Grail. In this battle, " +
      "Shirō will finally  have the chance to face the ghosts of his past, and to find his path to  face his dreams " +
      "and his future. Through the power of the Holy Grail, his  wish will finally come true, for a hero of justice " +
      "must have an evil to  defeat.",
    popularity: 1.616535,
    poster: "http://image.tmdb.org/t/p/w300/coTRrpuOF8igbT6zf1Gi5OziZKi.jpg",
    seasons: [
      {
        air_date: "2015-10-06",
        episode_count: 1,
        id: 63902,
        poster: "http://image.tmdb.org/t/p/w300/w1y3ppJsuOwIH87zkRO1bdZ4yJB.jpg",
        season_number: 0
      },
      {
        air_date: "2014-10-12",
        episode_count: 13,
        id: 62874,
        poster: "http://image.tmdb.org/t/p/w300/9VLgxWwfRuwlxp8S3eZWEdzI8fG.jpg",
        season_number: 1
      },
      {
        air_date: "2015-04-04",
        episode_count: 13,
        id: 63980,
        poster: "http://image.tmdb.org/t/p/w300/mrpfeSJMA3tgdvrlWasnjsnIiVF.jpg",
        season_number: 2
      }
    ]
  }
})
