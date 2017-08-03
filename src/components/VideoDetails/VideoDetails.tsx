import * as React from "react"

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, IconButton, TextField } from "material-ui"
import { Settings, Tv } from "material-ui-icons"
import { MenuItem, SelectField } from "material-ui-legacy"
import { createStyleSheet, withStyles } from "material-ui/styles"

import IPoster from "../../@types/IPoster"
import Fanart from "../Fanart/Fanart"

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
    marginTop: 24,
    marginLeft: 8
  },
  path: {
    marginLeft: 8,
    marginTop: 14,
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
  }
}

type IFullProps = IProps & IHocProps

const VideoDetails: React.StatelessComponent<IFullProps> = ({ classNames, classes, poster, open, ...rest }) =>
  <Dialog open={open} {...rest} maxWidth="md">
    <DialogContent className={`${classNames || ""}`}>
      <DialogContentText>
        <div className={classes.dialogRoot}>
          <div className={classes.fanart}>
            <Fanart poster={poster} />
          </div>
          <div className={classes.actions}>
            <SelectField floatingLabelText="Frequency" value={2}>
              <MenuItem value={1} primaryText="Never" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </SelectField>
            <IconButton className={classes.iconButton}>
              <Settings />
            </IconButton>
            <IconButton className={classes.iconButton}>
              <Tv />
            </IconButton>
            <TextField className={classes.path} label="Path" />
          </div>
          <TextField label="Overview" multiline rows="3" defaultValue={poster.overview} className={classes.overview} />
        </div>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button>Cancel</Button>
      <Button>Save</Button>
    </DialogActions>
  </Dialog>

export default withStyles<IProps>(styleSheet)(VideoDetails)
