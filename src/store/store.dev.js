import { createStore, applyMiddleware, compose } from 'redux'
import { hashHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

const router = routerMiddleware(hashHistory)

const enhancer = compose(
  applyMiddleware(router),
  DevTools.instrument()
)

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
