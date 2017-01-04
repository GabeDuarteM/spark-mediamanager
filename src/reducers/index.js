import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { videos } from './videos'
import { filters } from './filters'

const rootReducer = combineReducers({
  videos,
  filters,
  routing
})

export default rootReducer
