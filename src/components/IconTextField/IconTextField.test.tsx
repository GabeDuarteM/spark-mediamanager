import * as React from "react"

import { ReactWrapper, ShallowWrapper } from "enzyme"
import { IconButton, TextField } from "material-ui"
import { Search } from "material-ui-icons"
import { createMount, createShallow } from "material-ui/test-utils"

import { transformConsoleMessagesToExceptions } from "../../utils/testUtils"
import IconTextField from "./IconTextField"

describe("COMPONENT: <IconTextField />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  const mount = createMount()
  const shallow = createShallow()
  let wrapperMount: ReactWrapper<any, any>
  let wrapperShallow: ShallowWrapper<any, any>

  it("should render without crashing", () => {
    const component = <IconTextField IconSvg={Search} />
    wrapperMount = mount(component)
    wrapperShallow = shallow(component)
  })

  it("should render a textbox", () => {
    expect(wrapperMount.childAt(0).is(TextField)).toBeTruthy()
  })

  it("should render an iconButton", () => {
    expect(wrapperMount.childAt(1).is(IconButton)).toBeTruthy()
  })

  it("should render a svg inside the iconButton", () => {
    expect(wrapperShallow.find(IconButton).children().first().is(Search)).toBeTruthy()
  })
})
