import * as React from "react"

import Paper from "material-ui/Paper"
import { createStyleSheet, withStyles } from "material-ui/styles"
import IPoster from "../../@types/IPoster"

import PosterOverlay from "../PosterOverlay/PosterOverlay"

const styles = createStyleSheet("Poster", theme => ({
  poster: {
    width: 200,
    height: 300,
    cursor: "default",
    display: "flex",
    alignItems: "flex-end",
    backgroundSize: "cover",
    margin: 10,
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)"
    }
  }
}))

interface IHocProps {
  classes: {
    poster: string
  }
}

interface IProps {
  poster: IPoster
  children?: React.ReactElement<{}>
  showSubtitle?: boolean
}

const Poster = ({ classes, children, poster, showSubtitle = true, ...rest }: IProps & IHocProps) =>
  <Paper style={{ backgroundImage: `url(${poster.posterImage})` }} className={classes.poster} elevation={15} {...rest}>
    {showSubtitle ? <PosterOverlay title={poster.title} year={poster.year} /> : ""}
  </Paper>

export default withStyles<IProps>(styles)(Poster)
