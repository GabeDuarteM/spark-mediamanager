import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import CircularProgress from 'material-ui/CircularProgress'

const styles = {
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  contentItem: {
    display: 'flex',
    width: 'inherit',
    margin: '0px 15px'
  }
}

const Search = ({ handleClose, handleSubmit, handleRadioChange, handleTextChange, handleLoading, type, typeText, openLoading }) => {
  const actions = [
    <FlatButton label='Cancel' primary onTouchTap={handleClose} />,
    <FlatButton label='Search' primary onTouchTap={() => searchOnClick()} />
  ]

  const searchOnClick = () => {
    const query = document.getElementById('SearchText').value
    handleTextChange(query)
    handleLoading()
    handleSubmit(type, query, handleLoading)
  }

  return (
    <div id='searchContents'>
      <Dialog actions={actions} modal={false} open onRequestClose={handleClose}>
        <div>
          <RadioButtonGroup style={styles.content} name='type' defaultSelected='serie' onChange={(evt, val) => handleRadioChange(val)}>
            <RadioButton style={styles.contentItem} value='serie' label='Serie' />
            <RadioButton style={styles.contentItem} value='movie' label='Movie' />
            <RadioButton style={styles.contentItem} value='anime' label='Anime' />
          </RadioButtonGroup>
          <TextField id='SearchText' floatingLabelText={typeText} fullWidth />
        </div>
      </Dialog>
      <Dialog modal={false} open={openLoading}>
        <div style={{margin: '0 auto', display: 'table'}}>
          <CircularProgress />
        </div>
      </Dialog>
    </div>
  )
}

export default Search
