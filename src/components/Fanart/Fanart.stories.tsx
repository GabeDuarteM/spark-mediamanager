import * as React from "react"

import { storiesOf } from "@storybook/react"

import ContainerWrapper from "../../../.storybook/ContainerWrapper"
import IPoster from "../../@types/IPoster"
import Theme from "../Theme/Theme"
import Fanart from "./Fanart"

const poster: IPoster = {
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
