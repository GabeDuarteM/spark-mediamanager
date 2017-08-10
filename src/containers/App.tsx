import * as React from "react"

import { addLocaleData, IntlProvider } from "react-intl"
import * as en from "react-intl/locale-data/en"
import * as pt from "react-intl/locale-data/pt"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { Store } from "redux"

import Routes from "../components/Routes/Routes"
import Theme from "../components/Theme/Theme"
import IStoreState from "../store/IStoreState"
import { getMessages } from "../utils/localeUtils"

addLocaleData([...en, ...pt])

const App = ({ store }: { store: Store<IStoreState> }) => {
  return (
    <IntlProvider locale="pt" messages={getMessages("pt")}>
      <Provider store={store}>
        <Theme>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Theme>
      </Provider>
    </IntlProvider>
  )
}

export default App
