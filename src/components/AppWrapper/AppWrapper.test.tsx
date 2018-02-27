import * as React from "react"

import { shallow } from "enzyme"
import { MemoryRouter } from "react-router"
import { BrowserRouter } from "react-router-dom"
import * as configureStore from "redux-mock-store"

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

  it("should render a BrowserRouter when process.env.NODE_ENV !== 'test'", () => {
    const backupNodeEnv = process.env.NODE_ENV

    process.env.NODE_ENV = "development"
    jest.resetModules()

    const AppWrapperDev = require("./AppWrapper").default

    const component = (
      <AppWrapperDev store={store} locale="en">
        <div />
      </AppWrapperDev>
    )
    const wrapper = shallow(component)

    expect(
      wrapper
        .dive()
        .dive()
        .dive()
        .dive()
        .dive()
        .name(),
    ).toBe(BrowserRouter.name)
    jest.resetModules()
    process.env.NODE_ENV = backupNodeEnv
  })

  it("should render a BrowserRouter when process.env.NODE_ENV !== 'test'", () => {
    const component = (
      <AppWrapper store={store} locale="en">
        <div />
      </AppWrapper>
    )
    const wrapper = shallow(component)

    expect(
      wrapper
        .dive()
        .dive()
        .dive()
        .dive()
        .dive()
        .name(),
    ).toBe(MemoryRouter.name)
  })
})
