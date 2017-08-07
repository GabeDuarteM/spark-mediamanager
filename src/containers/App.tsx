import * as React from "react"

import { addLocaleData, IntlProvider } from "react-intl"
import * as en from "react-intl/locale-data/en"
import * as pt from "react-intl/locale-data/pt"
import { Provider } from "react-redux"
import { Store } from "redux"

import Theme from "../components/Theme/Theme"
import IState from "../store/IState"
import { getMessages } from "../utils/localeUtils"
import HomeContainer from "./HomeContainer/HomeContainer"

addLocaleData([...en, ...pt])

const App = ({ store }: { store: Store<IState> }) => {
  return (
    <IntlProvider locale="pt" messages={getMessages("pt")}>
      <Provider store={store}>
        <Theme>
          <HomeContainer />
        </Theme>
      </Provider>
    </IntlProvider>
  )
}

export default App
