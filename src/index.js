import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './app.material-ui.theme'
import App from './containers/App'
import configureStore from './store/store'
import db from './helpers/api/db'
import './app.global.css'

const initialState = {
  videos: {
    series: db.getSeries(),
    animes: null,
    movies: null,
    editVideo: null,
    searchVideo: {
      type: 'serie',
      typeText: 'Serie',
      text: null,
      loading: false
    }
  },
  filters: {
    visibility: 'SERIES'
  }
}

const store = configureStore(initialState)
const history = syncHistoryWithStore(browserHistory, store)
const rootEl = document.getElementById('root')

injectTapEventPlugin()

render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppContainer>
      <App store={store} history={history} />
    </AppContainer>
  </MuiThemeProvider>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default
    render(
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppContainer>
          <NextApp store={store} history={history} />
        </AppContainer>
      </MuiThemeProvider>,
      rootEl
    )
  })
}
