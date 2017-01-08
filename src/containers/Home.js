import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/filters'
import HomeComponent from '../components/Home'

const mapDispatchToProps = (dispatch) => {
  return {
    setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter))
  }
}

const HomeContainer = connect(null, mapDispatchToProps)(HomeComponent)

export default HomeContainer
