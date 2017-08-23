import * as React from "react"

import { withStyles } from "material-ui/styles"
import { StyleRulesCallback } from "material-ui/styles/withStyles"
import Typography from "material-ui/Typography"

import { truncate } from "../../commonCss"
import Overlay from "../Overlay/Overlay"

const styles: StyleRulesCallback = theme => ({
  title: {
    ...truncate,
    height: 23,
  },
  overlay: {
    padding: "16px !important",
    borderTop: "2px solid",
    borderColor: theme.palette.input.bottomLine,
  },
})

interface IProps {
  title: string
  year?: number
}

interface IInjectedProps {
  classes: {
    title: string
    overlay: string
  }
}

type IFullProps = IProps & IInjectedProps

const PosterOverlay = ({ title, year, classes }: IFullProps) =>
  <Overlay className={classes.overlay}>
    <Typography className={classes.title} type="title">
      {title}
    </Typography>
    <Typography type="body2">
      {year}
    </Typography>
  </Overlay>

export default withStyles<IProps>(styles, { name: "PosterOverlay" })(PosterOverlay)
