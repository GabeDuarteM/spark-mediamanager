import * as React from "react"

import { storiesOf } from "@storybook/react"
import Theme from "../Theme/Theme"

import ComponentWrapper from "../../../.storybook/ComponentWrapper"
import { returnMockSerie } from "../../utils/testUtils"
import Poster from "./Poster"

const poster = returnMockSerie()

storiesOf("Poster", module)
  .add("dark theme", () =>
    <ComponentWrapper locale="pt">
      <Theme>
        <Poster poster={poster} />
      </Theme>
    </ComponentWrapper>
  )
  .add("light theme", () =>
    <ComponentWrapper locale="en">
      <Theme type="light">
        <Poster poster={poster} />
      </Theme>
    </ComponentWrapper>
  )
  .add("no subtitle", () =>
    <ComponentWrapper locale="pt">
      <Theme>
        <Poster showSubtitle={false} poster={poster} />
      </Theme>
    </ComponentWrapper>
  )
