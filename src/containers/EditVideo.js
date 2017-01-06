import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'
import EditVideoComponent from '../components/EditVideo'

function getVideo (state, ownProps) {
  switch (state.filters.visibility) {
    case 'SERIES':
      return state.videos.series.find((serie) => serie._id === parseInt(ownProps.params.videoId))
    case 'MOVIES':
      return state.videos.movies.find((movie) => movie._id === parseInt(ownProps.params.videoId))
    case 'ANIMES':
      return state.videos.animes.find((anime) => anime._id === parseInt(ownProps.params.videoId))
    default:
      return null
  }
}

function mapStateToProps (state, ownProps) {
  return {
    video: getVideo(state, ownProps)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClose: () => {
      dispatch(goBack())
    }
  }
}

const EditVideoContainer = connect(mapStateToProps, mapDispatchToProps)(EditVideoComponent)

export default EditVideoContainer
