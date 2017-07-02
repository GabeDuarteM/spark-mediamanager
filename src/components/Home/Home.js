import React, { Component } from "react"
import { withStyles, createStyleSheet } from "material-ui/styles"
import PosterList from "../Poster/PosterList"

const styles = createStyleSheet("PosterList", theme => ({
  posterList: {
    display: "flex",
    flexWrap: "wrap"
  }
}))

@withStyles(styles)
class Home extends Component {
  render() {
    const { children, classes, posters = [] } = this.props
    return (
      <div>
        <PosterList posters={posters} />
      </div>
    )
  }
}

export default Home
