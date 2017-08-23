import * as React from "react"

import * as classNames from "classnames"
import { IconButton, TextField } from "material-ui"
import { withStyles } from "material-ui/styles"
import { StyleRules } from "material-ui/styles/withStyles"

const styles: StyleRules = {
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  svg: {
    height: 18,
    width: 18,
  },
  iconButton: {
    height: 32,
    width: 32,
    margin: "auto",
    marginLeft: -32,
  },
  textField: {
    width: "100%",
  },
  inputClassName: {
    paddingRight: 36,
  },
}

interface IProps {
  IconSvg: new () => React.Component<any, any>
  label?: string
  defaultValue?: string
  placeholder?: string
  className?: string
}

interface IHocProps {
  classes: {
    svg: string
    iconButton: string
    root: string
    textField: string
    inputClassName: string
  }
}

const IconTextField = ({ className, IconSvg, classes, ...rest }: IProps & IHocProps) =>
  <div className={classNames(classes.root, className)}>
    <TextField className={classes.textField} InputClassName={classes.inputClassName} {...rest} />
    <IconButton className={classes.iconButton}>
      <IconSvg className={classes.svg} />
    </IconButton>
  </div>

export default withStyles<IProps>(styles, { name: "IconTextField" })(IconTextField)
