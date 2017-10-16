import * as React from "react"

import { shallow, ShallowWrapper } from "enzyme"

import { transformConsoleMessagesToExceptions } from "../../utils/testUtils"
import Overlay from "./Overlay"

describe("COMPONENT: <Overlay />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  let wrapperShallow: ShallowWrapper<any, any>

  it("should render without crashing", () => {
    const component = (
      <Overlay className="test">
        <div>test</div>
      </Overlay>
    )
    wrapperShallow = shallow(component)
  })

  it("should apply custom classnames to the component", () => {
    expect(wrapperShallow.hasClass("test")).toBeTruthy()
  })
})
