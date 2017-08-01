import * as React from "react"

import { createStyleSheet, withStyles } from "material-ui/styles"
import IPoster from "../../@types/IPoster"
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
  posters: IPoster[]
}

type IFullProps = IProps & IHocProps

const PosterList = ({ classes, className, posters }: IFullProps) =>
  <div className={`${className} ${classes.posterList}`}>
    {sortPosters(posters).map((poster, i) => <Poster poster={poster} key={i} />)}
  </div>

const sortPosters: (posters: IPoster[]) => IPoster[] = posters => {
  return posters.sort((posterA, posterB) => {
    if (posterA.title < posterB.title) {
      return -1
    }
    if (posterA.title > posterB.title) {
      return 1
    }

    return 0
  })
}

export default withStyles<IProps>(styles)(PosterList)
