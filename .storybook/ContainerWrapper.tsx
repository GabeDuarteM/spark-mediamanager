import * as React from "react"
import { addLocaleData, IntlProvider } from "react-intl"
import * as en from "react-intl/locale-data/en"
import * as pt from "react-intl/locale-data/pt"

addLocaleData([...en, ...pt])

function getMessages(locale: string): any {
  return require(`../src/locales/${locale}.json`)
}

interface IProps {
  children: React.ReactElement<any>
  locale: string
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
