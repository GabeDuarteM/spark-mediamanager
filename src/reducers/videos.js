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
    case 'SEARCH_VIDEO_CHANGE_TYPE':
      return {
        ...state,
        type: action.payload,
        typeText: getSearchVideoTypeText(action.payload)
      }
    case 'SEARCH_VIDEO_CHANGE_TEXT':
      return {
        ...state,
        text: action.payload
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
    case 'EDIT_VIDEO_CLOSE':
      return {
        ...state,
        editVideo: null
      }
    case 'EDIT_VIDEO_SET_PATH':
      return {
        ...state,
        editVideo: video(state.editVideo, action)
      }
    case 'SEARCH_VIDEO_CHANGE_TYPE':
    case 'SEARCH_VIDEO_CHANGE_TEXT':
      return {
        ...state,
        searchVideo: video(state.searchVideo, action)
      }
    case 'SEARCH_VIDEO_CHANGE_LOADING':
      return {
        ...state,
        searchVideo: {
          ...state.searchVideo,
          loading: !state.searchVideo.loading
        }
      }
    case 'SEARCH_VIDEO_CLOSE':
      return {
        ...state,
        searchVideo: {
          type: 'serie',
          typeText: getSearchVideoTypeText('serie')
        }
      }
    default:
      return state
  }
}

const getSearchVideoTypeText = (type) => {
  switch (type) {
    case 'serie':
      return 'Serie'
    case 'movie':
      return 'Movie'
    case 'anime':
      return 'Anime'
    default:
      return 'unknown type'
  }
}
