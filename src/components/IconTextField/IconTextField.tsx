import * as React from "react"

import { IconButton, TextField } from "material-ui"
import { createStyleSheet, withStyles } from "material-ui/styles"

const styles = createStyleSheet("IconTextField", theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  svg: {
    height: 18,
    width: 18
  },
  iconButton: {
    height: 32,
    width: 32,
    margin: "auto",
    marginLeft: -32
  },
  textField: {
    width: "100%"
  }
}))

interface IProps {
  IconSvg: new () => React.Component<any, any>
  label?: string
  placeholder?: string
  className?: string
}

interface IHocProps {
  classes: {
    svg: string
    iconButton: string
    root: string
    textField: string
  }
}

const IconTextField = ({ label, placeholder, className, IconSvg, classes }: IProps & IHocProps) =>
  <div className={`${classes.root} ${className}`}>
    <TextField className={classes.textField} label={label} placeholder={placeholder} />
    <IconButton className={classes.iconButton}>
      <IconSvg className={classes.svg} />
    </IconButton>
  </div>

export default withStyles<IProps>(styles)(IconTextField)
