import { createStore, applyMiddleware, compose } from 'redux'
import { hashHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'
import DevTools from '../components/DevTools'

const router = routerMiddleware(hashHistory)

const enhancerList = [applyMiddleware(router)]
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__.apply(this, enhancerList)
                  : compose.apply(this, [...enhancerList, DevTools.instrument()])

export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      let reducers = require('../reducers').default
      store.replaceReducer(reducers)
    })
  }

  return store
}
