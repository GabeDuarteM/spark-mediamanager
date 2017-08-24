import * as React from "react"

import { createMount } from "material-ui/test-utils"

import { returnMockAnime, returnMockMovie, returnMockSerie } from "../../utils/testUtils"
import Poster from "./Poster"

describe("<Poster />", () => {
  beforeEach(() => {
    console.warn = jest.fn(warn => {
      throw new Error(warn)
    })
    console.error = jest.fn(error => {
      throw new Error(error)
    })
  })

  const mount = createMount()

  it("should render without crashing", () => {
    mount(<Poster video={returnMockSerie()[0]} />)
    mount(<Poster video={returnMockMovie()[0]} />)
    mount(<Poster video={returnMockAnime()[0]} showSubtitle hoverEffect className="test" />)
  })
})
