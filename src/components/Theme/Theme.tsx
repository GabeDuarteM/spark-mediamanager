import * as React from "react"
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles"
import createPalette from "material-ui/styles/palette"

interface IProps {
  children: React.ReactElement<any>
  type?: IType
}

type IType = "dark" | "light"

const Theme = ({ children, type }: IProps) =>
  <MuiThemeProvider theme={getTheme(type)}>
    {children}
  </MuiThemeProvider>

const getTheme = (type: IType = "dark") => {
  return createMuiTheme({
    palette: createPalette({
      type
    })
  })
}

export default Theme
