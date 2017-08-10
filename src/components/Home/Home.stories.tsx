import * as React from "react"

import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"

import ContainerWrapper from "../../../.storybook/ContainerWrapper"
import Theme from "../Theme/Theme"
import Home from "./Home"

storiesOf("Home", module)
  .add("dark theme", () =>
    <ContainerWrapper locale="pt">
      <Theme>
        <Home handleTabRoute={(videoType, history) => action(`Changed the filter to ${videoType}`)} />
      </Theme>
    </ContainerWrapper>
  )
  .add("light theme", () =>
    <ContainerWrapper locale="en">
      <Theme type="light">
        <Home handleTabRoute={(videoType, history) => action(`Changed the filter to ${videoType}`)} />
      </Theme>
    </ContainerWrapper>
  )
