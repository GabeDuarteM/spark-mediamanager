import * as React from "react"
import Typography from "material-ui/Typography"
import { withStyles, createStyleSheet } from "material-ui/styles"

import Overlay from "../Overlay/Overlay"
import { truncate } from "../../commonCss"

const styles = createStyleSheet("PosterOverlay", theme => {
  return {
    title: {
      ...truncate,
      height: 23
    },
    overlay: {
      padding: "16px !important",
      borderTop: "2px solid",
      borderColor: theme.palette.input.bottomLine
    }
  }
})

interface IProps {
  title: string
  year: string
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

export default withStyles(styles)(PosterOverlay)
