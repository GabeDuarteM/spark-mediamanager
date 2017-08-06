import { EVideoType } from "../../../@types/EVideoType"
import IMovie from "../../../@types/IMovie"
import ISerie from "../../../@types/ISerie"
import IBaseAction from "../IBaseAction"
export const VIDEO__ADD_VIDEO = "VIDEO/ADD_VIDEO"

export const addVideo = (videoType: EVideoType, video: ISerie | IMovie): IBaseAction => ({
  type: VIDEO__ADD_VIDEO,
  payload: {
    video,
    videoType
  }
})
