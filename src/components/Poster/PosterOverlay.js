import React, { Component } from "react"
import Typography from "material-ui/Typography"
import { withStyles, createStyleSheet } from "material-ui/styles"

import Overlay from "../Overlay/Overlay"
import { truncate } from "../../commonCss"

const styles = createStyleSheet("PosterOverlay", theme => {
  return {
    truncate: truncate,
    overlay: {
      padding: 16
    }
  }
})

@withStyles(styles)
class PosterOverlay extends Component {
  render(props) {
    const { title, year, classes } = this.props
    return (
      <Overlay style={{ padding: 16 }}>
        <Typography className={classes.truncate} type="title">
          {title}
        </Typography>
        <Typography type="body2">
          {year}
        </Typography>
      </Overlay>
    )
  }
}

export default PosterOverlay
