import * as React from "react"

import { Add } from "material-ui-icons"
import AppBar from "material-ui/AppBar"
import Button from "material-ui/Button"
import { createStyleSheet, withStyles } from "material-ui/styles"
import Tabs, { Tab } from "material-ui/Tabs"
import { injectIntl } from "react-intl"
import * as ReactIntl from "react-intl"
import { compose } from "recompose"

import IPoster from "../../@types/IPoster"
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

interface IProps {
  posters: {
    series: IPoster[]
    movies: IPoster[]
    animes: IPoster[]
  }
}

interface IHocProps {
  classes: {
    root: string
    posterList: string
    fabButton: string
  }
  intl: ReactIntl.InjectedIntl
}

interface IState {
  selectedTabIndex: number
  visiblePosters: IPoster[]
}

class Home extends React.Component<IProps & IHocProps, IState> {
  constructor(props: IProps & IHocProps) {
    super(props)
    this.state = {
      selectedTabIndex: 0,
      visiblePosters: this.props.posters.series
    }
  }

  public render() {
    const { classes, intl } = this.props

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs index={this.state.selectedTabIndex} onChange={this.handleTabChange.bind(this)} centered>
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
        <PosterList className={classes.posterList} posters={this.state.visiblePosters} />
        <Button fab color="primary" className={classes.fabButton}>
          <Add />
        </Button>
      </div>
    )
  }

  public handleTabChange(event: any, selectedTabIndex: number): void {
    switch (selectedTabIndex) {
      case 0:
        this.setState({
          visiblePosters: this.props.posters.series,
          selectedTabIndex
        })
        break
      case 1:
        this.setState({
          visiblePosters: this.props.posters.movies,
          selectedTabIndex
        })
        break
      case 2:
        this.setState({
          visiblePosters: this.props.posters.animes,
          selectedTabIndex
        })
        break

      default:
        throw new Error(`Recieved an invalid video type at handleTabChange. Arg: ${this.state.selectedTabIndex}`)
    }
  }
}

export default compose<IProps, IProps>(injectIntl, withStyles(styles))(Home)
