const EDIT_VIDEO_OPEN = { type: 'EDIT_VIDEO_OPEN' }
const EDIT_VIDEO_CLOSE = { type: 'EDIT_VIDEO_CLOSE' }
const EDIT_VIDEO_SET_PATH = { type: 'EDIT_VIDEO_SET_PATH' }

const SEARCH_VIDEO_CHANGE_TYPE = { type: 'SEARCH_VIDEO_CHANGE_TYPE' }
const SEARCH_VIDEO_CHANGE_TEXT = { type: 'SEARCH_VIDEO_CHANGE_TEXT' }
const SEARCH_VIDEO_CHANGE_LOADING = { type: 'SEARCH_VIDEO_CHANGE_LOADING' }
const SEARCH_VIDEO_CLOSE = { type: 'SEARCH_VIDEO_CLOSE' }

export const editVideoOpen = (newVideo) => {
  return { ...EDIT_VIDEO_OPEN, payload: newVideo }
}
export const editVideoClose = () => {
  return { ...EDIT_VIDEO_CLOSE, payload: null }
}
export const editVideoSetPath = (newPath) => {
  return { ...EDIT_VIDEO_SET_PATH, payload: newPath }
}

export const searchVideoChangeType = (newType) => {
  return { ...SEARCH_VIDEO_CHANGE_TYPE, payload: newType }
}
export const searchVideoChangeText = (newText) => {
  return { ...SEARCH_VIDEO_CHANGE_TEXT, payload: newText }
}
export const searchVideoChangeLoading = () => {
  return { ...SEARCH_VIDEO_CHANGE_LOADING, payload: null }
}
export const searchVideoClose = () => {
  return { ...SEARCH_VIDEO_CLOSE, payload: null }
}
