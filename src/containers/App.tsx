import React from 'react'

import { Store } from 'redux'

import AppWrapper from '../components/AppWrapper/AppWrapper'
import Routes from '../components/Routes/Routes'
import IStoreState from '../store/IStoreState'

const App = ({ store }: { store: Store<IStoreState> }) => (
  <AppWrapper store={store} locale="pt">
    <Routes />
  </AppWrapper>
)

export default App
