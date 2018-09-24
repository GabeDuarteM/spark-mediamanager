import React from 'react'

import { mount } from 'enzyme'

import { transformConsoleMessagesToExceptions } from '../../utils/testUtils'
import AppWrapper from '../AppWrapper/AppWrapper'
import SearchVideoDialog from './SearchVideoDialog'

describe('COMPONENT: <SearchVideoDialog />', () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  it('should render without crashing', () => {
    const component = (
      <AppWrapper locale="en">
        <SearchVideoDialog
          open
          classNames="test"
          selectedType="anime"
          resetRoute={jest.fn}
          handleChange={evt => jest.fn}
        />
      </AppWrapper>
    )
    mount(component)
  })

  it('should render without crashing without optional parameters', () => {
    const component = (
      <AppWrapper locale="en">
        <SearchVideoDialog
          open
          selectedType="anime"
          resetRoute={jest.fn}
          handleChange={evt => jest.fn}
        />
      </AppWrapper>
    )
    mount(component)
  })
})
