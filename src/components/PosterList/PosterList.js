// @flow

import React, { Component } from "react"
import Poster from "../Poster/Poster"
import { withStyles, createStyleSheet } from "material-ui/styles"
import type { PosterT } from "../../typings"

const styles = createStyleSheet("PosterList", theme => ({
  posterList: {
    display: "flex",
    flexWrap: "wrap"
  }
}))

@withStyles(styles)
class PosterList extends Component {
  sortPosters(posters: PosterT[]): PosterT[] {
    return posters.sort((posterA, posterB): number => {
      if (posterA.title < posterB.title) return -1
      if (posterA.title > posterB.title) return 1
      return 0
    })
  }

  render() {
    const { children, classes, className, posters = [] } = this.props
    return (
      <div className={`${className} ${classes.posterList}`}>
        {this.sortPosters(posters).map((poster, i) =>
          <Poster poster={poster} key={i} />
        )}
      </div>
    )
  }
}

export default PosterList
