// @flow

import React from "react"
import { IntlProvider, addLocaleData } from "react-intl"
import en from "react-intl/locale-data/en"
import pt from "react-intl/locale-data/pt"

import Theme from "../components/Theme/Theme"
import Home from "../components/Home/Home"

addLocaleData([...en, ...pt])

function getMessages(locale) {
  return require(`../locales/${locale}.json`)
}

const App = () => {
  return (
    <IntlProvider locale="pt" messages={getMessages("pt")}>
      <Theme>
        <Home />
      </Theme>
    </IntlProvider>
  )
}

export default App
