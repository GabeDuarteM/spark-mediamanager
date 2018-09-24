import React from "react"

import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"

import ComponentWrapper from "../../../.storybook/ComponentWrapper"
import { returnMockAnime, returnMockMovie, returnMockSerie } from "../../utils/testUtils"
import Theme from "../Theme/Theme"
import PosterList from "./PosterList"

const posters = [...returnMockSerie(), ...returnMockMovie(), ...returnMockAnime()]

storiesOf("PosterList", module)
  .add("dark theme", () => (
    <ComponentWrapper locale="pt">
      <Theme>
        <PosterList videos={posters} setEditVideo={video => action(`Set video edit: ${video.api.title}`)} />
      </Theme>
    </ComponentWrapper>
  ))
  .add("light theme", () => (
    <ComponentWrapper locale="en">
      <Theme type="light">
        <PosterList videos={posters} setEditVideo={video => action(`Set video edit: ${video.api.title}`)} />
      </Theme>
    </ComponentWrapper>
  ))
