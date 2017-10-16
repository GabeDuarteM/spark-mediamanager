import * as React from "react"

import { shallow, ShallowWrapper } from "enzyme"
import { BrowserRouter, Link } from "react-router-dom"

import { transformConsoleMessagesToExceptions } from "../../utils/testUtils"
import { returnMockAnime, returnMockMovie, returnMockSerie } from "../../utils/testUtils"
import Poster from "../Poster/Poster"
import PosterList from "./PosterList"

describe("COMPONENT: <PosterList />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  let wrapperShallow: ShallowWrapper<any, any>
  const videos = [...returnMockSerie(), ...returnMockMovie(), ...returnMockAnime()]
  const setEditVideo = jest.fn()

  it("should render without crashing", () => {
    const component = (
      <BrowserRouter>
        <PosterList videos={videos} setEditVideo={setEditVideo} />
      </BrowserRouter>
    )
    wrapperShallow = shallow(component)
  })

  it("should render a Poster component for each video passed", () => {
    expect(
      wrapperShallow
        .dive()
        .dive()
        .dive()
        .find(Poster).length
    ).toBe(videos.length)
  })

  it("should be able to call a function when clicking the link", () => {
    wrapperShallow
      .dive()
      .dive()
      .dive()
      .find(Link)
      .forEach(elem => elem.simulate("click"))
    expect(setEditVideo.mock.calls.length).toEqual(videos.length)
    setEditVideo.mockReset()
  })

  it("should pass the video to the function when clicking the link", () => {
    wrapperShallow
      .dive()
      .dive()
      .dive()
      .find(Link)
      .first()
      .simulate("click")
    expect(setEditVideo).toHaveBeenCalledWith(videos[0])
    setEditVideo.mockReset()
  })
})
