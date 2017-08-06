import * as React from "react"
import { addLocaleData, IntlProvider } from "react-intl"
import * as en from "react-intl/locale-data/en"
import * as pt from "react-intl/locale-data/pt"

import { getMessages } from "../src/utils/localeUtils"

addLocaleData([...en, ...pt])

interface IProps {
  children: React.ReactElement<any>
  locale: TSupportedLangs
}

const ContainerWrapper = ({ children, locale }: IProps) =>
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
