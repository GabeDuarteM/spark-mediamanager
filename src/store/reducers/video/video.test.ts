import { EVideoType } from "../../../@types/EVideoType"
import IVideo from "../../../@types/IVideo"
import { returnMockAnime, returnMockMovie, returnMockSerie } from "../../../utils/testUtils"
import IVideoState from "./IVideoState"
import video from "./video"
import { add, edit, remove, VIDEO__ADD, VIDEO__EDIT, VIDEO__REMOVE } from "./videoActions"

describe("video reducer", () => {
  it("should return the default state when no state is passed", () => {
    const state = undefined
    const action = undefined
    const expected: IVideoState = returnInitialState()

    const actual = video(state, action)

    expect(actual).toEqual(expected)
  })
  it("should return the same state when an unknown action is passed", () => {
    const state = returnMockedState()
    const action = undefined
    const expected = returnMockedState()

    const actual = video(state, action)

    expect(actual).toEqual(expected)
  })
  describe(VIDEO__ADD, () => {
    it("should add an anime to the list", () => {
      const state = returnInitialState()
      const action = add("anime", animes[0])
      const expected: IVideoState = { ...returnInitialState(), animes: [animes[0]] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should add a movie to the list", () => {
      const state = returnInitialState()
      const action = add("movie", movies[0])
      const expected: IVideoState = { ...returnInitialState(), movies: [movies[0]] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should add a serie to the list", () => {
      const state = returnInitialState()
      const action = add("serie", series[0])
      const expected: IVideoState = { ...returnInitialState(), series: [series[0]] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should throw if videoType is invalid", () => {
      const state = returnInitialState()
      const action = add("invalid" as EVideoType, series[0])

      expect(() => video(state, action)).toThrowError(`invalid videoType recieved from handleAdd: invalid`)
    })
  })
  describe(VIDEO__REMOVE, () => {
    it("should remove an anime to the list", () => {
      const state = returnMockedState()
      const action = remove("anime", animes[0].id)
      const expected: IVideoState = { ...returnMockedState(), animes: [animes[1]] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should remove a movie to the list", () => {
      const state = returnMockedState()
      const action = remove("movie", movies[0].id)
      const expected: IVideoState = { ...returnMockedState(), movies: [movies[1]] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should remove a serie to the list", () => {
      const state = returnMockedState()
      const action = remove("serie", series[0].id)
      const expected: IVideoState = { ...returnMockedState(), series: [series[1]] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should throw if videoType is invalid", () => {
      const state = returnInitialState()
      const action = remove("invalid" as EVideoType, series[0].id)

      expect(() => video(state, action)).toThrowError(`invalid videoType recieved from handleRemove: invalid`)
    })
  })
  describe(VIDEO__EDIT, () => {
    it("should edit an anime on the list", () => {
      const state = returnMockedState()
      const editedVideo: IVideo = { ...animes[0], api: { ...animes[0].api, title: "UPDATED" } }
      const action = edit("anime", editedVideo)
      const expected: IVideoState = { ...returnMockedState(), animes: [editedVideo, animes[1]] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should edit a movie on the list", () => {
      const state = returnMockedState()
      const editedVideo: IVideo = { ...movies[0], api: { ...movies[0].api, title: "UPDATED" } }
      const action = edit("movie", editedVideo)
      const expected: IVideoState = { ...returnMockedState(), movies: [editedVideo, movies[1]] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should edit a serie on the list", () => {
      const state = returnMockedState()
      const editedVideo: IVideo = { ...series[0], api: { ...series[0].api, title: "UPDATED" } }
      const action = edit("serie", editedVideo)
      const expected: IVideoState = { ...returnMockedState(), series: [editedVideo, series[1]] }

      const actual = video(state, action)

      expect(actual).toEqual(expected)
    })
    it("should throw if videoType is invalid", () => {
      const state = returnInitialState()
      const editedVideo: IVideo = { ...series[0], api: { ...series[0].api, title: "UPDATED" } }
      const action = edit("invalid" as EVideoType, editedVideo)

      expect(() => video(state, action)).toThrowError(`invalid videoType recieved from handleEdit: invalid`)
    })
  })
})

const returnMockedState = (): IVideoState => ({
  animes,
  movies,
  series,
})

const returnInitialState = (): IVideoState => ({
  animes: [],
  movies: [],
  series: [],
})

const animes = returnMockAnime()
const movies = returnMockMovie()
const series = returnMockSerie()
