import * as React from "react"

import { shallow } from "enzyme"

import configureStore from "../../store/store"
import { transformConsoleMessagesToExceptions } from "../../utils/testUtils"
import AppWrapper from "../AppWrapper/AppWrapper"
import Home from "./Home"

describe("COMPONENT: <Home />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  const store = configureStore()

  it("should render without crashing", () => {
    const component = (
      <AppWrapper store={store} locale="en">
        <Home selectedTabIndex={0} handleTabChange={jest.fn} changeRouteAdd={jest.fn} />
      </AppWrapper>
    )
    shallow(component)
  })
})
