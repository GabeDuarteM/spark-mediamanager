const video = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_VIDEO_OPEN':
      const video = state.series.find((serie) => serie._id === parseInt(action.payload)) ||
                    state.movies.find((movie) => movie._id === parseInt(action.payload)) ||
                    state.animes.find((anime) => anime._id === parseInt(action.payload))
      return video
    case 'EDIT_VIDEO_SET_PATH':
      return {
        ...state,
        path: action.payload
      }
    default:
      return state
  }
}

export const videos = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_VIDEO_OPEN':
      return {
        ...state,
        editVideo: video(state, action)
      }
    case 'EDIT_VIDEO_SET_PATH':
      return {
        ...state,
        editVideo: video(state.editVideo, action)
      }
    default:
      return state
  }
}
