import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'
import DevTools from '../components/DevTools'

const router = routerMiddleware(browserHistory)

const enhancerList = [applyMiddleware(router)]
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__.apply(this, enhancerList)
                  : compose.apply(this, [...enhancerList, DevTools.instrument()])

export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    // START: "Fix" to the Router redux + React hot loader console error annoyance
    // Error: "You cannot change <Router routes>; it will be ignored"
    // More info at https://github.com/gaearon/react-hot-loader/issues/298
    const orgError = console.error
    console.error = (...args) => {
      if (args && args.length === 1 && typeof args[0] === 'string' && args[0].indexOf('You cannot change <Router routes>;') > -1) {

      } else {
        orgError.apply(console, args)
      }
    }
    // END

    module.hot.accept('../reducers', () => {
      let reducers = require('../reducers').default
      store.replaceReducer(reducers)
    })
  }

  return store
}
