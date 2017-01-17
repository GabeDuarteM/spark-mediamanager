import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import SettingsIcon from 'material-ui/svg-icons/action/settings'
import TvIcon from 'material-ui/svg-icons/hardware/tv'
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'
import Fanart from '../containers/Fanart'
import FileSelector from '../components/FileSelector'

const createVideoStub = () => {
  return {
    _id: '',
    title: '',
    path: '',
    overview: '',
    posterImg: '',
    fanartImg: '',
    year: ''
  }
}

const EditVideo = (props) => {
  const styles = {
    dialog: {
      padding: 0,
      paddingBottom: 24
    },
    fanart: {
      margin: '-24px -24px 0px -24px',
      height: 250,
      width: 768
    },
    actions: {
      div: {
        marginTop: 15,
        float: 'left'
      },
      divDropdown: {
        float: 'left'
      },
      buttons: {
        smallIcon: {
          width: 24,
          height: 24
        },
        smallButton: {
          width: 48,
          height: 48,
          marginTop: 3,
          marginLeft: 5
        }
      },
      fileSelector: {
        width: 340,
        float: 'right',
        marginLeft: 10
      }
    }
  }

  const size = { height: 186, width: 124 }
  const { video, handleClose, setVideoPath, children } = props
  let videoNormalized
  let videoStub = createVideoStub()

  const actions = [
    <FlatButton label='Cancel' primary onTouchTap={handleClose} />,
    <FlatButton label='Save' primary />
  ]

  videoNormalized = video || videoStub

  return (
    <div id='addResultContent'>
      <Dialog
        actions={actions}
        modal={false}
        onRequestClose={handleClose}
        contentStyle={styles.dialog}
        open
      >
        <Fanart showPoster poster={videoNormalized} posterSize={size} contentStyle={styles.fanart} />
        <div>
          <div style={videoNormalized === videoStub ? styles.actions.divDropdown : styles.actions.div}>
            <SelectField menuStyle={{ height: 56, margin: 0 }} value={videoNormalized._id} hintText='Select'>
              <MenuItem value={videoNormalized._id} primaryText={videoNormalized.title} />
            </SelectField>
          </div>
          <div style={styles.actions.div}>
            <IconButton touch style={styles.actions.buttons.smallButton} iconStyle={styles.actions.buttons.smallIcon} tooltip='Settings'>
              <SettingsIcon />
            </IconButton>
            <IconButton touch style={styles.actions.buttons.smallButton} iconStyle={styles.actions.buttons.smallIcon} tooltip='Episodes'>
              <TvIcon />
            </IconButton>
            <FileSelector
              contentStyle={styles.actions.fileSelector}
              value={videoNormalized.path}
              selectCallback={(path) => { if (path && path.length > 0) { setVideoPath(path[0]) } }}
              onChange={(evt, val) => setVideoPath(val)} />
          </div>
          <TextField
            floatingLabelText='Overview'
            fullWidth
            disabled
            multiLine
            rows={1}
            rowsMax={4}
            style={{cursor: 'text'}}
            textareaStyle={{color: 'white'}}
            value={videoNormalized.overview}
          />
        </div>
      </Dialog>
      {children}
    </div>
  )
}

export default EditVideo
