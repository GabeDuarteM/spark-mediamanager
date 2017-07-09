import React from "react"
import { IntlProvider, addLocaleData } from "react-intl"
import en from "react-intl/locale-data/en"
import pt from "react-intl/locale-data/pt"

addLocaleData([...en, ...pt])

function getMessages(locale) {
  return require(`../src/locales/${locale}.json`)
}

const ContainerWrapper = ({ children, locale }) =>
  <IntlProvider locale={locale} messages={getMessages(locale)}>
    <div>
      <style>
        {`
        html,
        body {
          margin: 0;
          user-select: none;
        }
      `}
      </style>
      {children}
    </div>
  </IntlProvider>

export default ContainerWrapper
