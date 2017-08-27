import * as React from "react"

import { ReactWrapper, ShallowWrapper } from "enzyme"
import { createMount, createShallow } from "material-ui/test-utils"
import { BrowserRouter } from "react-router-dom"

import { transformConsoleMessagesToExceptions } from "../../utils/testUtils"
import { returnMockAnime, returnMockMovie, returnMockSerie } from "../../utils/testUtils"
import PosterList from "./PosterList"

describe("COMPONENT: <PosterList />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  const mount = createMount()
  const shallow = createShallow()
  let wrapperMount: ReactWrapper<any, any>
  let wrapperShallow: ShallowWrapper<any, any>
  const videos = [...returnMockSerie(), ...returnMockMovie(), ...returnMockAnime()]

  it("should render without crashing", () => {
    const component = (
      <BrowserRouter>
        <PosterList videos={videos} setEditVideo={jest.fn()} />
      </BrowserRouter>
    )
    wrapperMount = mount(component)
    wrapperShallow = shallow(component)
  })

  it("should match the snapshot", () => {
    expect(wrapperShallow).toMatchSnapshot()
  })
})
