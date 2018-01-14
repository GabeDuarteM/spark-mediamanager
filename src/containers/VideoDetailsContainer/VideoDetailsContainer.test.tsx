import * as React from "react"

import { mount, shallow } from "enzyme"
import { Dialog } from "material-ui"

import { EVideoType } from "../../@types/EVideoType"
import AppWrapper from "../../components/AppWrapper/AppWrapper"
import IStoreState from "../../store/IStoreState"
import configureStore from "../../store/store"
import {
  returnMockAnime,
  returnMockMovie,
  returnMockSerie,
  transformConsoleMessagesToExceptions,
} from "../../utils/testUtils"
import VideoDetailsContainer from "./VideoDetailsContainer"

describe("COMPONENT: <VideoDetailsContainer />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  it("should render without crashing", () => {
    const initialState: IStoreState = {
      video: {
        series: [...returnMockSerie()],
        movies: [...returnMockMovie()],
        animes: [...returnMockAnime()],
        visibilityFilter: "anime" as EVideoType,
      },
      editVideo: { video: returnMockSerie()[0] },
    }
    const store = configureStore(initialState)
    const component = (
      <AppWrapper store={store} locale="en">
        <VideoDetailsContainer video={returnMockSerie()[0]} />
      </AppWrapper>
    )
    mount(component)
    shallow(component)
  })

  it("should clear the editVideo state on unmount", () => {
    const initialState: IStoreState = {
      video: {
        series: [...returnMockSerie()],
        movies: [...returnMockMovie()],
        animes: [...returnMockAnime()],
        visibilityFilter: "anime" as EVideoType,
      },
      editVideo: { video: returnMockSerie()[0] },
    }
    const store = configureStore(initialState)
    const component = (
      <AppWrapper store={store} locale="en">
        <VideoDetailsContainer video={returnMockSerie()[0]} />
      </AppWrapper>
    )
    mount(component).unmount()
    expect(store.getState().editVideo.video).toBeUndefined()
  })

  it("should clear the editVideo state on unmount", () => {
    const initialState: IStoreState = {
      video: {
        series: [...returnMockSerie()],
        movies: [...returnMockMovie()],
        animes: [...returnMockAnime()],
        visibilityFilter: "anime" as EVideoType,
      },
      editVideo: { video: returnMockSerie()[0] },
    }
    const store = configureStore(initialState)
    const component = (
      <AppWrapper store={store} locale="en">
        <VideoDetailsContainer video={returnMockSerie()[0]} />
      </AppWrapper>
    )
    mount(component).unmount()
    expect(store.getState().editVideo.video).toBeUndefined()
  })

  it("should call onClose's function without crashing", () => {
    const initialState: IStoreState = {
      video: {
        series: [...returnMockSerie()],
        movies: [...returnMockMovie()],
        animes: [...returnMockAnime()],
        visibilityFilter: "anime" as EVideoType,
      },
      editVideo: { video: returnMockSerie()[0] },
    }
    const store = configureStore(initialState)
    const component = (
      <AppWrapper store={store} locale="en">
        <VideoDetailsContainer video={returnMockSerie()[0]} />
      </AppWrapper>
    )

    const onClose = mount(component)
      .find(Dialog)
      .prop("onClose")
    if (onClose) {
      onClose({} as React.SyntheticEvent<{}>)
    }

    expect(onClose).toBeDefined()
  })
})
