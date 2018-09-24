import React from "react"

import { Button, Dialog, DialogActions, DialogContent, IconButton, MenuItem, TextField } from "material-ui"
import { Search, Settings, Tv } from "material-ui-icons"
import {} from "material-ui-icons"
import { withStyles } from "material-ui/styles"
import { StyleRules } from "material-ui/styles/withStyles"
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl"

import IVideo from "../../@types/IVideo"
import DialogContentRoot from "../DialogContentRoot/DialogContentRoot"
import Fanart from "../Fanart/Fanart"
import IconTextField from "../IconTextField/IconTextField"

const styles: StyleRules = {
  dialogRoot: {
    display: "flex",
    flexDirection: "column",
    margin: -24,
    marginBottom: 0,
  },
  fanart: {
    width: 768,
  },
  actions: {
    display: "flex",
    margin: "0 24px",
  },
  iconButton: {
    marginTop: 8,
    marginLeft: 8,
  },
  select: {
    marginTop: 12,
    width: 256,
  },
  path: {
    marginLeft: 8,
    width: 344,
  },
  overview: {
    margin: "8px 24px",
  },
}

const stylesDecorator = withStyles(styles, { name: "VideoDetails" })

interface IProps {
  classNames?: string
  open: boolean
  video: IVideo
  handleClose: () => void
}

type IFullProps = IProps & InjectedIntlProps

const VideoDetails = stylesDecorator<IFullProps>(({ classNames, classes, video, open, intl, handleClose, ...rest }) => {
  return (
    <Dialog open={open} onClose={handleClose} {...rest} maxWidth="md">
      <DialogContent className={`${classNames || ""}`}>
        <DialogContentRoot>
          <div className={classes.dialogRoot}>
            <div className={classes.fanart}>
              <Fanart video={video} />
            </div>
            <div className={classes.actions}>
              <TextField margin="normal" className={classes.select} select value={1}>
                <MenuItem value={1}>Gotham</MenuItem>
                <MenuItem value={2}>Gotham 2</MenuItem>
                <MenuItem value={3}>Something similar to Gotham</MenuItem>
              </TextField>
              <IconButton className={classes.iconButton}>
                <Settings />
              </IconButton>
              <IconButton className={classes.iconButton}>
                <Tv />
              </IconButton>
              <IconTextField
                IconSvg={Search}
                className={classes.path}
                defaultValue={video.path}
                placeholder={intl.formatMessage({ id: "videoDetails.path" })}
              />
            </div>
            <TextField
              label={intl.formatMessage({ id: "videoDetails.overview" })}
              multiline
              rows="3"
              defaultValue={video.api.overview}
              className={classes.overview}
            />
          </div>
        </DialogContentRoot>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          <FormattedMessage id="common.cancel" />
        </Button>
        <Button>
          <FormattedMessage id="common.save" />
        </Button>
      </DialogActions>
    </Dialog>
  )
})

export default injectIntl(VideoDetails)
