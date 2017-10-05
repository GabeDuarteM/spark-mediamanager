import * as React from "react"

import { ReactWrapper, ShallowWrapper } from "enzyme"
import { createMount, createShallow } from "material-ui/test-utils"
import { BrowserRouter, Link } from "react-router-dom"

import { transformConsoleMessagesToExceptions } from "../../utils/testUtils"
import { returnMockAnime, returnMockMovie, returnMockSerie } from "../../utils/testUtils"
import Poster from "../Poster/Poster"
import PosterList from "./PosterList"

describe("COMPONENT: <PosterList />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  const mount = createMount()
  const shallow = createShallow()
  let wrapperMount: ReactWrapper<any, any>
  let wrapperShallow: ShallowWrapper<any, any>
  const videos = [...returnMockSerie(), ...returnMockMovie(), ...returnMockAnime()]
  const setEditVideo = jest.fn()

  it("should render without crashing", () => {
    const component = (
      <BrowserRouter>
        <PosterList videos={videos} setEditVideo={setEditVideo} />
      </BrowserRouter>
    )
    wrapperMount = mount(component)
    wrapperShallow = shallow(component)
  })

  it("should render a Poster component for each video passed", () => {
    expect(
      wrapperShallow
        .dive()
        .dive()
        .find(Poster).length
    ).toBe(videos.length)
  })

  it("should be able to call a function when clicking the link", () => {
    wrapperShallow
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
      .find(Link)
      .first()
      .simulate("click")
    expect(setEditVideo).toHaveBeenCalledWith(videos[0])
    setEditVideo.mockReset()
  })
})
