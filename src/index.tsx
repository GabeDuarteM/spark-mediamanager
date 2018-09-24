import React from "react"
import { render } from "react-dom"
import "typeface-roboto"

import App from "./containers/App"
import IStoreState from "./store/IStoreState"
import configureStore from "./store/store"
import { returnMockAnime, returnMockMovie, returnMockSerie } from "./utils/testUtils"

import "./index.css"

const initialState: IStoreState = {
  video: {
    series: [...returnMockSerie()],
    movies: [...returnMockMovie()],
    animes: [...returnMockAnime()],
    visibilityFilter: "serie",
  },
  editVideo: {},
}

const store = configureStore(initialState)
const rootEl = document.getElementById("root")

render(<App store={store} />, rootEl)
