import React from 'react'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui/svg-icons/action/search'
const { dialog } = require('electron').remote

const FileSelector = ({ contentStyle, value, onChange, onBlur, selectCallback }) => {
  const styles = {
    searchButton: {
      ripple: {
        margin: '0px -38px',
        height: 38,
        width: 38,
        paddingBottom: 18,
        paddingRight: 18
      },
      icon: {
        height: 16,
        width: 16
      }
    },
    inputStyle: {
      paddingRight: 38,
      boxSizing: 'border-box'
    }
  }
  return (
    <div style={contentStyle}>
      <TextField
        hintText='Folder'
        inputStyle={styles.inputStyle}
        fullWidth
        value={value}
        onChange={(evt, val) => onChange(evt, val)}
      />
      <IconButton style={styles.searchButton.ripple} iconStyle={styles.searchButton.icon} onClick={() => dialog.showOpenDialog({properties: ['openDirectory'], defaultPath: value}, selectCallback)}>
        <SearchIcon />
      </IconButton>
    </div>
  )
}

export default FileSelector
