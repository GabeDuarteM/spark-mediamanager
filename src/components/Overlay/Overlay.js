import React, { Component } from "react"
import Paper from "material-ui/Paper"
import { withStyles, createStyleSheet } from "material-ui/styles"

import { truncate } from "../../commonCss"

const styles = createStyleSheet("Overlay", theme => ({
  overlay: {
    background: theme.palette.background.default,
    opacity: 0.7,
    color: "white",
    padding: 8,
    overflow: "hidden",
    width: "100%"
  },
  truncate: truncate
}))

@withStyles(styles)
class Overlay extends Component {
  render(props) {
    const { classes, children, ...rest } = this.props
    return (
      <div className={classes.overlay} {...rest}>
        {children}
      </div>
    )
  }
}

export default Overlay
