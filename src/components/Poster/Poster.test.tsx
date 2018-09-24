import React from "react"

import { shallow } from "enzyme"

import { transformConsoleMessagesToExceptions } from "../../utils/testUtils"
import { returnMockAnime, returnMockMovie, returnMockSerie } from "../../utils/testUtils"
import PosterOverlay from "../PosterOverlay/PosterOverlay"
import Poster from "./Poster"

describe("<Poster />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  it("should render without crashing", () => {
    shallow(<Poster video={returnMockSerie()[0]} />)
    shallow(<Poster video={returnMockMovie()[0]} />)
    shallow(<Poster video={returnMockAnime()[0]} />)
  })

  it("should render passing all the props without crashing", () => {
    shallow(<Poster video={returnMockAnime()[0]} showSubtitle hoverEffect className="test" />)
    shallow(<Poster video={returnMockAnime()[0]} showSubtitle={false} hoverEffect className="test" />)
  })

  it("should place a class inside the component", () => {
    const wrapper = shallow(<Poster video={returnMockAnime()[0]} className="test" />)
    expect(wrapper.first().hasClass("test")).toBeTruthy()
  })

  it("should render a PosterOverlay when showSubtitle is true", () => {
    const wrapper = shallow(<Poster video={returnMockAnime()[0]} showSubtitle className="test" />)
    expect(
      wrapper
        .dive()
        .find(PosterOverlay)
        .exists(),
    ).toBeTruthy()
  })

  it("should not render a PosterOverlay when showSubtitle is false", () => {
    const wrapper = shallow(<Poster video={returnMockAnime()[0]} showSubtitle={false} className="test" />)
    expect(
      wrapper
        .dive()
        .find(PosterOverlay)
        .exists(),
    ).toBeFalsy()
  })
})
