import IEditVideoState from "./reducers/editVideo/IEditVideoState"
import IVideoState from "./reducers/video/IVideoState"

export default interface IStoreState {
  video: IVideoState
  editVideo: IEditVideoState
}
