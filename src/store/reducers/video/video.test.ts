import { EVideoType } from "../../../@types/EVideoType"
import IVideo from "../../../@types/IVideo"
import { returnMockAnime, returnMockMovie, returnMockSerie } from "../../../utils/testUtils"
import IUnknownAction from "../IUnknownAction"
import IVideoState from "./IVideoState"
import video from "./video"
import {
  add,
  edit,
  remove,
  VIDEO__ADD,
  VIDEO__EDIT,
  VIDEO__REMOVE,
  VIDEO__VISIBILITY_FILTER,
  visibilityFilter,
} from "./videoActions"

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
      const action = add(EVideoType.Anime, anime)
      const expected: IVideoState = { ...returnInitialState(), animes: [anime] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should add a movie to the list", () => {
      const state = returnInitialState()
      const action = add(EVideoType.Movie, movie)
      const expected: IVideoState = { ...returnInitialState(), movies: [movie] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should add a serie to the list", () => {
      const state = returnInitialState()
      const action = add(EVideoType.Serie, serie)
      const expected: IVideoState = { ...returnInitialState(), series: [serie] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
  })
  describe(VIDEO__REMOVE, () => {
    it("should remove an anime to the list", () => {
      const state = returnMockedState()
      const action = remove(EVideoType.Anime, anime.id)
      const expected: IVideoState = { ...returnMockedState(), animes: [] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should remove a movie to the list", () => {
      const state = returnMockedState()
      const action = remove(EVideoType.Movie, movie.id)
      const expected: IVideoState = { ...returnMockedState(), movies: [] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should remove a serie to the list", () => {
      const state = returnMockedState()
      const action = remove(EVideoType.Serie, serie.id)
      const expected: IVideoState = { ...returnMockedState(), series: [] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
  })
  describe(VIDEO__EDIT, () => {
    it("should edit an anime on the list", () => {
      const state = returnMockedState()
      const editedVideo: IVideo = { ...anime, api: { ...anime.api, title: "UPDATED" } }
      const action = edit(EVideoType.Anime, editedVideo)
      const expected: IVideoState = { ...returnMockedState(), animes: [editedVideo] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should edit a movie on the list", () => {
      const state = returnMockedState()
      const editedVideo: IVideo = { ...movie, api: { ...movie.api, title: "UPDATED" } }
      const action = edit(EVideoType.Movie, editedVideo)
      const expected: IVideoState = { ...returnMockedState(), movies: [editedVideo] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should edit a serie on the list", () => {
      const state = returnMockedState()
      const editedVideo: IVideo = { ...serie, api: { ...serie.api, title: "UPDATED" } }
      const action = edit(EVideoType.Serie, editedVideo)
      const expected: IVideoState = { ...returnMockedState(), series: [editedVideo] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
  })
  describe(VIDEO__VISIBILITY_FILTER, () => {
    it("should set the visibility filter to series", () => {
      const state: IVideoState = { ...returnMockedState(), visibilityFilter: EVideoType.Anime }
      const action = visibilityFilter(EVideoType.Serie)
      const expected: IVideoState = { ...returnMockedState(), visibilityFilter: EVideoType.Serie }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should set the visibility filter to movies", () => {
      const state = returnMockedState()
      const action = visibilityFilter(EVideoType.Movie)
      const expected: IVideoState = { ...returnMockedState(), visibilityFilter: EVideoType.Movie }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should set the visibility filter to animes", () => {
      const state = returnMockedState()
      const action = visibilityFilter(EVideoType.Anime)
      const expected: IVideoState = { ...returnMockedState(), visibilityFilter: EVideoType.Anime }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
  })
})

const returnMockedState = (): IVideoState => ({
  animes: [anime],
  movies: [movie],
  series: [serie],
  visibilityFilter: EVideoType.Serie,
})

const returnInitialState = (): IVideoState => ({
  animes: [],
  movies: [],
  series: [],
  visibilityFilter: EVideoType.Serie,
})

const anime = returnMockAnime()
const movie = returnMockMovie()
const serie = returnMockSerie()
