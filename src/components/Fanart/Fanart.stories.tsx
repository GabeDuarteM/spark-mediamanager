import * as React from "react"

import { storiesOf } from "@storybook/react"

import ContainerWrapper from "../../../.storybook/ContainerWrapper"
import { returnMockSerie } from "../../utils/testUtils"
import Theme from "../Theme/Theme"
import Fanart from "./Fanart"

const poster = returnMockSerie()

storiesOf("Fanart", module)
  .add("dark theme", () =>
    <ContainerWrapper locale="pt">
      <Theme>
        <Fanart poster={poster} />
      </Theme>
    </ContainerWrapper>
  )
  .add("light theme", () =>
    <ContainerWrapper locale="en">
      <Theme type="light">
        <Fanart poster={poster} />
      </Theme>
    </ContainerWrapper>
  )
