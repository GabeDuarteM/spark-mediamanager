import { EVideoType } from "../../../@types/EVideoType"
import { returnMockAnime, returnMockMovie, returnMockSerie } from "../../../utils/testUtils"
import IUnknownAction from "../IUnknownAction"
import editVideo from "./editVideo"
import { clear, EDIT_VIDEO__CLEAR, EDIT_VIDEO__SET, set } from "./editVideoActions"
import IEditVideoState from "./IEditVideoState"

describe("editVideo reducer", () => {
  it("should return the default state when no state is passed", () => {
    const state = undefined
    const action = IUnknownAction
    const expected: IEditVideoState = returnInitialState()

    const actual = editVideo(state, action)

    expect(actual).toEqual(expected)
  })
  it("should return the same state when an unknown action is passed", () => {
    const state = { video: serie, type: EVideoType.Serie }
    const action = IUnknownAction
    const expected = { video: serie, type: EVideoType.Serie }

    const actual = editVideo(state, action)

    expect(actual).toEqual(expected)
  })
  describe(EDIT_VIDEO__SET, () => {
    it("should set the anime on the video property", () => {
      const state = returnInitialState()
      const action = set(anime, EVideoType.Anime)
      const expected: IEditVideoState = { video: anime, type: EVideoType.Anime }

      const actual = editVideo(state, action)

      expect(actual).toEqual(expected)
    })
    it("should set the movie on the video property", () => {
      const state = returnInitialState()
      const action = set(movie, EVideoType.Movie)
      const expected: IEditVideoState = { video: movie, type: EVideoType.Movie }

      const actual = editVideo(state, action)

      expect(actual).toEqual(expected)
    })
    it("should set the serie on the video property", () => {
      const state = returnInitialState()
      const action = set(serie, EVideoType.Serie)
      const expected: IEditVideoState = { video: serie, type: EVideoType.Serie }

      const actual = editVideo(state, action)

      expect(actual).toEqual(expected)
    })
  })
  describe(EDIT_VIDEO__CLEAR, () => {
    it("should clear the anime on the video property", () => {
      const state = { video: anime, type: EVideoType.Anime }
      const action = clear()
      const expected: IEditVideoState = returnInitialState()

      const actual = editVideo(state, action)

      expect(actual).toEqual(expected)
    })
    it("should clear the movie on the video property", () => {
      const state = { video: movie, type: EVideoType.Movie }
      const action = clear()
      const expected: IEditVideoState = returnInitialState()

      const actual = editVideo(state, action)

      expect(actual).toEqual(expected)
    })
    it("should clear the serie on the video property", () => {
      const state = { video: serie, type: EVideoType.Serie }
      const action = clear()
      const expected: IEditVideoState = returnInitialState()

      const actual = editVideo(state, action)

      expect(actual).toEqual(expected)
    })
  })
})

const returnInitialState = (): IEditVideoState => ({
  video: undefined,
  type: undefined
})

const anime = returnMockAnime()

const movie = returnMockMovie()

const serie = returnMockSerie()
