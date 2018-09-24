import React from 'react'

import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import { StyleRulesCallback } from 'material-ui/styles/withStyles'

const styles: StyleRulesCallback = theme => ({
  root: {
    ...(theme.typography.subheading as any),
    color: theme.palette.text.secondary,
    margin: 0,
  },
})

const stylesDecorator = withStyles(styles, { name: 'DialogContentRoot' })

interface IProps {
  children: React.ReactNode
  className?: string
}

const DialogContentRoot = stylesDecorator<IProps>(
  ({ classes, children, className, ...other }) => (
    <div className={classNames(classes.root, className)} {...other}>
      {children}
    </div>
  ),
)

export default DialogContentRoot
