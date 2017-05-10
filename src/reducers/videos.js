import path from 'path'

const video = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_VIDEO_SET_VIDEO':
      const video = state.series.find((serie) => serie._id === parseInt(action.payload)) ||
                    state.movies.find((movie) => movie._id === parseInt(action.payload)) ||
                    state.animes.find((anime) => anime._id === parseInt(action.payload))
      return { ...state, video }
    case 'EDIT_VIDEO_SET_PATH':
      return {
        ...state,
        video: { ...state.video, path: action.payload }
      }
    case 'EDIT_VIDEO_SET_VIDEO_LIST':
      return {
        ...state,
        videoList: action.payload.results.map((elem) => {
          return {
            path: path.join('defaultPath', elem.name),
            overview: elem.overview,
            posterImg: elem.poster_path,
            fanartImg: ''
          }
        })
      }
    case 'SEARCH_VIDEO_SET_TYPE':
      return {
        ...state,
        type: action.payload,
        typeText: getSearchVideoTypeText(action.payload)
      }
    case 'SEARCH_VIDEO_SET_TEXT':
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
    case 'EDIT_VIDEO_SET_PATH':
    case 'EDIT_VIDEO_SET_VIDEO_LIST':
      return {
        ...state,
        editVideo: video(state.editVideo, action)
      }
    case 'EDIT_VIDEO_SET_VIDEO':
      return {
        ...state,
        editVideo: video(state, action)
      }
    case 'EDIT_VIDEO_CLEAN':
      return {
        ...state,
        editVideo: null
      }
    case 'SEARCH_VIDEO_SET_TYPE':
    case 'SEARCH_VIDEO_SET_TEXT':
      return {
        ...state,
        searchVideo: video(state.searchVideo, action)
      }
    case 'SEARCH_VIDEO_SET_LOADING':
      return {
        ...state,
        searchVideo: {
          ...state.searchVideo,
          loading: !state.searchVideo.loading
        }
      }
    case 'SEARCH_VIDEO_CLEAN':
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
