import React from "react"

import { mount, shallow } from "enzyme"
import { Link } from "react-router-dom"

import { EVideoType } from "../../@types/EVideoType"
import AppWrapper from "../../components/AppWrapper/AppWrapper"
import PosterList from "../../components/PosterList/PosterList"
import IStoreState from "../../store/IStoreState"
import configureStore from "../../store/store"
import {
  returnMockAnime,
  returnMockMovie,
  returnMockSerie,
  transformConsoleMessagesToExceptions,
} from "../../utils/testUtils"
import PosterListContainer from "./PosterListContainer"

describe("COMPONENT: <PosterListContainer />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  it("should render without crashing with visibilityFilter set to serie", () => {
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
    const component = (
      <AppWrapper store={store} locale="en">
        <PosterListContainer />
      </AppWrapper>
    )
    mount(component)
    shallow(component)
  })

  it("should render without crashing with visibilityFilter set to anime", () => {
    const initialState: IStoreState = {
      video: {
        series: [...returnMockSerie()],
        movies: [...returnMockMovie()],
        animes: [...returnMockAnime()],
        visibilityFilter: "anime",
      },
      editVideo: {},
    }
    const store = configureStore(initialState)
    const component = (
      <AppWrapper store={store} locale="en">
        <PosterListContainer />
      </AppWrapper>
    )
    mount(component)
    shallow(component)
  })

  it("should render without crashing with visibilityFilter set to movie", () => {
    const initialState: IStoreState = {
      video: {
        series: [...returnMockSerie()],
        movies: [...returnMockMovie()],
        animes: [...returnMockAnime()],
        visibilityFilter: "movie",
      },
      editVideo: {},
    }
    const store = configureStore(initialState)
    const component = (
      <AppWrapper store={store} locale="en">
        <PosterListContainer />
      </AppWrapper>
    )
    mount(component)
    shallow(component)
  })

  it("should fill the editVideo state if a poster is clicked", () => {
    const initialState: IStoreState = {
      video: {
        series: [...returnMockSerie()],
        movies: [...returnMockMovie()],
        animes: [returnMockAnime()[0], ...returnMockAnime()],
        visibilityFilter: "anime" as EVideoType,
      },
      editVideo: {},
    }
    const store = configureStore(initialState)
    const component = (
      <AppWrapper store={store} locale="en">
        <PosterListContainer />
      </AppWrapper>
    )
    const wrapper = mount(component)
    const pl = PosterList
    const l = Link
    wrapper
      .find(pl)
      .find(l)
      .at(0)
      .simulate("click")
    expect(store.getState().editVideo.video).toBe(initialState.video.animes[0])
  })

  it("should throw an error if visibilityFilter is unknown", () => {
    const initialState: IStoreState = {
      video: {
        series: [...returnMockSerie()],
        movies: [...returnMockMovie()],
        animes: [returnMockAnime()[0], ...returnMockAnime()],
        visibilityFilter: "unknown" as EVideoType,
      },
      editVideo: {},
    }
    const store = configureStore(initialState)
    const component = (
      <AppWrapper store={store} locale="en">
        <PosterListContainer />
      </AppWrapper>
    )
    expect(() => mount(component)).toThrow("An invalid visibilityFilter were supplied to setVisibleVideos")
  })
})
