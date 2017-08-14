import * as React from "react"

import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"
import Theme from "../Theme/Theme"

import ComponentWrapper from "../../../.storybook/ComponentWrapper"

import SearchVideoDialog from "./SearchVideoDialog"

const Component = (
  <SearchVideoDialog
    open
    handleChange={event => action(`changed to ${event.currentTarget.value}`)}
    selectedType="serie"
    resetRoute={() => action(`tried to close the dialog`)}
  />
)

storiesOf("SearchVideoDialog", module)
  .add("dark theme", () =>
    <ComponentWrapper locale="pt">
      <Theme>
        {Component}
      </Theme>
    </ComponentWrapper>
  )
  .add("light theme", () =>
    <ComponentWrapper locale="en">
      <Theme type="light">
        {Component}
      </Theme>
    </ComponentWrapper>
  )
