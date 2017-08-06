import { EVideoType } from "../../../@types/EVideoType"
import IMovie from "../../../@types/IMovie"
import ISerie from "../../../@types/ISerie"
import { IUnknownAction } from "../../../@types/IUnknownAction"
import IBaseReducer from "../IBaseReducer"
import IVideoState from "./IVideoState"
import { VIDEO__ADD_VIDEO } from "./videoActions"

const video: IBaseReducer<IVideoState> = (state = { animes: [], movies: [], series: [] }, action = IUnknownAction) => {
  switch (action.type) {
    case VIDEO__ADD_VIDEO:
      return handleAddVideo(state, action.payload)
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

export default video
