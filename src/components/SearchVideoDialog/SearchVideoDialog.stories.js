// @flow

import React from "react"
import { storiesOf } from "@storybook/react"
import Theme from "../Theme/Theme"

import ComponentWrapper from "../../../.storybook/ComponentWrapper"

import SearchVideoDialog from "./SearchVideoDialog"

storiesOf("SearchVideoDialog", module)
  .add("dark theme", () =>
    <ComponentWrapper locale="pt">
      <Theme>
        <SearchVideoDialog open />
      </Theme>
    </ComponentWrapper>
  )
  .add("light theme", () =>
    <ComponentWrapper locale="en">
      <Theme type="light">
        <SearchVideoDialog open />
      </Theme>
    </ComponentWrapper>
  )
