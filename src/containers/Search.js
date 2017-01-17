import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { searchVideoChangeType, searchVideoChangeText, searchVideoClose, searchVideoChangeLoading } from '../actions/videos'
import SearchComponent from '../components/Search'

const mapStateToProps = (state) => {
  return {
    typeText: state.videos.searchVideo.typeText,
    openLoading: state.videos.searchVideo.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleRadioChange: (newType) => dispatch(searchVideoChangeType(newType)),
    handleTextChange: (newText) => dispatch(searchVideoChangeText(newText)),
    handleClose: () => { dispatch(push('/')); dispatch(searchVideoClose()) },
    handleLoading: () => dispatch(searchVideoChangeLoading())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent)
