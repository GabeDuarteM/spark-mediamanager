const EDIT_VIDEO_OPEN = { type: 'EDIT_VIDEO_OPEN' }
const EDIT_VIDEO_CLOSE = { type: 'EDIT_VIDEO_CLOSE' }
const EDIT_VIDEO_SET_PATH = { type: 'EDIT_VIDEO_SET_PATH' }

export const editVideoOpen = (video) => {
  return { ...EDIT_VIDEO_OPEN, payload: video }
}

export const editVideoClose = () => {
  return { ...EDIT_VIDEO_CLOSE, payload: null }
}

export const editVideoSetPath = (path) => {
  return { ...EDIT_VIDEO_SET_PATH, payload: path }
}
