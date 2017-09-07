import * as React from "react"

import { createMount, createShallow } from "material-ui/test-utils"

import { transformConsoleMessagesToExceptions } from "../../utils/testUtils"
import AppWrapper from "../AppWrapper/AppWrapper"
import SearchVideoDialog from "./SearchVideoDialog"

describe("COMPONENT: <SearchVideoDialog />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  const mount = createMount()
  const shallow = createShallow()

  it("should render without crashing", () => {
    const component = (
      <AppWrapper locale="en">
        <SearchVideoDialog
          open
          classNames="test"
          selectedType="anime"
          handleChange={event => jest.fn()}
          resetRoute={jest.fn}
        />
      </AppWrapper>
    )
    mount(component)
    shallow(component)
  })

  it("should render without crashing without optional parameters", () => {
    const component = (
      <AppWrapper locale="en">
        <SearchVideoDialog open selectedType="anime" handleChange={event => jest.fn()} resetRoute={jest.fn} />
      </AppWrapper>
    )
    mount(component)
    shallow(component)
  })
})
