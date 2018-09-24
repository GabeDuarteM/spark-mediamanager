import React from 'react'

import classNames from 'classnames'
import { IconButton, TextField } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import { StyleRules } from 'material-ui/styles/withStyles'

const styles: StyleRules = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  svg: {
    height: 18,
    width: 18,
  },
  iconButton: {
    height: 32,
    width: 32,
    margin: 'auto',
    marginLeft: -32,
  },
  textField: {
    width: '100%',
  },
  inputClassName: {
    paddingRight: 36,
  },
}

const stylesDecorator = withStyles(styles, { name: 'IconTextField' })

interface IProps {
  IconSvg: new () => React.Component<any, any>
  label?: string
  defaultValue?: string
  placeholder?: string
  className?: string
}

const IconTextField = stylesDecorator<IProps>(
  ({ className, IconSvg, classes, ...rest }) => (
    <div className={classNames(classes.root, className)}>
      <TextField
        className={classes.textField}
        InputProps={{ inputProps: { className: classes.inputClassName } }}
        {...rest}
      />
      <IconButton className={classes.iconButton}>
        <IconSvg className={classes.svg} />
      </IconButton>
    </div>
  ),
)

export default IconTextField
