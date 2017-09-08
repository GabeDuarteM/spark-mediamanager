import * as React from "react"

import Modal from "material-ui/internal/Modal"
import { createMount, createShallow } from "material-ui/test-utils"
import { SyntheticEvent } from "react"

import AppWrapper from "../../components/AppWrapper/AppWrapper"
import { transformConsoleMessagesToExceptions } from "../../utils/testUtils"
import SearchVideoDialogContainer from "./SearchVideoDialogContainer"

describe("COMPONENT: <SearchVideoDialogContainer />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  const mount = createMount()
  const shallow = createShallow()

  it("should render without crashing", () => {
    const component = (
      <AppWrapper locale="en">
        <SearchVideoDialogContainer />
      </AppWrapper>
    )
    mount(component)
    shallow(component)
  })

  it("should call onRequestClose's function without crashing", () => {
    const component = (
      <AppWrapper locale="en">
        <SearchVideoDialogContainer />
      </AppWrapper>
    )

    const onRequestClose = mount(component)
      .find(Modal)
      .prop("onRequestClose")
    if (onRequestClose) {
      onRequestClose({} as SyntheticEvent<{}>)
    }

    expect(onRequestClose).toBeDefined()
  })
})
