const EDIT_VIDEO_SET_VIDEO = { type: 'EDIT_VIDEO_SET_VIDEO' }
const EDIT_VIDEO_SET_PATH = { type: 'EDIT_VIDEO_SET_PATH' }

export const editVideoOpen = (video) => {
  return { ...EDIT_VIDEO_SET_VIDEO, payload: video }
}

export const editVideoSetPath = (path) => {
  return { ...EDIT_VIDEO_SET_PATH, payload: path }
}
