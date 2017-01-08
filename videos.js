const EDIT_VIDEO_OPEN = { type: 'EDIT_VIDEO_OPEN' }
const EDIT_VIDEO_SET_PATH = { type: 'EDIT_VIDEO_SET_PATH' }

export const editVideoOpen = (video) => {
  return { ...EDIT_VIDEO_OPEN, payload: video }
}

export const editVideoSetPath = (path) => {
  return { ...EDIT_VIDEO_SET_PATH, payload: path }
}
