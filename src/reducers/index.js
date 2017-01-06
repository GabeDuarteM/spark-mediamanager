import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { videos } from './videos'
import { filters } from './filters'
import editVideo from './editVideos'

const rootReducer = combineReducers({
  videos,
  filters,
  editVideo,
  routing
})

export default rootReducer
