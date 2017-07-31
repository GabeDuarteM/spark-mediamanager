import React from "react"
import { storiesOf } from "@storybook/react"
import Theme from "../Theme/Theme"

import ComponentWrapper from "../../../.storybook/ComponentWrapper"

import VideoDetails from "./VideoDetails"

storiesOf("VideoDetails", module)
  .add("dark theme", () =>
    <ComponentWrapper locale="pt">
      <Theme>
        <VideoDetails open />
      </Theme>
    </ComponentWrapper>
  )
  .add("light theme", () =>
    <ComponentWrapper locale="en">
      <Theme type="light">
        <VideoDetails open />
      </Theme>
    </ComponentWrapper>
  )
