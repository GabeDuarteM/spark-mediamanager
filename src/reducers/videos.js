const video = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ANIMES':
    case 'GET_MOVIES':
    case 'GET_SERIES':
    case 'GET_ALL_VIDEOS':
      return action.payload
    default:
      return state
  }
}

export const videos = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ANIMES':
      return {
        ...state,
        videos: { animes: video(undefined, action) }
      }
    case 'GET_MOVIES':
      return {
        ...state,
        videos: { movies: video(undefined, action) }
      }
    case 'GET_SERIES':
      return {
        ...state,
        videos: { series: video(undefined, action) }
      }
    case 'GET_ALL_VIDEOS':
      return {
        ...state,
        videos: video(undefined, action)
      }
    default:
      return state
  }
}
