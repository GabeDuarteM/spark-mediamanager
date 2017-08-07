import * as React from "react"

import { storiesOf } from "@storybook/react"

import ContainerWrapper from "../../../.storybook/ContainerWrapper"
import IVideoState from "../../store/reducers/video/IVideoState"
import { returnMockAnime, returnMockMovie, returnMockSerie } from "../../utils/testUtils"
import Theme from "../Theme/Theme"
import Home from "./Home"

const posters: IVideoState = {
  series: [returnMockSerie()],
  movies: [returnMockMovie()],
  animes: [returnMockAnime()]
}

storiesOf("Home", module)
  .add("dark theme", () =>
    <ContainerWrapper locale="pt">
      <Theme>
        <Home posters={posters} />
      </Theme>
    </ContainerWrapper>
  )
  .add("light theme", () =>
    <ContainerWrapper locale="en">
      <Theme type="light">
        <Home posters={posters} />
      </Theme>
    </ContainerWrapper>
  )
