import * as React from "react"

import * as classNames from "classnames"
import Paper from "material-ui/Paper"
import { withStyles } from "material-ui/styles"
import { StyleRules } from "material-ui/styles/withStyles"

import IVideo from "../../@types/IVideo"
import PosterOverlay from "../PosterOverlay/PosterOverlay"

const styles: StyleRules = {
  poster: {
    width: 200,
    height: 300,
    cursor: "default",
    display: "flex",
    alignItems: "flex-end",
    backgroundSize: "cover",
    margin: 10,
    transition: "all .2s ease-in-out",
  },
  hoverEffect: {
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}

interface IHocProps {
  classes: {
    poster: string
    hoverEffect: string
  }
}

interface IProps {
  video: IVideo
  className?: string
  children?: React.ReactElement<{}>
  showSubtitle?: boolean
  hoverEffect?: boolean
}

const Poster = ({
  classes,
  className,
  children,
  video,
  showSubtitle = true,
  hoverEffect = true,
  ...rest,
}: IProps & IHocProps) =>
  <Paper
    style={{ backgroundImage: `url(${video.api.poster})` }}
    className={classNames(classes.poster, { [classes.hoverEffect]: hoverEffect }, className)}
    elevation={15}
    {...rest}
  >
    {showSubtitle ? <PosterOverlay title={video.api.title} year={video.api.year} /> : ""}
  </Paper>

export default withStyles<IProps>(styles, { name: "Poster" })(Poster)
