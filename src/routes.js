import React from 'react'
import { Route } from 'react-router'
import Home from './containers/Home'
import EditVideo from './containers/EditVideo'

export default (
  <Route path='/' component={Home}>
    <Route path='EditVideo' component={EditVideo} />
  </Route>
)
