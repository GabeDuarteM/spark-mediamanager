import React, { Component } from "react"
import Button from "material-ui/Button"
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog"
import { LabelRadio, RadioGroup } from "material-ui/Radio"
import TextField from "material-ui/TextField"
import { injectIntl } from "react-intl"
import { withStyles, createStyleSheet } from "material-ui/styles"

const styles = createStyleSheet("SearchVideoDialog", theme => ({
  dialog: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column"
  },
  radioGroup: {
    flexDirection: "row",
    alignSelf: "center"
  },
  input: {
    width: 550
  }
}))

@injectIntl
@withStyles(styles)
export default class SearchVideoDialog extends Component {
  state = {
    selectedType: "serie"
  }

  handleChange = event => {
    this.setState({ selectedType: event.currentTarget.value })
  }

  render() {
    const { intl, classes, classNames, ...rest } = this.props
    return (
      <div>
        <Dialog className={classNames || ""} {...rest}>
          <DialogContent>
            <DialogContentText className={classes.dialog}>
              <RadioGroup
                className={classes.radioGroup}
                selectedValue={this.state.selectedType}
                onChange={this.handleChange}
              >
                <LabelRadio
                  label={intl.formatMessage({ id: "common.serie" })}
                  value="serie"
                />
                <LabelRadio
                  label={intl.formatMessage({ id: "common.movie" })}
                  value="movie"
                />
                <LabelRadio
                  label={intl.formatMessage({ id: "common.anime" })}
                  value="anime"
                />
              </RadioGroup>
              <TextField
                type="text"
                className={classes.input}
                InputProps={{
                  placeholder: intl.formatMessage({
                    id: `common.${this.state.selectedType}`
                  })
                }}
                fullWidth
                marginForm
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              {intl.formatMessage({ id: "common.cancel" })}
            </Button>
            <Button onClick={this.handleRequestClose} color="primary">
              {intl.formatMessage({ id: "common.search" })}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
