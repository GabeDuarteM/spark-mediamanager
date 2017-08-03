import * as React from "react"

import { IconButton, TextField } from "material-ui"
import { createStyleSheet, withStyles } from "material-ui/styles"

const styles = createStyleSheet("IconTextField", theme => ({
  root: {
    display: "flex"
  },
  svg: {
    height: 18,
    width: 18
  },
  iconButton: {
    height: 32,
    width: 32,
    marginLeft: -32
  }
}))

interface IProps {
  IconSvg: new () => React.Component<any, any>
}

interface IHocProps {
  classes: {
    svg: string
    iconButton: string
    root: string
  }
}

const IconTextField: React.StatelessComponent<IProps & IHocProps> = ({ IconSvg, classes }) =>
  <div className={classes.root}>
    <TextField />
    <IconButton className={classes.iconButton}>
      <IconSvg className={classes.svg} />
    </IconButton>
  </div>

export default withStyles<IProps>(styles)(IconTextField)
