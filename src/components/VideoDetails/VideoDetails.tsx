import * as React from "react"

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, IconButton, TextField } from "material-ui"
import { Search, Settings, Tv } from "material-ui-icons"
import {} from "material-ui-icons"
import { MenuItem, SelectField } from "material-ui-legacy"
import { createStyleSheet, withStyles } from "material-ui/styles"
import { FormattedMessage, injectIntl } from "react-intl"
import * as ReactIntl from "react-intl"
import { compose } from "recompose"

import IPoster from "../../@types/IPoster"
import Fanart from "../Fanart/Fanart"
import IconTextField from "../IconTextField/IconTextField"

const styleSheet = createStyleSheet("VideoDetails", theme => ({
  dialogRoot: {
    display: "flex",
    flexDirection: "column",
    margin: [-24, -24, 0, -24]
  },
  fanart: {
    width: 768
  },
  actions: {
    display: "flex",
    margin: [0, 24]
  },
  iconButton: {
    marginTop: 8,
    marginLeft: 8
  },
  select: {
    marginTop: 8
  },
  path: {
    marginLeft: 8,
    width: 344
  },
  overview: {
    margin: [8, 24]
  }
}))

interface IProps {
  classNames?: string
  open: boolean
  poster: IPoster
}

interface IHocProps {
  classes: {
    fanart: string
    dialogRoot: string
    actions: string
    iconButton: string
    path: string
    overview: string
    select: string
  }
  intl: ReactIntl.InjectedIntl
}

type IFullProps = IProps & IHocProps

const VideoDetails: React.StatelessComponent<IFullProps> = ({ classNames, classes, poster, open, intl, ...rest }) =>
  <Dialog open={open} {...rest} maxWidth="md">
    <DialogContent className={`${classNames || ""}`}>
      <DialogContentText>
        <div className={classes.dialogRoot}>
          <div className={classes.fanart}>
            <Fanart poster={poster} />
          </div>
          <div className={classes.actions}>
            <SelectField className={classes.select} value={1}>
              <MenuItem value={1} primaryText="Gotham" />
              <MenuItem value={2} primaryText="Gotham 2" />
              <MenuItem value={3} primaryText="Something similar to Gotham" />
            </SelectField>
            <IconButton className={classes.iconButton}>
              <Settings />
            </IconButton>
            <IconButton className={classes.iconButton}>
              <Tv />
            </IconButton>
            <IconTextField
              IconSvg={Search}
              className={classes.path}
              placeholder={intl.formatMessage({ id: "videoDetails.path" })}
            />
          </div>
          <TextField
            label={intl.formatMessage({ id: "videoDetails.overview" })}
            multiline
            rows="3"
            defaultValue={poster.overview}
            className={classes.overview}
          />
        </div>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button>
        <FormattedMessage id="common.cancel" />
      </Button>
      <Button>
        <FormattedMessage id="common.save" />
      </Button>
    </DialogActions>
  </Dialog>

export default compose<IFullProps, IProps>(withStyles(styleSheet), injectIntl)(VideoDetails)
