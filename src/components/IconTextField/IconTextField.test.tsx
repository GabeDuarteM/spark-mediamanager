import React from "react"

import { shallow, ShallowWrapper } from "enzyme"
import { IconButton, TextField } from "material-ui"
import { Search } from "material-ui-icons"

import { transformConsoleMessagesToExceptions } from "../../utils/testUtils"
import IconTextField from "./IconTextField"

describe("COMPONENT: <IconTextField />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  let wrapperShallow: ShallowWrapper<any, any>

  it("should render without crashing", () => {
    const component = <IconTextField IconSvg={Search} />
    wrapperShallow = shallow(component)
  })

  it("should render a textbox", () => {
    expect(wrapperShallow.dive().find(TextField).length).toBe(1)
  })

  it("should render an iconButton", () => {
    expect(wrapperShallow.dive().find(IconButton).length).toBe(1)
  })

  it("should render a svg inside the iconButton", () => {
    expect(
      wrapperShallow
        .dive()
        .find(IconButton)
        .children()
        .first()
        .is(Search),
    ).toBeTruthy()
  })
})
