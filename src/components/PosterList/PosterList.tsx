import IPoster from "../../types/IPoster"
import * as React from "react"
import Poster from "../Poster/Poster"
import { withStyles, createStyleSheet } from "material-ui/styles"

const styles = createStyleSheet("PosterList", theme => ({
  posterList: {
    display: "flex",
    flexWrap: "wrap"
  }
}))

interface IProps {
  classes: {
    posterList: string
  }
  className: string
  posters: IPoster[]
}

const PosterList = ({ classes, className, posters }: IProps) =>
  <div className={`${className} ${classes.posterList}`}>
    {sortPosters(posters).map((poster, i) => <Poster poster={poster} key={i} />)}
  </div>

const sortPosters: (posters: IPoster[]) => IPoster[] = posters => {
  return posters.sort((posterA, posterB) => {
    if (posterA.title < posterB.title) return -1
    if (posterA.title > posterB.title) return 1
    return 0
  })
}

export default withStyles(styles)(PosterList)
