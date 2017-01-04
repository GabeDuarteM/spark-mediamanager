import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Home from './containers/Home'
import VisiblePosters from './containers/VisiblePosters'

export default (
  <Route path='/' component={Home}>
    <IndexRoute component={VisiblePosters} />
  </Route>
)
