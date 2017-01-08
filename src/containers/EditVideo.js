import { connect } from 'react-redux'
import { editVideoSetPath } from '../actions/videos'
import EditVideoComponent from '../components/EditVideo'

function mapStateToProps (state, ownProps) {
  return {
    video: state.videos.editVideo
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClose: () => dispatch(ownProps.router.push('/')),
    setVideoPath: (path) => dispatch(editVideoSetPath(path))
  }
}

const EditVideoContainer = connect(mapStateToProps, mapDispatchToProps)(EditVideoComponent)

export default EditVideoContainer
