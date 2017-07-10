// @flow

import React, { Component } from "react"
import { withStyles, createStyleSheet } from "material-ui/styles"
import Tabs, { Tab } from "material-ui/Tabs"
import AppBar from "material-ui/AppBar"
import Button from "material-ui/Button"
import { Add } from "material-ui-icons"
import { injectIntl } from "react-intl"
import type { IntlShape } from "react-intl"

import PosterList from "../PosterList/PosterList"
import type { PosterT } from "../../typings"

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

type Props = {
  children: React.ReactElement<HTMLElement>,
  classes: {
    root: string,
    posterList: string,
    fabButton: string
  },
  intl: IntlShape,
  posters: { series: PosterT[], movies: PosterT[], animes: PosterT[] }
}
type State = {
  selectedTabIndex: number,
  visiblePosters: PosterT[]
}

@injectIntl
@withStyles(styles)
class Home extends Component<Props, Props, State> {
  state: State

  props: Props

  constructor(props: Props) {
    super(props)
    this.state = {
      selectedTabIndex: 0,
      visiblePosters: this.props.posters.series
    }
  }

  handleTabChange(): void {
    switch (this.state.selectedTabIndex) {
      case 0:
        this.setState({ visiblePosters: this.props.posters.series })
        break
      case 1:
        this.setState({ visiblePosters: this.props.posters.movies })
        break
      case 2:
        this.setState({ visiblePosters: this.props.posters.animes })
        break

      default:
        throw new Error(
          `Recieved an invalid video type at handleTabChange. Arg: ${this.state
            .selectedTabIndex}`
        )
    }
  }

  render() {
    const { children, classes, intl, posters = [] } = this.props

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            index={this.state.selectedTabIndex}
            onChange={this.handleTabChange}
            centered
          >
            <Tab
              label={intl.formatMessage({
                id: "common.series",
                defaultMessage: "common.series"
              })}
            />
            <Tab
              label={intl.formatMessage({
                id: "common.movies",
                defaultMessage: "common.movies"
              })}
            />
            <Tab
              label={intl.formatMessage({
                id: "common.animes",
                defaultMessage: "common.animes"
              })}
            />
          </Tabs>
        </AppBar>
        <PosterList
          className={classes.posterList}
          posters={this.state.visiblePosters}
        />
        <Button fab color="primary" className={classes.fabButton}>
          <Add />
        </Button>
      </div>
    )
  }
}

export default Home
