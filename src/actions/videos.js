const EDIT_VIDEO_SET_VIDEO = { type: 'EDIT_VIDEO_SET_VIDEO' }
const EDIT_VIDEO_CLEAN = { type: 'EDIT_VIDEO_CLEAN' }
const EDIT_VIDEO_SET_PATH = { type: 'EDIT_VIDEO_SET_PATH' }
const EDIT_VIDEO_SET_VIDEO_LIST = { type: 'EDIT_VIDEO_SET_VIDEO_LIST' }

export const editVideoOpen = (newVideo) => {
  return { ...EDIT_VIDEO_SET_VIDEO, payload: newVideo }
}
export const editVideoClose = () => {
  return { ...EDIT_VIDEO_CLEAN, payload: null }
}
export const editVideoSetPath = (newPath) => {
  return { ...EDIT_VIDEO_SET_PATH, payload: newPath }
}
export const editVideoSetVideoList = (jsonList) => {
  return { ...EDIT_VIDEO_SET_VIDEO_LIST, payload: jsonList }
}

const SEARCH_VIDEO_SET_TYPE = { type: 'SEARCH_VIDEO_SET_TYPE' }
const SEARCH_VIDEO_SET_TEXT = { type: 'SEARCH_VIDEO_SET_TEXT' }
const SEARCH_VIDEO_SET_LOADING = { type: 'SEARCH_VIDEO_SET_LOADING' }
const SEARCH_VIDEO_CLEAN = { type: 'SEARCH_VIDEO_CLEAN' }

export const searchVideoChangeType = (newType) => {
  return { ...SEARCH_VIDEO_SET_TYPE, payload: newType }
}
export const searchVideoChangeText = (newText) => {
  return { ...SEARCH_VIDEO_SET_TEXT, payload: newText }
}
export const searchVideoChangeLoading = () => {
  return { ...SEARCH_VIDEO_SET_LOADING, payload: null }
}
export const searchVideoClose = () => {
  return { ...SEARCH_VIDEO_CLEAN, payload: null }
}
