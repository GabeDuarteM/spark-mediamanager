import * as React from "react"
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
  truncate
}))

interface IProps {
  children: React.ReactElement<any>
  className: string
}

interface IInjectedProps {
  classes: {
    overlay: string
    truncate: string
  }
}

type IFullProps = IProps & IInjectedProps

const Overlay = ({ classes, children, className, ...rest }: IFullProps) =>
  <div className={`${className} ${classes.overlay}`} {...rest}>
    {children}
  </div>

export default withStyles(styles)(Overlay)
