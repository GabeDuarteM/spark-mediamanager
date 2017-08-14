import * as React from "react"

import { addLocaleData, IntlProvider } from "react-intl"
import * as en from "react-intl/locale-data/en"
import * as pt from "react-intl/locale-data/pt"
import { Provider } from "react-redux"

import Theme from "../src/components/Theme/Theme"
import IStoreState from "../src/store/IStoreState"
import configureStore from "../src/store/store"
import { getMessages } from "../src/utils/localeUtils"
import { returnMockAnime, returnMockMovie, returnMockSerie } from "../src/utils/testUtils"

addLocaleData([...en, ...pt])

const initialState: IStoreState = {
  video: {
    series: [...returnMockSerie()],
    movies: [...returnMockMovie()],
    animes: [...returnMockAnime()],
  },
  editVideo: {},
}

const store = configureStore(initialState)

interface IProps {
  children: React.ReactElement<any>
  type?: "light" | "dark"
}

const ContainerWrapper = ({ children, type = "dark" }: IProps) => {
  const locale = type === "dark" ? "pt" : "en"

  return (
    <IntlProvider locale={locale} messages={getMessages(locale)}>
      <Theme type={type}>
        <Provider store={store}>
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
        </Provider>
      </Theme>
    </IntlProvider>
  )
}

export default ContainerWrapper
