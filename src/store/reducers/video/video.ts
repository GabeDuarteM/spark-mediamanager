import { EVideoType } from "../../../@types/EVideoType"
import IVideo from "../../../@types/IVideo"
import IBaseReducer from "../IBaseReducer"
import IUnknownAction from "../IUnknownAction"
import IVideoState from "./IVideoState"
import { VIDEO__ADD, VIDEO__EDIT, VIDEO__REMOVE } from "./videoActions"

const video: IBaseReducer<IVideoState> = (state = { animes: [], movies: [], series: [] }, action = IUnknownAction) => {
  switch (action.type) {
    case VIDEO__ADD:
      return handleAdd(state, action.payload)
    case VIDEO__REMOVE:
      return handleRemove(state, action.payload)
    case VIDEO__EDIT:
      return handleEdit(state, action.payload)
    default:
      return state
  }
}

const handleAdd = (state: IVideoState, payload: { videoType: EVideoType; video: IVideo }): IVideoState => {
  switch (payload.videoType) {
    case "anime":
      return {
        ...state,
        animes: [...state.animes, payload.video],
      }
    case "movie":
      return {
        ...state,
        movies: [...state.movies, payload.video],
      }
    case "serie":
      return {
        ...state,
        series: [...state.series, payload.video],
      }

    default:
      return state
  }
}

const handleRemove = (state: IVideoState, payload: { videoType: EVideoType; id: string }) => {
  switch (payload.videoType) {
    case "anime":
      return {
        ...state,
        animes: state.animes.filter(x => x.id !== payload.id),
      }
    case "movie":
      return {
        ...state,
        movies: state.movies.filter(x => x.id !== payload.id),
      }
    case "serie":
      return {
        ...state,
        series: state.series.filter(x => x.id !== payload.id),
      }

    default:
      return state
  }
}

const handleEdit = (state: IVideoState, payload: { videoType: EVideoType; video: IVideo }): IVideoState => {
  switch (payload.videoType) {
    case "anime":
      return {
        ...state,
        animes: [...state.animes.map(x => (x.id === payload.video.id ? payload.video : x))],
      }
    case "movie":
      return {
        ...state,
        movies: [...state.movies.map(x => (x.id === payload.video.id ? payload.video : x))],
      }
    case "serie":
      return {
        ...state,
        series: [...state.series.map(x => (x.id === payload.video.id ? payload.video : x))],
      }

    default:
      return state
  }
}

export default video
