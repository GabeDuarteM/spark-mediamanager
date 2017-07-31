import React, { Component } from "react"
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog"
import Button from "material-ui/Button"
import TextField from "material-ui/TextField"
import { injectIntl } from "react-intl"
import { withStyles, createStyleSheet } from "material-ui/styles"

const styles = createStyleSheet("VideoDetails", theme => ({
  fanart: {
    height: 300,
    width: 300,
    backgroundColor: "blue"
  }
}))

const VideoDetails = ({ classNames, classes, ...rest }) =>
  <Dialog {...rest}>
    <DialogContent className={`${classes.root} ${classNames || ""}`}>
      <DialogContentText>
        <div className={classes.fanart}>
          <div />
        </div>
      </DialogContentText>
    </DialogContent>
    <DialogActions />
  </Dialog>

export default withStyles(styles)(VideoDetails)
