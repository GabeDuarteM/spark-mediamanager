const OPEN_VIDEO_EDIT = { type: 'OPEN_VIDEO_EDIT' }

export const openVideoEdit = (video) => {
  return { ...OPEN_VIDEO_EDIT, payload: video }
}
