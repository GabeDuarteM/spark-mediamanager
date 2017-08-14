import * as React from "react"

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, TextField } from "material-ui"
import { FormControl, FormControlLabel } from "material-ui/Form"
import Radio, { RadioGroup } from "material-ui/Radio"
import { createStyleSheet, withStyles } from "material-ui/styles"
import { injectIntl } from "react-intl"
import { compose } from "recompose"

import { EVideoType } from "../../@types/EVideoType"

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
  selectedType: EVideoType
  handleChange: (event: React.ChangeEvent<any>) => void
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

const SearchVideoDialog = ({ intl, classes, classNames, selectedType, handleChange, ...rest }: IFullProps) =>
  <Dialog className={classNames || ""} {...rest} open>
    <DialogContent>
      <DialogContentText className={classes.dialog}>
        <FormControl>
          <RadioGroup className={classes.radioGroup} selectedValue={selectedType} onChange={handleChange}>
            <FormControlLabel control={<Radio />} label={intl.formatMessage({ id: "common.serie" })} value="serie" />
            <FormControlLabel control={<Radio />} label={intl.formatMessage({ id: "common.movie" })} value="movie" />
            <FormControlLabel control={<Radio />} label={intl.formatMessage({ id: "common.anime" })} value="anime" />
          </RadioGroup>
        </FormControl>
        <TextField
          type="text"
          className={classes.input}
          InputProps={{
            placeholder: intl.formatMessage({
              id: `common.${selectedType}`,
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

export default compose<IProps, IProps>(injectIntl, withStyles(styles))(SearchVideoDialog)
