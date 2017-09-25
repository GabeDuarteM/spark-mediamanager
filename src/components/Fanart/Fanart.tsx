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
    paddingTop: 30,
    paddingLeft: 25,
  },
  poster: {
    height: "186px !important",
    width: "124px !important",
  },
}

interface IProps {
  video: IVideo
}

interface IHocProps {
  classes: {
    poster: string
    fanart: string
  }
}

const Fanart: React.StatelessComponent<IProps & IHocProps> = ({ video, classes }) => (
  <div className={classes.fanart} style={{ backgroundImage: `url(${video.api.backdrop})` }}>
    <Poster className={classes.poster} showSubtitle={false} video={video} hoverEffect={false} />
  </div>
)

export default withStyles(styles, { name: "Fanart" })<IProps>(Fanart)
