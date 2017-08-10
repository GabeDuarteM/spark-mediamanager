import { combineReducers } from "redux"

import editVideo from "./editVideo/editVideo"
import video from "./video/video"

const rootReducer = combineReducers({
  video,
  editVideo,
})

export default rootReducer
