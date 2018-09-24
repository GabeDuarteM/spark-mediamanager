import IVideo from '../../../@types/IVideo'
import IBaseAction from '../IBaseAction'

export const EDIT_VIDEO__SET = 'EDIT_VIDEO/SET'
export const EDIT_VIDEO__CLEAR = 'EDIT_VIDEO/CLEAR'

export const set = (video: IVideo): IBaseAction => ({
  type: EDIT_VIDEO__SET,
  payload: video,
})

export const clear = (): IBaseAction => ({
  type: EDIT_VIDEO__CLEAR,
})
