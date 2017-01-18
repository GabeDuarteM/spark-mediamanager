import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { searchVideoChangeType, searchVideoChangeText, searchVideoClose, searchVideoChangeLoading, editVideoSetVideoList } from '../actions/videos'
import SearchComponent from '../components/Search'
import { search } from '../api/trakt'

const mapStateToProps = (state) => {
  return {
    typeText: state.videos.searchVideo.typeText,
    type: state.videos.searchVideo.type,
    openLoading: state.videos.searchVideo.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleRadioChange: (newType) => dispatch(searchVideoChangeType(newType)),
    handleTextChange: (newText) => dispatch(searchVideoChangeText(newText)),
    handleClose: () => { dispatch(push('/')); dispatch(searchVideoClose()) },
    handleLoading: () => dispatch(searchVideoChangeLoading()),
    handleSubmit: (type, query, callback) => {
      search(type, query, (jsonList) => {
        dispatch(editVideoSetVideoList(jsonList))
        if (callback && typeof callback === 'function') {
          callback()
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent)
