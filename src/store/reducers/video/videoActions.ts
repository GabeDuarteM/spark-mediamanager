import { EVideoType } from "../../../@types/EVideoType"
import IMovie from "../../../@types/IMovie"
import ISerie from "../../../@types/ISerie"
import IBaseAction from "../IBaseAction"

export const VIDEO__ADD_VIDEO = "VIDEO/ADD_VIDEO"
export const VIDEO__REMOVE_VIDEO = "VIDEO/REMOVE_VIDEO"
export const VIDEO__EDIT_VIDEO = "VIDEO/EDIT_VIDEO"

export const addVideo = (videoType: EVideoType, video: ISerie | IMovie): IBaseAction => ({
  type: VIDEO__ADD_VIDEO,
  payload: {
    video,
    videoType
  }
})

export const removeVideo = (videoType: EVideoType, id: string): IBaseAction => ({
  type: VIDEO__REMOVE_VIDEO,
  payload: {
    id,
    videoType
  }
})

export const editVideo = (videoType: EVideoType, video: ISerie | IMovie): IBaseAction => ({
  type: VIDEO__EDIT_VIDEO,
  payload: {
    video,
    videoType
  }
})
