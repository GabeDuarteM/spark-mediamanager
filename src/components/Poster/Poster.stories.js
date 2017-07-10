// @flow

import React from "react"
import { storiesOf } from "@storybook/react"
import Theme from "../Theme/Theme"

import ComponentWrapper from "../../../.storybook/ComponentWrapper"

import Poster from "./Poster"

const poster = {
  _id: 6,
  title: "Game of Thrones",
  posterImage:
    "https://walter.trakt.tv/images/shows/000/001/390/posters/thumb/93df9cd612.jpg.webp",
  year: "2016"
}

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
