import React from 'react'

import { mount, shallow } from 'enzyme'
import Modal from 'material-ui/Modal/Modal'
import { SyntheticEvent } from 'react'

import AppWrapper from '../../components/AppWrapper/AppWrapper'
import { transformConsoleMessagesToExceptions } from '../../utils/testUtils'
import SearchVideoDialogContainer from './SearchVideoDialogContainer'

describe('COMPONENT: <SearchVideoDialogContainer />', () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  it('should render without crashing', () => {
    const component = (
      <AppWrapper locale="en">
        <SearchVideoDialogContainer />
      </AppWrapper>
    )
    mount(component)
    shallow(component)
  })

  it("should call onClose's function without crashing", () => {
    const component = (
      <AppWrapper locale="en">
        <SearchVideoDialogContainer />
      </AppWrapper>
    )
    const onClose = mount(component)
      .find(Modal)
      .prop('onClose')
    if (onClose) {
      onClose({} as SyntheticEvent<{}>)
    }
    expect(onClose).toBeDefined()
  })
})
