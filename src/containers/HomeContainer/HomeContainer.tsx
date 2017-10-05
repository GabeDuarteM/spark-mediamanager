import * as React from "react"

import { connect } from "react-redux"
import { withRouter } from "react-router"
import { compose } from "recompose"
import { Dispatch } from "redux"

import { EVideoType } from "../../@types/EVideoType"
import Home from "../../components/Home/Home"
import IStoreState from "../../store/IStoreState"
import IBaseAction from "../../store/reducers/IBaseAction"
import { visibilityFilter as visibilityFilterAction } from "../../store/reducers/video/videoActions"

type TVisibilityFilterFunc = (filter: EVideoType) => void

interface IHocProps {
  setVisibilityFilter: TVisibilityFilterFunc
  visibilityFilter: EVideoType
  history: any[]
}

const HomeContainer = ({ setVisibilityFilter, visibilityFilter, history }: IHocProps) => (
  <Home
    handleTabChange={(evt, index) => handleTabChange(index, setVisibilityFilter)}
    selectedTabIndex={getTabIndex(visibilityFilter)}
    changeRouteAdd={() => changeRouteToAdd(history)}
  />
)

const handleTabChange = (index: number, setVisibilityFilter: TVisibilityFilterFunc) => {
  switch (index) {
    case 0:
      setVisibilityFilter("serie")
      break
    case 1:
      setVisibilityFilter("movie")
      break
    case 2:
      setVisibilityFilter("anime")
      break

    default:
      break
  }
}

const getTabIndex = (visibilityFilter: EVideoType): number => {
  switch (visibilityFilter) {
    default:
    case "serie":
      return 0
    case "movie":
      return 1
    case "anime":
      return 2
  }
}

const changeRouteToAdd = (history: any[]) => {
  history.push("/add")
}

const mapStateToProps = (state: IStoreState) => ({
  visibilityFilter: state.video.visibilityFilter,
})

const mapDispatchToProps = (dispatch: Dispatch<IBaseAction>) => ({
  setVisibilityFilter: (filter: EVideoType) => dispatch(visibilityFilterAction(filter)),
})

export default compose<IHocProps, {}>(connect(mapStateToProps, mapDispatchToProps), withRouter)(HomeContainer)
