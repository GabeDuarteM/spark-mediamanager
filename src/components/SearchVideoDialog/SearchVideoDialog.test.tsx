//  TODO: When https://github.com/airbnb/enzyme/issues/1150 gets closed, uncomment the mount part. <16-10-17, Gabriel Duarte> //
import * as React from "react"

import { shallow } from "enzyme"

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
    // mount(component)
  })

  it("should render without crashing without optional parameters", () => {
    const component = (
      <AppWrapper locale="en">
        <SearchVideoDialog open selectedType="anime" resetRoute={jest.fn} />
      </AppWrapper>
    )
    shallow(component)
    // mount(component)
  })
})
