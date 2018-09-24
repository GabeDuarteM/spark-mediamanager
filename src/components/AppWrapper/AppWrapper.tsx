import React from 'react'
import { addLocaleData, IntlProvider } from 'react-intl'
import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'
import { Provider } from 'react-redux'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

import { getMessages } from '../../utils/localeUtils'
import Theme from '../Theme/Theme'

addLocaleData([...en, ...pt])

const CustomProvider = ({ children, store }: { children: any; store?: any }) =>
  store ? (
    <Provider store={store}>{children}</Provider>
  ) : (
    <span>{children}</span>
  )

const CustomRouter =
  process.env.NODE_ENV !== 'test' ? BrowserRouter : MemoryRouter

const AppWrapper = ({
  store,
  children,
  locale,
}: {
  store?: any
  children: any
  locale: TSupportedLangs
}) => (
  <IntlProvider locale={locale} messages={getMessages(locale)}>
    <CustomProvider store={store}>
      <Theme>
        <CustomRouter>{children}</CustomRouter>
      </Theme>
    </CustomProvider>
  </IntlProvider>
)

export default AppWrapper
