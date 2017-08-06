import { EVideoType } from "../../../@types/EVideoType"
import IMovie from "../../../@types/IMovie"
import ISerie from "../../../@types/ISerie"
import { IUnknownAction } from "../../../@types/IUnknownAction"
import IVideoState from "./IVideoState"
import video from "./video"
import { addVideo, VIDEO__ADD_VIDEO } from "./videoActions"

// import { VIDEO__ADD_VIDEO } from "./videoActions"

describe("video reducer", () => {
  it("should return the default state when no state is passed", () => {
    const state = undefined
    const action = IUnknownAction
    const expected: IVideoState = returnInitialState()

    const actual = video(state, action)

    expect(actual).toEqual(expected)
  })
  it("should return the same state when an unknown action is passed", () => {
    const state = returnMockedState()
    const action = IUnknownAction
    const expected = returnMockedState()

    const actual = video(state, action)

    expect(actual).toEqual(expected)
  })
  describe(VIDEO__ADD_VIDEO, () => {
    it("should add an anime to the list", () => {
      const state = returnInitialState()
      const action = addVideo(EVideoType.Anime, swordArtOnline)
      const expected = { ...returnInitialState(), animes: [swordArtOnline] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should add a movie to the list", () => {
      const state = returnInitialState()
      const action = addVideo(EVideoType.Movie, matrix)
      const expected = { ...returnInitialState(), movies: [matrix] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should add a serie to the list", () => {
      const state = returnInitialState()
      const action = addVideo(EVideoType.Serie, gameOfThrones)
      const expected = { ...returnInitialState(), series: [gameOfThrones] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
  })
})

const returnMockedState = (): IVideoState => ({
  animes: [swordArtOnline],
  movies: [matrix],
  series: [gameOfThrones]
})

const returnInitialState = (): IVideoState => ({
  animes: [],
  movies: [],
  series: []
})

const swordArtOnline: ISerie = {
  title: "Sword Art Online",
  year: 2012,
  ids: {
    trakt: 45529,
    slug: "sword-art-online",
    tvdb: 259640,
    imdb: "tt2250192",
    tmdb: 45782,
    tvrage: 32135
  },
  overview:
    "In the near future, a Virtual Reality Massive Multiplayer Online Role-Playing Game (VRMMORPG) " +
    "called Sword Art Online has been released where players control their avatars with their bodies " +
    "using a piece of technology called Nerve Gear. One day, players discover they cannot log out, as " +
    "the game creator is holding them captive unless they reach the 100th floor of the game's tower and " +
    "defeat the final boss. However, if they die in the game, they die in real life. Their struggle for " +
    "survival starts now...",
  first_aired: "2012-07-07T14:30:00.000Z",
  airs: {
    day: "Saturday",
    time: "23:30",
    timezone: "Asia/Tokyo"
  },
  runtime: 24,
  certification: "TV-14",
  network: "Tokyo MX",
  country: "jp",
  trailer: "http://youtube.com/watch?v=C8Jl_-b7ju0",
  homepage: "http://www.swordart-online.net/",
  status: "returning series",
  rating: 8.2001,
  votes: 2109,
  updated_at: "2017-08-03T18:06:39.000Z",
  language: "ja",
  available_translations: ["de", "en", "es", "fr", "it", "ja", "ko", "pt", "ro", "ru", "uk", "zh"],
  genres: ["action", "adventure", "fantasy", "science-fiction", "anime"],
  aired_episodes: 49
}

const matrix: IMovie = {
  title: "The Matrix",
  year: 1999,
  ids: {
    trakt: 481,
    slug: "the-matrix-1999",
    imdb: "tt0133093",
    tmdb: 603
  },
  tagline: "Welcome to the Real World.",
  overview:
    "Set in the 22nd century, The Matrix tells the story of a computer hacker who " +
    "joins a group of underground insurgents fighting the vast and powerful computers " +
    "who now rule the earth.",
  released: "1999-03-30",
  runtime: 136,
  trailer: "http://youtube.com/watch?v=m8e-FF8MsqU",
  homepage: "http://www.warnerbros.com/matrix",
  rating: 8.86088,
  votes: 28034,
  updated_at: "2017-07-20T18:31:48.000Z",
  language: "en",
  available_translations: [
    "bg",
    "bs",
    "cs",
    "da",
    "de",
    "el",
    "en",
    "es",
    "fa",
    "fi",
    "fr",
    "he",
    "hr",
    "hu",
    "id",
    "it",
    "ja",
    "ko",
    "mk",
    "nl",
    "no",
    "pl",
    "pt",
    "ro",
    "ru",
    "sk",
    "sr",
    "sv",
    "th",
    "tr",
    "uk",
    "zh"
  ],
  genres: ["action", "science-fiction"],
  certification: "R"
}
const gameOfThrones: ISerie = {
  title: "Game of Thrones",
  year: 2011,
  ids: {
    trakt: 1390,
    slug: "game-of-thrones",
    tvdb: 121361,
    imdb: "tt0944947",
    tmdb: 1399,
    tvrage: 24493
  },
  overview:
    "Seven noble families fight for control of the mythical land of Westeros. Friction between " +
    "the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. " +
    "Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between" +
    " the realms of men and the icy horrors beyond.",
  first_aired: "2011-04-18T01:00:00.000Z",
  airs: {
    day: "Sunday",
    time: "21:00",
    timezone: "America/New_York"
  },
  runtime: 60,
  certification: "TV-MA",
  network: "HBO",
  country: "us",
  trailer: "http://youtube.com/watch?v=iGp_N3Ir7Do",
  homepage: "http://www.hbo.com/game-of-thrones",
  status: "returning series",
  rating: 9.37146,
  votes: 61412,
  updated_at: "2017-08-06T12:59:29.000Z",
  language: "en",
  available_translations: [
    "ar",
    "bg",
    "bs",
    "cs",
    "da",
    "de",
    "el",
    "en",
    "eo",
    "es",
    "fa",
    "fi",
    "fr",
    "he",
    "hr",
    "hu",
    "id",
    "is",
    "it",
    "ko",
    "lb",
    "lt",
    "nl",
    "pl",
    "pt",
    "ro",
    "ru",
    "sk",
    "sr",
    "sv",
    "th",
    "tr",
    "tw",
    "uk",
    "vi",
    "zh"
  ],
  genres: ["drama", "fantasy", "science-fiction", "action", "adventure"],
  aired_episodes: 63
}
