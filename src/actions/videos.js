const GET_ANIMES = { type: 'GET_ANIMES' }
const GET_MOVIES = { type: 'GET_MOVIES' }
const GET_SERIES = { type: 'GET_SERIES' }
const GET_ALL_VIDEOS = { type: 'GET_ALL_VIDEOS' }

const OPEN_VIDEO_EDIT = { type: 'OPEN_VIDEO_EDIT' }

export const getAnimes = (videos) => {
  return { ...GET_ANIMES, payload: videos }
}

export const getMovies = (videos) => {
  return { ...GET_MOVIES, payload: videos }
}

export const getSeries = (videos) => {
  return { ...GET_SERIES, payload: videos }
}

export const getAllVideos = (videos) => {
  return { ...GET_ALL_VIDEOS, payload: videos }
}

export const openVideoEdit = (video) => {
  return { ...OPEN_VIDEO_EDIT, payload: video }
}
