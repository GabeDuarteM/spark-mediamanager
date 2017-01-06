import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
// import Poster from '../Poster/Poster'

const EditVideo = (props) => {
  console.log(props.video)
  const actions = [
    <FlatButton label='Cancelar' primary onTouchTap={props.handleClose} />,
    <FlatButton label='Salvar' primary />
  ]
  return (
    <div id='addResultContent'>
      <Dialog
        actions={actions}
        modal={false}
        onRequestClose={props.handleClose}
        open
      >
        <SelectField value={props.video._id}>
          <MenuItem value={props.video._id} primaryText={props.video.title} />
        </SelectField>
      </Dialog>
    </div>
  )
}

export default EditVideo
