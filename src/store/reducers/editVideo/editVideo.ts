import IBaseReducer from "../IBaseReducer"
import IUnknownAction from "../IUnknownAction"
import { EDIT_VIDEO__CLEAR, EDIT_VIDEO__SET } from "./editVideoActions"
import IEditVideoState from "./IEditVideoState"

const editVideo: IBaseReducer<IEditVideoState> = (
  state = { video: undefined, type: undefined },
  action = IUnknownAction
) => {
  switch (action.type) {
    case EDIT_VIDEO__SET:
      return {
        video: action.payload,
      }
    case EDIT_VIDEO__CLEAR:
      return {
        video: undefined,
      }

    default:
      return state
  }
}

export default editVideo
