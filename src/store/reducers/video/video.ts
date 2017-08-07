import { EVideoType } from "../../../@types/EVideoType"
import IMovie from "../../../@types/IMovie"
import ISerie from "../../../@types/ISerie"
import IBaseReducer from "../IBaseReducer"
import IUnknownAction from "../IUnknownAction"
import IVideoState from "./IVideoState"
import { VIDEO__ADD_VIDEO, VIDEO__EDIT_VIDEO, VIDEO__REMOVE_VIDEO } from "./videoActions"

const video: IBaseReducer<IVideoState> = (state = { animes: [], movies: [], series: [] }, action = IUnknownAction) => {
  switch (action.type) {
    case VIDEO__ADD_VIDEO:
      return handleAddVideo(state, action.payload)
    case VIDEO__REMOVE_VIDEO:
      return handleRemoveVideo(state, action.payload)
    case VIDEO__EDIT_VIDEO:
      return handleEditVideo(state, action.payload)
    default:
      return state
  }
}

const handleAddVideo = (
  state: IVideoState,
  payload: { videoType: EVideoType; video: ISerie | IMovie }
): IVideoState => {
  switch (payload.videoType) {
    case EVideoType.Anime:
      return {
        ...state,
        animes: [...state.animes, payload.video as ISerie]
      }
    case EVideoType.Movie:
      return {
        ...state,
        movies: [...state.movies, payload.video as IMovie]
      }
    case EVideoType.Serie:
      return {
        ...state,
        series: [...state.series, payload.video as ISerie]
      }

    default:
      return state
  }
}

const handleRemoveVideo = (state: IVideoState, payload: { videoType: EVideoType; id: string }) => {
  switch (payload.videoType) {
    case EVideoType.Anime:
      return {
        ...state,
        animes: state.animes.filter(x => x.id !== payload.id)
      }
    case EVideoType.Movie:
      return {
        ...state,
        movies: state.movies.filter(x => x.id !== payload.id)
      }
    case EVideoType.Serie:
      return {
        ...state,
        series: state.series.filter(x => x.id !== payload.id)
      }

    default:
      return state
  }
}

const handleEditVideo = (
  state: IVideoState,
  payload: { videoType: EVideoType; video: ISerie | IMovie }
): IVideoState => {
  switch (payload.videoType) {
    case EVideoType.Anime:
      return {
        ...state,
        animes: [...state.animes.map(x => (x.id === payload.video.id ? payload.video as ISerie : x))]
      }
    case EVideoType.Movie:
      return {
        ...state,
        movies: [...state.movies.map(x => (x.id === payload.video.id ? payload.video as IMovie : x))]
      }
    case EVideoType.Serie:
      return {
        ...state,
        series: [...state.series.map(x => (x.id === payload.video.id ? payload.video as ISerie : x))]
      }

    default:
      return state
  }
}

export default video
