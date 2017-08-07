import * as React from "react"

import { createStyleSheet, withStyles } from "material-ui/styles"
import IVideo from "../../@types/IVideo"
import Poster from "../Poster/Poster"

const styles = createStyleSheet("PosterList", theme => ({
  posterList: {
    display: "flex",
    flexWrap: "wrap"
  }
}))

interface IHocProps {
  classes: {
    posterList: string
  }
}

interface IProps {
  className?: string
  posters: IVideo[]
}

type IFullProps = IProps & IHocProps

const PosterList = ({ classes, className, posters }: IFullProps) =>
  <div className={`${className} ${classes.posterList}`}>
    {sortPosters(posters).map((poster, i) => <Poster poster={poster} key={i} />)}
  </div>

const sortPosters: (posters: IVideo[]) => IVideo[] = posters => {
  return posters.sort((posterA, posterB) => {
    if (posterA.api.title < posterB.api.title) {
      return -1
    }
    if (posterA.api.title > posterB.api.title) {
      return 1
    }

    return 0
  })
}

export default withStyles<IProps>(styles)(PosterList)
