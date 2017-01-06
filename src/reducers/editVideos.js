const editVideo = (state = {}, action) => {
  switch (action.type) {
    case 'OPEN_VIDEO_EDIT':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const editVideos = (state = {}, action) => {
  switch (action.type) {
    case 'OPEN_VIDEO_EDIT':
      return {
        ...state,
        videoEdit: editVideo(state.videoEdit, action)
      }
    default:
      return state
  }
}

export default editVideos
