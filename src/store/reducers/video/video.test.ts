import IVideo from "../../../@types/IVideo"
import { returnMockAnime, returnMockMovie, returnMockSerie } from "../../../utils/testUtils"
import IUnknownAction from "../IUnknownAction"
import IVideoState from "./IVideoState"
import video from "./video"
import { add, edit, remove, VIDEO__ADD, VIDEO__EDIT, VIDEO__REMOVE } from "./videoActions"

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
  describe(VIDEO__ADD, () => {
    it("should add an anime to the list", () => {
      const state = returnInitialState()
      const action = add("anime", anime)
      const expected: IVideoState = { ...returnInitialState(), animes: [anime] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should add a movie to the list", () => {
      const state = returnInitialState()
      const action = add("movie", movie)
      const expected: IVideoState = { ...returnInitialState(), movies: [movie] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should add a serie to the list", () => {
      const state = returnInitialState()
      const action = add("serie", serie)
      const expected: IVideoState = { ...returnInitialState(), series: [serie] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
  })
  describe(VIDEO__REMOVE, () => {
    it("should remove an anime to the list", () => {
      const state = returnMockedState()
      const action = remove("anime", anime.id)
      const expected: IVideoState = { ...returnMockedState(), animes: [] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should remove a movie to the list", () => {
      const state = returnMockedState()
      const action = remove("movie", movie.id)
      const expected: IVideoState = { ...returnMockedState(), movies: [] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should remove a serie to the list", () => {
      const state = returnMockedState()
      const action = remove("serie", serie.id)
      const expected: IVideoState = { ...returnMockedState(), series: [] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
  })
  describe(VIDEO__EDIT, () => {
    it("should edit an anime on the list", () => {
      const state = returnMockedState()
      const editedVideo: IVideo = { ...anime, api: { ...anime.api, title: "UPDATED" } }
      const action = edit("anime", editedVideo)
      const expected: IVideoState = { ...returnMockedState(), animes: [editedVideo] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should edit a movie on the list", () => {
      const state = returnMockedState()
      const editedVideo: IVideo = { ...movie, api: { ...movie.api, title: "UPDATED" } }
      const action = edit("movie", editedVideo)
      const expected: IVideoState = { ...returnMockedState(), movies: [editedVideo] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should edit a serie on the list", () => {
      const state = returnMockedState()
      const editedVideo: IVideo = { ...serie, api: { ...serie.api, title: "UPDATED" } }
      const action = edit("serie", editedVideo)
      const expected: IVideoState = { ...returnMockedState(), series: [editedVideo] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
  })
})

const returnMockedState = (): IVideoState => ({
  animes: [anime],
  movies: [movie],
  series: [serie],
})

const returnInitialState = (): IVideoState => ({
  animes: [],
  movies: [],
  series: [],
})

const anime = returnMockAnime()
const movie = returnMockMovie()
const serie = returnMockSerie()
