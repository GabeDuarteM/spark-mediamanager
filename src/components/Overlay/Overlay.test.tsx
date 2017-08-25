import * as React from "react"

import { createMount, createShallow } from "material-ui/test-utils"

import { transformConsoleMessagesToExceptions } from "../../utils/testUtils"
import Overlay from "./Overlay"

describe("COMPONENT: <Overlay />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  const mount = createMount()
  const shallow = createShallow()

  it("should render without crashing", () => {
    mount(
      <Overlay className="test">
        <div>test</div>
      </Overlay>
    )
  })

  it("should apply custom classnames to the component", () => {
    const wrapper = shallow(
      <Overlay className="test">
        <div>test</div>
      </Overlay>
    )
    expect(wrapper.hasClass("test")).toBeTruthy()
  })
})
