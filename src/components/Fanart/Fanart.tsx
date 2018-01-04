import * as React from "react"

import { withStyles } from "material-ui/styles"
import { StyleRules } from "material-ui/styles/withStyles"

import IVideo from "../../@types/IVideo"
import Poster from "../Poster/Poster"

const styles: StyleRules = {
  fanart: {
    backgroundSize: "cover",
    backgroundPosition: "50% 10%",
    height: 250,
    paddingTop: 32,
    paddingLeft: 24,
  },
  poster: {
    height: "186px !important",
    width: "124px !important",
  },
}

const stylesDecorator = withStyles(styles, { name: "Fanart" })

interface IProps {
  video: IVideo
}

const Fanart = stylesDecorator<IProps>(({ classes, video }) => (
  <div className={classes.fanart} style={{ backgroundImage: `url(${video.api.backdrop})` }}>
    <Poster className={classes.poster} showSubtitle={false} video={video} hoverEffect={false} />
  </div>
))

export default Fanart
