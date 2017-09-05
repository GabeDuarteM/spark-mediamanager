import * as React from "react"

import { ReactWrapper, ShallowWrapper } from "enzyme"
import { createMount, createShallow } from "material-ui/test-utils"

import { transformConsoleMessagesToExceptions } from "../../utils/testUtils"
import Overlay from "./Overlay"

describe("COMPONENT: <Overlay />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  const mount = createMount()
  const shallow = createShallow()
  let wrapperMount: ReactWrapper<any, any>
  let wrapperShallow: ShallowWrapper<any, any>

  it("should render without crashing", () => {
    const component = (
      <Overlay className="test">
        <div>test</div>
      </Overlay>
    )
    wrapperMount = mount(component)
    wrapperShallow = shallow(component)
  })

  it("should apply custom classnames to the component", () => {
    expect(wrapperShallow.hasClass("test")).toBeTruthy()
  })
})
