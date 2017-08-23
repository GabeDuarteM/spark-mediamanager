import * as React from "react"

import * as classNames from "classnames"
import { withStyles } from "material-ui/styles"
import { StyleRulesCallback } from "material-ui/styles/withStyles"

export const styles: StyleRulesCallback = theme => ({
  root: {
    ...theme.typography.subheading as any,
    color: theme.palette.text.secondary,
    margin: 0,
  },
})

interface IProps {
  children: React.ReactNode
  className?: string
}

interface IHocProps {
  classes: {
    root: string
  }
}

type TFullProps = IHocProps & IProps

const DialogContentRoot = ({ classes, children, className, ...other }: TFullProps) =>
  <div className={classNames(classes.root, className)} {...other}>
    {children}
  </div>

export default withStyles<IProps>(styles, { name: "DialogContentRoot" })(DialogContentRoot)
