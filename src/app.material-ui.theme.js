import { teal700, teal500, deepOrangeA200, deepOrangeA400, deepOrangeA100, grey400, fullWhite, blueGrey800 } from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

export default getMuiTheme({
  palette: {
    primary1Color: teal500,
    primary2Color: teal700,
    primary3Color: grey400,
    accent1Color: deepOrangeA200,
    accent2Color: deepOrangeA400,
    accent3Color: deepOrangeA100,
    textColor: fullWhite,
    secondaryTextColor: fade(fullWhite, 0.7),
    alternateTextColor: fade(fullWhite, 0.7),
    canvasColor: blueGrey800,
    borderColor: fade(fullWhite, 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12)
  },
  appBar: {
    height: 50
  }
})
