import * as React from "react"

import { storiesOf } from "@storybook/react"
import { returnMockAnime } from "../../utils/testUtils"
import Theme from "../Theme/Theme"

import ComponentWrapper from "../../../.storybook/ComponentWrapper"

import VideoDetails from "./VideoDetails"

const baseProps: any = {
  open: true,
  video: returnMockAnime(),
}

storiesOf("VideoDetails", module)
  .add("dark theme", () => (
    <ComponentWrapper locale="pt">
      <Theme>
        <VideoDetails {...baseProps} />
      </Theme>
    </ComponentWrapper>
  ))
  .add("light theme", () => (
    <ComponentWrapper locale="en">
      <Theme type="light">
        <VideoDetails {...baseProps} />
      </Theme>
    </ComponentWrapper>
  ))
