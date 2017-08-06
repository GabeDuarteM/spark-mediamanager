import { compose, createStore } from "redux"
import rootReducer from "./reducers"

const devtools =
  process.env.NODE_ENV === "development"
    ? // tslint:disable-next-line:no-string-literal
      window["__REDUX_DEVTOOLS_EXTENSION__"] && window["__REDUX_DEVTOOLS_EXTENSION__"]()
    : undefined
const enhancer = compose(devtools)

export default function configureStore(initialState?: any) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const reducers = require("./reducers").default
      store.replaceReducer(reducers)
    })
  }

  return store
}
