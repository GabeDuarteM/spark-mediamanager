import * as React from "react"

import { Button, Dialog, DialogActions, DialogContent, TextField } from "material-ui"
import { FormControl } from "material-ui/Form"
// import { FormControl, FormControlLabel } from "material-ui/Form"
// import Radio, { RadioGroup } from "material-ui/Radio"
import { withStyles } from "material-ui/styles"
import { StyleRules } from "material-ui/styles/withStyles"
import { injectIntl } from "react-intl"

import { EVideoType } from "../../@types/EVideoType"
import DialogContentRoot from "../DialogContentRoot/DialogContentRoot"

const styles: StyleRules = {
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
}

const stylesDecorator = withStyles(styles, { name: "SearchVideoDialog" })

interface IProps {
  classNames?: string
  open: boolean
  selectedType: EVideoType
  // handleChange: (event: React.ChangeEvent<any>) => void
  resetRoute: () => void
}

interface IHocProps {
  intl: ReactIntl.InjectedIntl
}

type IFullProps = IProps & IHocProps

const SearchVideoDialog = stylesDecorator<IFullProps>(
  ({ intl, classes, classNames, selectedType, resetRoute, ...rest }) => (
    <Dialog className={classNames || ""} {...rest} open onClose={resetRoute}>
      <DialogContent>
        <DialogContentRoot className={classes.dialog}>
          <FormControl>
            {/* <RadioGroup className={classes.radioGroup} value={selectedType} onChange={handleChange}>
            <FormControlLabel control={<Radio />} label={intl.formatMessage({ id: "common.serie" })} value="serie" />
            <FormControlLabel control={<Radio />} label={intl.formatMessage({ id: "common.movie" })} value="movie" />
            <FormControlLabel control={<Radio />} label={intl.formatMessage({ id: "common.anime" })} value="anime" />
          </RadioGroup> */}
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
          />
        </DialogContentRoot>
      </DialogContent>
      <DialogActions>
        <Button color="primary">{intl.formatMessage({ id: "common.cancel" })}</Button>
        <Button color="primary">{intl.formatMessage({ id: "common.search" })}</Button>
      </DialogActions>
    </Dialog>
  ),
)

export default injectIntl(SearchVideoDialog)
