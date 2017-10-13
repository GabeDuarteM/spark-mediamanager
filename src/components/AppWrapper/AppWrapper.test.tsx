import * as React from "react"

import { shallow } from "enzyme"
import configureStore from "redux-mock-store"

import { transformConsoleMessagesToExceptions } from "../../utils/testUtils"
import AppWrapper from "./AppWrapper"

let store: any

describe("COMPONENT: <AppWrapper />", () => {
  beforeEach(() => {
    store = configureStore()()
    transformConsoleMessagesToExceptions()
  })

  it("should render without crashing with no store", () => {
    const component = (
      <AppWrapper locale="en">
        <div />
      </AppWrapper>
    )
    shallow(component)
  })

  it("should render without crashing with store", () => {
    const component = (
      <AppWrapper store={store} locale="en">
        <div />
      </AppWrapper>
    )
    shallow(component)
  })
})
