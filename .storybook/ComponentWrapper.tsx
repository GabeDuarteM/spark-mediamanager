import * as React from "react"
import { addLocaleData, IntlProvider } from "react-intl"
import * as en from "react-intl/locale-data/en"
import * as pt from "react-intl/locale-data/pt"
import * as injectTapEventPlugin from "react-tap-event-plugin"

injectTapEventPlugin()
addLocaleData([...en, ...pt])

function getMessages(locale: string) {
  return require(`../src/locales/${locale}.json`)
}

interface IProps {
  children: React.ReactElement<any>
  locale: string
}

const ComponentWrapper = ({ children, locale }: IProps) =>
  <IntlProvider locale={locale} messages={getMessages(locale)}>
    <div
      className="ComponentWrapper"
      style={{
        display: "flex",
        height: "100vh",
        userSelect: "none"
      }}
    >
      <div className="ComponentWrapper" style={{ margin: "auto" }}>
        {children}
      </div>
    </div>
  </IntlProvider>

export default ComponentWrapper
