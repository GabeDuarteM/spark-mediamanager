import * as React from "react"

import { storiesOf } from "@storybook/react"
import Theme from "../Theme/Theme"

import ComponentWrapper from "../../../.storybook/ComponentWrapper"

import VideoDetails from "./VideoDetails"

const baseProps: any = {
  open: true,
  poster: {
    _id: 8,
    fanartImage: "https://walter.trakt.tv/images/shows/000/060/278/fanarts/full/6cb6bd4982.jpg.webp",
    overview:
      "The story behind Detective James Gordon's rise to " +
      "prominence in Gotham City in the years before Batman's arrival.",
    path: "D:\\Users\\gabri\\Videos\\Series\\Gotham",
    posterImage: "https://walter.trakt.tv/images/shows/000/060/278/posters/thumb/a6b5b31941.jpg.webp",
    title: "Gotham",
    year: "2016"
  }
}

storiesOf("VideoDetails", module)
  .add("dark theme", () =>
    <ComponentWrapper locale="pt">
      <Theme>
        <VideoDetails {...baseProps} />
      </Theme>
    </ComponentWrapper>
  )
  .add("light theme", () =>
    <ComponentWrapper locale="en">
      <Theme type="light">
        <VideoDetails {...baseProps} />
      </Theme>
    </ComponentWrapper>
  )
