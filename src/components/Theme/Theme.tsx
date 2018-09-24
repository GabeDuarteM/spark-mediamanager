import React from "react"

import { createMuiTheme, MuiThemeProvider } from "material-ui/styles"

type IType = "dark" | "light"

interface IProps {
  children: React.ReactNode
  type?: IType
}

const Theme: React.StatelessComponent<IProps> = ({ children, type }) => (
  <MuiThemeProvider theme={getTheme(type)}>{children}</MuiThemeProvider>
)

const getTheme = (type: IType = "dark") => {
  return createMuiTheme({
    palette: {
      type,
    },
  })
}

export default Theme
