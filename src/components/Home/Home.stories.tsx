import * as React from "react"

import { storiesOf } from "@storybook/react"
import Theme from "../Theme/Theme"

import ContainerWrapper from "../../../.storybook/ContainerWrapper"

import Home from "./Home"

const posters = {
  animes: [],
  movies: [],
  series: [
    {
      _id: 1,
      posterImage: "https://walter.trakt.tv/images/shows/000/099/718/posters/thumb/a1037bff3e.jpg.webp",
      title: "Westworld",
      year: "2016"
    },
    {
      _id: 2,
      posterImage: "https://walter.trakt.tv/images/shows/000/001/393/posters/thumb/dec5cd226c.jpg.webp",
      title: "The Walking Dead",
      year: "2016"
    },
    {
      _id: 3,
      posterImage: "https://walter.trakt.tv/images/shows/000/001/409/posters/thumb/8adfe77938.jpg.webp",
      title: "The Big Bang Theory",
      year: "2016"
    },
    {
      _id: 4,
      posterImage: "https://walter.trakt.tv/images/shows/000/060/300/posters/thumb/79bd96a4d3.jpg.webp",
      title: "The Flash",
      year: "2016"
    },
    {
      _id: 5,
      posterImage: "https://walter.trakt.tv/images/shows/000/001/403/posters/thumb/e68cd618e2.jpg.webp",
      title: "Arrow",
      year: "2006"
    },
    {
      _id: 6,
      posterImage: "https://walter.trakt.tv/images/shows/000/001/390/posters/thumb/93df9cd612.jpg.webp",
      title: "Game of Thrones",
      year: "2016"
    },
    {
      _id: 7,
      posterImage: "https://walter.trakt.tv/images/shows/000/043/973/posters/thumb/735e733dbc.jpg.webp",
      title: "Vikings",
      year: "2016"
    },
    {
      _id: 8,
      fanartImg: "https://walter.trakt.tv/images/shows/000/060/278/fanarts/full/6cb6bd4982.jpg.webp",
      overview:
        "The story behind Detective James Gordon's rise to " +
        "prominence in Gotham City in the years before Batman's arrival.",
      path: "D:\\Users\\gabri\\Videos\\Series\\Gotham",
      posterImage: "https://walter.trakt.tv/images/shows/000/060/278/posters/thumb/a6b5b31941.jpg.webp",
      title: "Gotham",
      year: "2016"
    },
    {
      _id: 9,
      posterImage: "https://walter.trakt.tv/images/shows/000/041/793/posters/thumb/ded4cef865.jpg.webp",
      title: "Black Mirror",
      year: "2016"
    },
    {
      _id: 10,
      posterImage: "https://walter.trakt.tv/images/shows/000/001/406/posters/thumb/3313129c36.jpg.webp",
      title: "Elementary",
      year: "2016"
    },
    {
      _id: 11,
      posterImage: "https://walter.trakt.tv/images/shows/000/001/388/posters/thumb/fa39b59954.jpg.webp",
      title: "Breaking Bad",
      year: "2016"
    },
    {
      _id: 12,
      posterImage: "https://walter.trakt.tv/images/shows/000/001/396/posters/thumb/af1b16f10c.jpg.webp",
      title: "Dexter",
      year: "2016"
    },
    {
      _id: 13,
      posterImage: "https://walter.trakt.tv/images/shows/000/001/095/posters/thumb/4922cab2bc.jpg.webp",
      title: "How I Met Your Mother",
      year: "2016"
    },
    {
      _id: 14,
      posterImage: "https://walter.trakt.tv/images/shows/000/001/657/posters/thumb/1c1fef0e6d.jpg.webp",
      title: "Friends",
      year: "2016"
    },
    {
      _id: 15,
      posterImage: "https://walter.trakt.tv/images/shows/000/004/583/posters/thumb/0dd5fcd4a2.jpg.webp",
      title: "Lost",
      year: "2016"
    },
    {
      _id: 16,
      posterImage: "https://walter.trakt.tv/images/shows/000/001/394/posters/thumb/bea6f4577c.jpg.webp",
      title: "Marvel's Agents of S.H.I.E.L.D.",
      year: "2016"
    },
    {
      _id: 17,
      posterImage: "https://walter.trakt.tv/images/shows/000/002/274/posters/thumb/7f5b58486f.jpg.webp",
      title: "Prison Break",
      year: "2016"
    }
  ]
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
