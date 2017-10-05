import * as React from "react"

import { storiesOf } from "@storybook/react"
import { Search } from "material-ui-icons"
import Paper from "material-ui/Paper"

import ComponentWrapper from "../../../.storybook/ComponentWrapper"
import Theme from "../Theme/Theme"

import IconTextField from "./IconTextField"

const baseProps: any = {
  IconSvg: Search,
}

storiesOf("IconTextFields", module)
  .add("dark theme", () => (
    <ComponentWrapper locale="pt">
      <Theme>
        <Paper style={{ padding: 32 }}>
          <IconTextField {...baseProps} />
        </Paper>
      </Theme>
    </ComponentWrapper>
  ))
  .add("light theme", () => (
    <ComponentWrapper locale="en">
      <Theme type="light">
        <Paper style={{ padding: 32 }}>
          <IconTextField {...baseProps} />
        </Paper>
      </Theme>
    </ComponentWrapper>
  ))
