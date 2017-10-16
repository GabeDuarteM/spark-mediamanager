//  TODO: When https://github.com/airbnb/enzyme/issues/1150 gets closed, uncomment the mount part and
//        implement the onRequestClose's test. <16-10-17, Gabriel Duarte>
import * as React from "react"

// import Modal from "material-ui/internal/Modal"
import { shallow } from "enzyme"
// import { SyntheticEvent } from "react"

import AppWrapper from "../../components/AppWrapper/AppWrapper"
import { transformConsoleMessagesToExceptions } from "../../utils/testUtils"
import SearchVideoDialogContainer from "./SearchVideoDialogContainer"

describe("COMPONENT: <SearchVideoDialogContainer />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  it("should render without crashing", () => {
    const component = (
      <AppWrapper locale="en">
        <SearchVideoDialogContainer />
      </AppWrapper>
    )
    // mount(component)
    shallow(component)
  })

  it("should call onRequestClose's function without crashing", () => {
    // const component = (
    // <AppWrapper locale="en">
    // <SearchVideoDialogContainer />
    // </AppWrapper>
    // )
    // const onRequestClose = mount(component)
    // .find(Modal)
    // .prop("onRequestClose")
    // if (onRequestClose) {
    // onRequestClose({} as SyntheticEvent<{}>)
    // }
    // expect(onRequestClose).toBeDefined()
  })
})
