import * as React from "react"
import * as ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"

import App from "./containers/App"
import "./index.css"

const rootEl = document.getElementById("root")

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept("./containers/App", () => {
    const NextApp = require<{ default: typeof App }>("./containers/App").default
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    )
  })
}
