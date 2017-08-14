import { EVideoType } from "../../../@types/EVideoType"
import IVideo from "../../../@types/IVideo"
import IBaseAction from "../IBaseAction"

export const VIDEO__ADD = "VIDEO/ADD"
export const VIDEO__REMOVE = "VIDEO/REMOVE"
export const VIDEO__EDIT = "VIDEO/EDIT"
export const VIDEO__VISIBILITY_FILTER = "VIDEO/VISIBILITY_FILTER"

export const add = (videoType: EVideoType, video: IVideo): IBaseAction => ({
  type: VIDEO__ADD,
  payload: {
    video,
    videoType,
  },
})

export const remove = (videoType: EVideoType, id: string): IBaseAction => ({
  type: VIDEO__REMOVE,
  payload: {
    id,
    videoType,
  },
})

export const edit = (videoType: EVideoType, video: IVideo): IBaseAction => ({
  type: VIDEO__EDIT,
  payload: {
    video,
    videoType,
  },
})

export const visibilityFilter = (videoType: EVideoType): IBaseAction => ({
  type: VIDEO__VISIBILITY_FILTER,
  payload: videoType,
})
