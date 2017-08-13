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
    const state: IEditVideoState = { video: serie }
    const action = IUnknownAction
    const expected: IEditVideoState = { video: serie }

    const actual = editVideo(state, action)

    expect(actual).toEqual(expected)
  })
  describe(EDIT_VIDEO__SET, () => {
    it("should set the anime on the video property", () => {
      const state = returnInitialState()
      const action = set(anime)
      const expected: IEditVideoState = { video: anime }

      const actual = editVideo(state, action)

      expect(actual).toEqual(expected)
    })
    it("should set the movie on the video property", () => {
      const state = returnInitialState()
      const action = set(movie)
      const expected: IEditVideoState = { video: movie }

      const actual = editVideo(state, action)

      expect(actual).toEqual(expected)
    })
    it("should set the serie on the video property", () => {
      const state = returnInitialState()
      const action = set(serie)
      const expected: IEditVideoState = { video: serie }

      const actual = editVideo(state, action)

      expect(actual).toEqual(expected)
    })
  })
  describe(EDIT_VIDEO__CLEAR, () => {
    it("should clear the anime on the video property", () => {
      const state: IEditVideoState = { video: anime }
      const action = clear()
      const expected: IEditVideoState = returnInitialState()

      const actual = editVideo(state, action)

      expect(actual).toEqual(expected)
    })
    it("should clear the movie on the video property", () => {
      const state: IEditVideoState = { video: movie }
      const action = clear()
      const expected: IEditVideoState = returnInitialState()

      const actual = editVideo(state, action)

      expect(actual).toEqual(expected)
    })
    it("should clear the serie on the video property", () => {
      const state: IEditVideoState = { video: serie }
      const action = clear()
      const expected: IEditVideoState = returnInitialState()

      const actual = editVideo(state, action)

      expect(actual).toEqual(expected)
    })
  })
})

const returnInitialState = (): IEditVideoState => ({
  video: undefined,
})

const anime = returnMockAnime()

const movie = returnMockMovie()

const serie = returnMockSerie()
