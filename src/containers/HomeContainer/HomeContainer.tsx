import * as React from "react"

import { connect } from "react-redux"
import { Dispatch } from "redux"

import { EVideoType } from "../../@types/EVideoType"
import Home from "../../components/Home/Home"
import IBaseAction from "../../store/reducers/IBaseAction"
import { visibilityFilter } from "../../store/reducers/video/videoActions"

interface IProps {
  setVisibilityFilter: (filter: EVideoType) => void
}

interface IHocProps {
  history: any
}

const handleTabRoute = (videoType: EVideoType, history: any): void => {
  switch (videoType) {
    case EVideoType.Anime:
      history.push("/animes")
      break
    case EVideoType.Serie:
      history.push("/series")
      break
    case EVideoType.Movie:
      history.push("/movies")
      break
    default:
      break
  }
}

const HomeContainer = ({ setVisibilityFilter, history }: IProps & IHocProps) => <Home handleTabRoute={handleTabRoute} />

const mapDispatchToProps = (dispatch: Dispatch<IBaseAction>, ownProps: any) => ({
  setVisibilityFilter: (filter: EVideoType) => dispatch(visibilityFilter(filter)),
})

export default connect(undefined, mapDispatchToProps)(HomeContainer)
