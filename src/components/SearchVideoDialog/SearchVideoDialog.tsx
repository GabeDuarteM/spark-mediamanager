import * as React from "react"

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, TextField } from "material-ui"
import { FormControl, FormControlLabel } from "material-ui/Form"
import Radio, { RadioGroup } from "material-ui/Radio"
import { createStyleSheet, withStyles } from "material-ui/styles"
import { injectIntl } from "react-intl"
import { compose } from "recompose"

const styles = createStyleSheet("SearchVideoDialog", theme => ({
  dialog: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
  },
  radioGroup: {
    flexDirection: "row",
    alignSelf: "center",
  },
  input: {
    width: 550,
  },
}))

interface IProps {
  classNames?: string
  open: boolean
}

interface IHocProps {
  intl: ReactIntl.InjectedIntl
  classes: {
    dialog: string
    radioGroup: string
    input: string
  }
}

type IFullProps = IProps & IHocProps

class SearchVideoDialog extends React.Component<IFullProps, {}> {
  public state = {
    selectedType: "serie",
  }

  public render() {
    const { intl, classes, classNames, ...rest } = this.props

    return (
      <div>
        <Dialog className={classNames || ""} {...rest} open>
          <DialogContent>
            <DialogContentText className={classes.dialog}>
              <FormControl>
                <RadioGroup
                  className={classes.radioGroup}
                  selectedValue={this.state.selectedType}
                  onChange={this.handleChange}
                >
                  <FormControlLabel
                    control={<Radio />}
                    label={intl.formatMessage({ id: "common.serie" })}
                    value="serie"
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label={intl.formatMessage({ id: "common.movie" })}
                    value="movie"
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label={intl.formatMessage({ id: "common.anime" })}
                    value="anime"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                type="text"
                className={classes.input}
                InputProps={{
                  placeholder: intl.formatMessage({
                    id: `common.${this.state.selectedType}`,
                  }),
                }}
                fullWidth
                marginForm
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary">
              {intl.formatMessage({ id: "common.cancel" })}
            </Button>
            <Button color="primary">
              {intl.formatMessage({ id: "common.search" })}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }

  private handleChange = (event: React.ChangeEvent<any>) => {
    this.setState({ selectedType: event.currentTarget.value })
  }
}

export default compose<IProps, IProps>(injectIntl, withStyles(styles))(SearchVideoDialog)
