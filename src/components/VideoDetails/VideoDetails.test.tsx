import * as React from "react"

import { mount, shallow } from "enzyme"
import * as injectTapEventPlugin from "react-tap-event-plugin"

import { returnMockAnime, transformConsoleMessagesToExceptions } from "../../utils/testUtils"
import AppWrapper from "../AppWrapper/AppWrapper"
import VideoDetails from "./VideoDetails"

injectTapEventPlugin()

describe("COMPONENT: <VideoDetails />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  it("should render without crashing", () => {
    const component = (
      <AppWrapper locale="en">
        <VideoDetails handleClose={jest.fn} open video={returnMockAnime()[0]} />
      </AppWrapper>
    )
    mount(component)
    shallow(component)
  })

  it("should render without crashing with optional parameters", () => {
    const component = (
      <AppWrapper locale="en">
        <VideoDetails open handleClose={jest.fn} video={returnMockAnime()[0]} classNames="test" />
      </AppWrapper>
    )
    mount(component)
    shallow(component)
  })
})
