import * as React from "react"

import { storiesOf } from "@storybook/react"

import ContainerWrapper from "../../../.storybook/ContainerWrapper"
import { returnMockSerie } from "../../utils/testUtils"
import Fanart from "./Fanart"

const poster = returnMockSerie()[0]

storiesOf("Fanart", module)
  .add("dark theme", () =>
    <ContainerWrapper>
      <Fanart poster={poster} />
    </ContainerWrapper>
  )
  .add("light theme", () =>
    <ContainerWrapper type="light">
      <Fanart poster={poster} />
    </ContainerWrapper>
  )
