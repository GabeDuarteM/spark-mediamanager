import * as React from "react"

import { ReactWrapper, ShallowWrapper } from "enzyme"
import { createMount, createShallow } from "material-ui/test-utils"
import { BrowserRouter } from "react-router-dom"

import { transformConsoleMessagesToExceptions } from "../../utils/testUtils"
import { returnMockAnime, returnMockMovie, returnMockSerie } from "../../utils/testUtils"
import Overlay from "../Overlay/Overlay"
import PosterOverlay from "./PosterOverlay"
import { Typography } from "material-ui"

describe("COMPONENT: <PosterOverlay />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  const mount = createMount()
  const shallow = createShallow()
  let wrapperMount: ReactWrapper<any, any>
  let wrapperShallow: ShallowWrapper<any, any>

  it("should render without crashing", () => {
    const component = (
      <BrowserRouter>
        <PosterOverlay title="Game of Thrones" year={2011} />
      </BrowserRouter>
    )
    wrapperMount = mount(component)
    wrapperShallow = shallow(component)
  })

  it("should have an overlay component", () => {
    expect(wrapperMount.find(Overlay).length).toBe(1)
  })

  it("should have 2 typography components", () => {
    expect(wrapperMount.find(Typography).length).toBe(2)
  })

  it("should have the first typography of type title", () => {
    expect(wrapperMount.find(Typography).at(0).prop("type")).toBe("title")
  })

  it("should have the first typography containing the title", () => {
    expect(wrapperMount.find(Typography).at(0).text()).toBe("Game of Thrones")
  })

  it("should have the second typography of type title", () => {
    expect(wrapperMount.find(Typography).at(1).prop("type")).toBe("body2")
  })

  it("should have the second typography containing the year", () => {
    expect(wrapperMount.find(Typography).at(1).text()).toBe("2011")
  })
})
