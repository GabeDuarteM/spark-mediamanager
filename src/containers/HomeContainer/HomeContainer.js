// @flow

import React, { Component } from "react"

import HomeComponent from "../../components/Home/Home"
import type { PosterT } from "../../typings"

class HomeContainer extends Component {
  state: {
    posters: {
      series: PosterT[],
      movies: PosterT[],
      animes: PosterT[]
    }
  }

  constructor(props: any) {
    super(props)
    this.state = {
      posters: {
        series: [
          {
            _id: 1,
            title: "Westworld",
            posterImage:
              "https://walter.trakt.tv/images/shows/000/099/718/posters/thumb/a1037bff3e.jpg.webp",
            year: "2016"
          },
          {
            _id: 2,
            title: "The Walking Dead",
            posterImage:
              "https://walter.trakt.tv/images/shows/000/001/393/posters/thumb/dec5cd226c.jpg.webp",
            year: "2016"
          },
          {
            _id: 3,
            title: "The Big Bang Theory",
            posterImage:
              "https://walter.trakt.tv/images/shows/000/001/409/posters/thumb/8adfe77938.jpg.webp",
            year: "2016"
          },
          {
            _id: 4,
            title: "The Flash",
            posterImage:
              "https://walter.trakt.tv/images/shows/000/060/300/posters/thumb/79bd96a4d3.jpg.webp",
            year: "2016"
          },
          {
            _id: 5,
            title: "Arrow",
            posterImage:
              "https://walter.trakt.tv/images/shows/000/001/403/posters/thumb/e68cd618e2.jpg.webp",
            year: "2006"
          },
          {
            _id: 6,
            title: "Game of Thrones",
            posterImage:
              "https://walter.trakt.tv/images/shows/000/001/390/posters/thumb/93df9cd612.jpg.webp",
            year: "2016"
          },
          {
            _id: 7,
            title: "Vikings",
            posterImage:
              "https://walter.trakt.tv/images/shows/000/043/973/posters/thumb/735e733dbc.jpg.webp",
            year: "2016"
          },
          {
            _id: 8,
            title: "Gotham",
            posterImage:
              "https://walter.trakt.tv/images/shows/000/060/278/posters/thumb/a6b5b31941.jpg.webp",
            fanartImage:
              "https://walter.trakt.tv/images/shows/000/060/278/fanarts/full/6cb6bd4982.jpg.webp",
            year: "2016",
            overview:
              "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
            path: "D:\\Users\\gabri\\Videos\\Series\\Gotham"
          },
          {
            _id: 9,
            title: "Black Mirror",
            posterImage:
              "https://walter.trakt.tv/images/shows/000/041/793/posters/thumb/ded4cef865.jpg.webp",
            year: "2016"
          },
          {
            _id: 10,
            title: "Elementary",
            posterImage:
              "https://walter.trakt.tv/images/shows/000/001/406/posters/thumb/3313129c36.jpg.webp",
            year: "2016"
          },
          {
            _id: 11,
            title: "Breaking Bad",
            posterImage:
              "https://walter.trakt.tv/images/shows/000/001/388/posters/thumb/fa39b59954.jpg.webp",
            year: "2016"
          },
          {
            _id: 12,
            title: "Dexter",
            posterImage:
              "https://walter.trakt.tv/images/shows/000/001/396/posters/thumb/af1b16f10c.jpg.webp",
            year: "2016"
          },
          {
            _id: 13,
            title: "How I Met Your Mother",
            posterImage:
              "https://walter.trakt.tv/images/shows/000/001/095/posters/thumb/4922cab2bc.jpg.webp",
            year: "2016"
          },
          {
            _id: 14,
            title: "Friends",
            posterImage:
              "https://walter.trakt.tv/images/shows/000/001/657/posters/thumb/1c1fef0e6d.jpg.webp",
            year: "2016"
          },
          {
            _id: 15,
            title: "Lost",
            posterImage:
              "https://walter.trakt.tv/images/shows/000/004/583/posters/thumb/0dd5fcd4a2.jpg.webp",
            year: "2016"
          },
          {
            _id: 16,
            title: "Marvel's Agents of S.H.I.E.L.D.",
            posterImage:
              "https://walter.trakt.tv/images/shows/000/001/394/posters/thumb/bea6f4577c.jpg.webp",
            year: "2016"
          },
          {
            _id: 17,
            title: "Prison Break",
            posterImage:
              "https://walter.trakt.tv/images/shows/000/002/274/posters/thumb/7f5b58486f.jpg.webp",
            year: "2016"
          }
        ],
        movies: [],
        animes: []
      }
    }
  }

  render() {
    return <HomeComponent posters={this.state.posters} />
  }
}

export default HomeContainer
