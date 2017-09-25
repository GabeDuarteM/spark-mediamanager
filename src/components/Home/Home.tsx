import * as React from "react"

import { Add } from "material-ui-icons"
import AppBar from "material-ui/AppBar"
import Button from "material-ui/Button"
import { withStyles } from "material-ui/styles"
import { StyleRulesCallback } from "material-ui/styles/withStyles"
import Tabs, { Tab } from "material-ui/Tabs"
import { injectIntl } from "react-intl"
import * as ReactIntl from "react-intl"
import { Route } from "react-router"
import { compose } from "recompose"

import PosterListContainer from "../../containers/PosterListContainer/PosterListContainer"
import SearchVideoDialogContainer from "../../containers/SearchVideoDialogContainer/SearchVideoDialogContainer"
import VideoDetailsContainer from "../../containers/VideoDetailsContainer/VideoDetailsContainer"

const styles: StyleRulesCallback = theme => ({
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
})

interface IProps {
  handleTabChange: (evt: any, index: number) => void
  selectedTabIndex: number
  changeRouteAdd: () => void
}

interface IHocProps {
  classes: {
    root: string
    posterList: string
    fabButton: string
  }
  intl: ReactIntl.InjectedIntl
}

type IFullProps = IProps & IHocProps

const Home = ({ classes, handleTabChange, intl, selectedTabIndex, changeRouteAdd }: IFullProps) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Tabs value={selectedTabIndex} onChange={handleTabChange} centered>
        <Tab
          label={intl.formatMessage({
            id: "common.series",
            defaultMessage: "common.series",
          })}
        />
        <Tab
          label={intl.formatMessage({
            id: "common.movies",
            defaultMessage: "common.movies",
          })}
        />
        <Tab
          label={intl.formatMessage({
            id: "common.animes",
            defaultMessage: "common.animes",
          })}
        />
      </Tabs>
    </AppBar>
    <PosterListContainer className={classes.posterList} />
    <Route path="/videoDetails" component={VideoDetailsContainer} />
    <Route path="/add" component={SearchVideoDialogContainer} />
    <Button fab color="primary" className={classes.fabButton} onClick={changeRouteAdd}>
      <Add />
    </Button>
  </div>
)

export default compose<IFullProps, IProps>(injectIntl, withStyles(styles, { name: "Home" }))(Home)
