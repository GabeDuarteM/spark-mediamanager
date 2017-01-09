import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
// import TextField from 'material-ui/TextField'
// import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
// import CircularProgress from 'material-ui/CircularProgress'

// const styles = {
//   fabAddContent: {
//     position: 'fixed',
//     bottom: 30,
//     right: 30,
//     zIndex: 1
//   },
//   content: {
//     display: 'inline-block !important',
//     width: '100px !important'
//   },
//   contentGroup: {
//     marginTop: 10
//   },
//   hidden: {
//     visibility: 'hidden',
//     height: 0
//   },
//   loadingSearch: {
//     visibility: 'visible',
//     display: 'table',
//     margin: '0 auto',
//     marginTop: 50
//   }
//
// }

const Search = ({ handleClose, handleSubmit }) => {
  const actions = [
    <FlatButton label='Cancelar' primary onTouchTap={handleClose} />,
    <FlatButton label='Procurar' primary onTouchTap={handleSubmit} />
  ]

  return (
    <div id='searchContents'>
      <Dialog actions={actions} modal={false} open onRequestClose={handleClose}>
        <div />
      </Dialog>
    </div>
  )
}

export default Search
