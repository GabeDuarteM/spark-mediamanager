import { EVideoType } from "../../../@types/EVideoType"
import IVideo from "../../../@types/IVideo"
import IBaseAction from "../IBaseAction"

export const EDIT_VIDEO__SET = "EDIT_VIDEO/SET"
export const EDIT_VIDEO__CLEAR = "EDIT_VIDEO/CLEAR"

export const set = (video: IVideo, type: EVideoType): IBaseAction => ({
  type: EDIT_VIDEO__SET,
  payload: { video, type },
})

export const clear = (): IBaseAction => ({
  type: EDIT_VIDEO__CLEAR,
})
