import * as React from "react"

import { ReactWrapper, ShallowWrapper } from "enzyme"
import { createMount, createShallow } from "material-ui/test-utils"

import { transformConsoleMessagesToExceptions } from "../../utils/testUtils"
import DialogContentRoot from "./DialogContentRoot"

describe("COMPONENT: <DialogContentRoot />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  const mount = createMount()
  const shallow = createShallow()
  let wrapperMount: ReactWrapper<any, any>
  let wrapperShallow: ShallowWrapper<any, any>

  it("should render without crashing", () => {
    const component = (
      <DialogContentRoot>
        <div>text</div>
      </DialogContentRoot>
    )
    wrapperMount = mount(component)
    wrapperShallow = shallow(component)
  })

  it("should apply custom classnames to the component", () => {
    const wrapper = shallow(
      <DialogContentRoot className="test">
        <div>text</div>
      </DialogContentRoot>
    )
    expect(wrapper.hasClass("test")).toBeTruthy()
  })

  it("should render children components", () => {
    const wrapper = shallow(
      <DialogContentRoot>
        <button id="buttonText">text</button>
      </DialogContentRoot>
    )
    expect(wrapper.find("button#buttonText").exists()).toBeTruthy()
  })

  it("should match snapshot", () => {
    const wrapper = shallow(
      <DialogContentRoot>
        <button id="buttonText">text</button>
      </DialogContentRoot>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
