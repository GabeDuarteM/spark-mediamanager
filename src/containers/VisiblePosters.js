import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { editVideoOpen } from '../actions/videos'
import PosterList from '../components/PosterList'

const getVisiblePosters = (posters, filter) => {
  switch (filter) {
    default:
    case 'SERIES':
      return posters.series
    case 'ANIMES':
      return posters.animes
    case 'MOVIES':
      return posters.movies
  }
}

const mapStateToProps = (state) => {
  return {
    posters: getVisiblePosters(state.videos, state.filters.visibility)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEditVideo: (videoId) => dispatch(editVideoOpen(videoId)),
    openSearch: () => dispatch(push('/EditVideo/Search'))
  }
}

const VisiblePosters = connect(
  mapStateToProps,
  mapDispatchToProps
)(PosterList)

export default VisiblePosters
