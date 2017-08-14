import * as React from "react"

import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"
import Theme from "../Theme/Theme"

import ComponentWrapper from "../../../.storybook/ComponentWrapper"

import SearchVideoDialog from "./SearchVideoDialog"

storiesOf("SearchVideoDialog", module)
  .add("dark theme", () =>
    <ComponentWrapper locale="pt">
      <Theme>
        <SearchVideoDialog
          open
          handleChange={event => action(`changed to ${event.currentTarget.value}`)}
          selectedType="serie"
        />
      </Theme>
    </ComponentWrapper>
  )
  .add("light theme", () =>
    <ComponentWrapper locale="en">
      <Theme type="light">
        <SearchVideoDialog
          open
          handleChange={event => action(`changed to ${event.currentTarget.value}`)}
          selectedType="serie"
        />
      </Theme>
    </ComponentWrapper>
  )
