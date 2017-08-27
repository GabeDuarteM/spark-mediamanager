import * as React from "react"

import { createMount, createShallow } from "material-ui/test-utils"

import { transformConsoleMessagesToExceptions } from "../../utils/testUtils"
import { returnMockAnime, returnMockMovie, returnMockSerie } from "../../utils/testUtils"
import PosterOverlay from "../PosterOverlay/PosterOverlay"
import Poster from "./Poster"

describe("<Poster />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  const mount = createMount()
  const shallow = createShallow()

  it("should render without crashing", () => {
    mount(<Poster video={returnMockSerie()[0]} />)
    mount(<Poster video={returnMockMovie()[0]} />)
    mount(<Poster video={returnMockAnime()[0]} />)
  })

  it("should render passing all the props without crashing", () => {
    mount(<Poster video={returnMockAnime()[0]} showSubtitle hoverEffect className="test" />)
    mount(<Poster video={returnMockAnime()[0]} showSubtitle={false} hoverEffect className="test" />)
  })

  it("should match snapshots", () => {
    expect(shallow(<Poster video={returnMockAnime()[0]} showSubtitle hoverEffect className="test" />)).toMatchSnapshot()
    expect(
      shallow(<Poster video={returnMockAnime()[0]} showSubtitle={false} hoverEffect className="test" />)
    ).toMatchSnapshot()
  })

  it("should place a class inside the component", () => {
    const wrapper = shallow(<Poster video={returnMockAnime()[0]} className="test" />)
    expect(wrapper.first().hasClass("test")).toBeTruthy()
  })

  it("should render a PosterOverlay when showSubtitle is true", () => {
    const wrapper = shallow(<Poster video={returnMockAnime()[0]} showSubtitle className="test" />)
    expect(wrapper.find(PosterOverlay).exists()).toBeTruthy()
  })

  it("should not render a PosterOverlay when showSubtitle is false", () => {
    const wrapper = shallow(<Poster video={returnMockAnime()[0]} showSubtitle={false} className="test" />)
    expect(wrapper.find(PosterOverlay).exists()).toBeFalsy()
  })
})
