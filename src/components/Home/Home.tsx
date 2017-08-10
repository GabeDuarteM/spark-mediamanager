import * as React from "react"

import { Add } from "material-ui-icons"
import AppBar from "material-ui/AppBar"
import Button from "material-ui/Button"
import { createStyleSheet, withStyles } from "material-ui/styles"
import Tabs, { Tab } from "material-ui/Tabs"
import { injectIntl } from "react-intl"
import * as ReactIntl from "react-intl"
import { Route, withRouter } from "react-router"
import { compose } from "recompose"

import { EVideoType } from "../../@types/EVideoType"
import PosterListContainer from "../../containers/PosterList/PosterListContainer"

const styles = createStyleSheet("Home", theme => ({
  root: {
    minHeight: "100vh",
    backgroundColor: theme.palette.background.paper,
  },
  posterList: {
    padding: 10,
    height: "calc(100vh - 68px)",
    overflow: "auto",
  },
  fabButton: {
    position: "absolute",
    bottom: 30,
    right: 40,
  },
}))

interface IProps {
  handleTabRoute: (videoType: EVideoType, history: any) => void
}

interface IHocProps {
  classes: {
    root: string
    posterList: string
    fabButton: string
  }
  history: any[]
  location: any
  intl: ReactIntl.InjectedIntl
}

interface IState {
  selectedTabIndex: number
}

import { returnMockAnime } from "../../utils/testUtils"
import VideoDetails from "../VideoDetails/VideoDetails"

class Home extends React.PureComponent<IProps & IHocProps, IState> {
  constructor(props: IProps & IHocProps) {
    super(props)
    this.state = {
      selectedTabIndex: this.returnTabIndex(this.props.location.pathname),
    }
  }

  public render() {
    const { classes, intl, handleTabRoute, history } = this.props

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs index={this.state.selectedTabIndex} onChange={this.handleTabChange.bind(this)} centered>
            <Tab
              onClick={() => handleTabRoute(EVideoType.Serie, history)}
              label={intl.formatMessage({
                id: "common.series",
                defaultMessage: "common.series",
              })}
            />
            <Tab
              onClick={() => handleTabRoute(EVideoType.Movie, history)}
              label={intl.formatMessage({
                id: "common.movies",
                defaultMessage: "common.movies",
              })}
            />
            <Tab
              onClick={() => handleTabRoute(EVideoType.Anime, history)}
              label={intl.formatMessage({
                id: "common.animes",
                defaultMessage: "common.animes",
              })}
            />
          </Tabs>
        </AppBar>
        <Route
          path="/animes"
          render={() => <PosterListContainer videoType={EVideoType.Anime} className={classes.posterList} />}
        />
        <Route
          path="/movies"
          render={() => <PosterListContainer videoType={EVideoType.Movie} className={classes.posterList} />}
        />
        <Route
          path="/series"
          render={() => <PosterListContainer videoType={EVideoType.Serie} className={classes.posterList} />}
        />
        <Route
          path="/(animes|movies|series)/videoDetails"
          render={() => <VideoDetails open video={returnMockAnime()} />}
        />
        <Button fab color="primary" className={classes.fabButton}>
          <Add />
        </Button>
      </div>
    )
  }

  private handleTabChange(evt: any, index: number) {
    this.setState({ selectedTabIndex: index })
  }

  private returnTabIndex(pathname: string) {
    if (pathname.startsWith("/series")) {
      return 0
    } else if (pathname.startsWith("/movies")) {
      return 1
    } else if (pathname.startsWith("/animes")) {
      return 2
    }
    throw new Error("Invalid pathname: " + pathname)
  }
}

export default compose<IProps & IHocProps, IProps>(injectIntl, withStyles(styles), withRouter)(Home)
