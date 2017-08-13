import * as React from "react"

import { EVideoType } from "../../@types/EVideoType"
import Home from "../../components/Home/Home"

interface IProps {
  setVisibilityFilter: (filter: EVideoType) => void
}

interface IHocProps {
  history: any
}

const handleTabRoute = (videoType: EVideoType, history: any): void => {
  switch (videoType) {
    case "anime":
      history.push("/animes")
      break
    case "serie":
      history.push("/series")
      break
    case "movie":
      history.push("/movies")
      break
    default:
      break
  }
}

const HomeContainer = ({ setVisibilityFilter, history }: IProps & IHocProps) => <Home handleTabRoute={handleTabRoute} />

export default HomeContainer
