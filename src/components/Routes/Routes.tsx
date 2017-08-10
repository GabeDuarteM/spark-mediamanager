import * as React from "react"
import { Redirect } from "react-router"
import { Route, Switch } from "react-router-dom"

import Home from "../../containers/HomeContainer/HomeContainer"

const Routes = () =>
  <Switch>
    <Route path="/series" component={Home} />
    <Route path="/movies" component={Home} />
    <Route path="/animes" component={Home} />
    <Route exact path="/" render={() => <Redirect to="/series" />} />
  </Switch>

export default Routes
