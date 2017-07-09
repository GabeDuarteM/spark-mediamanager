import React, { Component } from "react"
import { withStyles, createStyleSheet } from "material-ui/styles"
import Tabs, { Tab } from "material-ui/Tabs"
import AppBar from "material-ui/AppBar"
import Button from "material-ui/Button"
import { Add } from "material-ui-icons"
import { injectIntl } from "react-intl"

import PosterList from "../PosterList/PosterList"

const styles = createStyleSheet("Home", theme => ({
  root: {
    minHeight: "100vh",
    backgroundColor: theme.palette.background.paper
  },
  posterList: {
    padding: 10,
    height: "calc(100vh - 68px)",
    overflow: "auto"
  },
  fabButton: {
    position: "absolute",
    bottom: 30,
    right: 40
  }
}))

@injectIntl
@withStyles(styles)
class Home extends Component {
  state = {
    index: 0
  }

  handleChange = (event, index) => {
    this.setState({ index })
  }
  render() {
    const { children, classes, intl, posters = [] } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs index={this.state.index} onChange={this.handleChange} centered>
            <Tab label={intl.formatMessage({ id: "common.series" })} />
            <Tab label={intl.formatMessage({ id: "common.movies" })} />
            <Tab label={intl.formatMessage({ id: "common.animes" })} />
          </Tabs>
        </AppBar>
        {this.state.index === 0 &&
          <PosterList
            className={classes.posterList}
            posters={posters.series}
          />}
        {this.state.index === 1 &&
          <PosterList
            className={classes.posterList}
            posters={posters.filmes}
          />}
        {this.state.index === 2 &&
          <PosterList
            className={classes.posterList}
            posters={posters.animes}
          />}
        <Button fab color="primary" className={classes.fabButton}>
          <Add />
        </Button>
      </div>
    )
  }
}

export default Home
