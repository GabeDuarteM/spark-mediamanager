import * as React from "react"

import { TextField } from "material-ui"
import { mount, shallow } from "enzyme"

import { transformConsoleMessagesToExceptions } from "../../utils/testUtils"
import AppWrapper from "../AppWrapper/AppWrapper"
import Theme from "./Theme"

describe("COMPONENT: <Theme />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  it("should render without crashing", () => {
    const component = (
      <AppWrapper locale="en">
        <Theme type="dark">
          <div />
        </Theme>
      </AppWrapper>
    )
    mount(component)
    shallow(component)
  })

  it("should render without crashing on light theme", () => {
    const component = (
      <AppWrapper locale="en">
        <Theme type="light">
          <div />
        </Theme>
      </AppWrapper>
    )
    mount(component)
    shallow(component)
  })

  it("should render a mui component without crash", () => {
    const component = (
      <AppWrapper locale="en">
        <Theme type="dark">
          <TextField type="text" />
        </Theme>
      </AppWrapper>
    )
    mount(component)
    shallow(component)
  })
})
