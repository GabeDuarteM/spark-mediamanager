import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import muiTheme from '../app.material-ui.theme'

const styles = {
  app: {
    display: 'flex',
    flexFlow: 'column',
    height: 'inherit'
  },
  tabs: {
    width: '100%',
    zIndex: 999,
    top: 0,
    flex: '0 1 auto'
  },
  tab: {
    cursor: 'default !important',
    color: muiTheme.palette.secondaryTextColor
  }
}

const App = ({ children }) => (
  <div id='app' style={styles.app}>
    <Tabs style={styles.tabs}>
      <Tab label='Séries' style={styles.tab} />
      <Tab label='Filmes' style={styles.tab} />
      <Tab label='Animes' style={styles.tab} />
    </Tabs>
    {children}
  </div>
)

export default App
