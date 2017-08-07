import { EVideoType } from "../../../@types/EVideoType"
import IVideo from "../../../@types/IVideo"

export default interface IEditVideoState {
  video?: IVideo
  type?: EVideoType
}
