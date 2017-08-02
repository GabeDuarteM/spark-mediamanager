import * as React from "react"

import * as classNames from "classnames"
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
    transition: "all .2s ease-in-out"
  },
  hoverEffect: {
    "&:hover": {
      transform: "scale(1.1)"
    }
  }
}))

interface IHocProps {
  classes: {
    poster: string
    hoverEffect: string
  }
}

interface IProps {
  poster: IPoster
  className?: string
  children?: React.ReactElement<{}>
  showSubtitle?: boolean
  hoverEffect?: boolean
}

const Poster = ({
  classes,
  className,
  children,
  poster,
  showSubtitle = true,
  hoverEffect = true,
  ...rest
}: IProps & IHocProps) =>
  <Paper
    style={{ backgroundImage: `url(${poster.posterImage})` }}
    className={classNames(classes.poster, { [classes.hoverEffect]: hoverEffect }, className)}
    elevation={15}
    {...rest}
  >
    {showSubtitle ? <PosterOverlay title={poster.title} year={poster.year} /> : ""}
  </Paper>

export default withStyles<IProps>(styles)(Poster)
