// @flow

import React, { Component } from "react"
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles"
import createPalette from "material-ui/styles/palette"

class Theme extends Component {
  getTheme(type: string = "dark") {
    return createMuiTheme({
      palette: createPalette({
        type
      })
    })
  }

  render() {
    const { children, type } = this.props
    return (
      <MuiThemeProvider theme={this.getTheme(type)}>
        {children}
      </MuiThemeProvider>
    )
  }
}

export default Theme
