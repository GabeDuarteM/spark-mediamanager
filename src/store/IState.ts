import IEditVideoState from "./reducers/editVideo/IEditVideoState"
import IVideoState from "./reducers/video/IVideoState"

export default interface IState {
  video: IVideoState
  editVideo: IEditVideoState
}
