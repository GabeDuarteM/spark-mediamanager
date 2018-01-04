import * as React from "react"

import { shallow } from "enzyme"

import { transformConsoleMessagesToExceptions } from "../../utils/testUtils"
import DialogContentRoot from "./DialogContentRoot"

describe("COMPONENT: <DialogContentRoot />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  it("should render without crashing", () => {
    const component = (
      <DialogContentRoot>
        <div>text</div>
      </DialogContentRoot>
    )
    shallow(component)
  })

  it("should apply custom classnames to the component", () => {
    const wrapper = shallow(
      <DialogContentRoot className="test">
        <div>text</div>
      </DialogContentRoot>,
    )
    expect(wrapper.hasClass("test")).toBeTruthy()
  })

  it("should render children components", () => {
    const wrapper = shallow(
      <DialogContentRoot>
        <button id="buttonText">text</button>
      </DialogContentRoot>,
    )
    expect(wrapper.find("button#buttonText").exists()).toBeTruthy()
  })
})
