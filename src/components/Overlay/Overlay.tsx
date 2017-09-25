import * as React from "react"

import { withStyles } from "material-ui/styles"
import { StyleRulesCallback } from "material-ui/styles/withStyles"

import { truncate } from "../../commonCss"

const styles: StyleRulesCallback = theme => ({
  overlay: {
    background: theme.palette.background.default,
    opacity: 0.7,
    color: "white",
    padding: 8,
    overflow: "hidden",
    width: "100%",
  },
  truncate,
})

interface IProps {
  children: React.ReactElement<{}> | Array<React.ReactElement<{}>>
  className: string
}

interface IHocProps {
  classes: {
    overlay: string
    truncate: string
  }
}

type IFullProps = IProps & IHocProps

const Overlay = ({ classes, children, className, ...rest }: IFullProps) => (
  <div className={`${className} ${classes.overlay}`} {...rest}>
    {children}
  </div>
)

export default withStyles(styles, { name: "Overlay" })<IProps>(Overlay)
