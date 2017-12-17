import * as React from "react"

import { mount, shallow } from "enzyme"

import { transformConsoleMessagesToExceptions } from "../../utils/testUtils"
import AppWrapper from "../AppWrapper/AppWrapper"
import SearchVideoDialog from "./SearchVideoDialog"

describe("COMPONENT: <SearchVideoDialog />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  it("should render without crashing", () => {
    const component = (
      <AppWrapper locale="en">
        <SearchVideoDialog open classNames="test" selectedType="anime" resetRoute={jest.fn} />
      </AppWrapper>
    )
    shallow(component)
    mount(component)
  })

  it("should render without crashing without optional parameters", () => {
    const component = (
      <AppWrapper locale="en">
        <SearchVideoDialog open selectedType="anime" resetRoute={jest.fn} />
      </AppWrapper>
    )
    shallow(component)
    mount(component)
  })
})
