import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import VisiblePosters from '../containers/VisiblePosters'

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
    cursor: 'default !important'
  }
}

const App = ({ children }) => (
  <div id='app' style={styles.app}>
    <Tabs style={styles.tabs}>
      <Tab label='Séries' style={styles.tab} />
      <Tab label='Filmes' style={styles.tab} />
      <Tab label='Animes' style={styles.tab} />
    </Tabs>
    <VisiblePosters />
    {children}
  </div>
)

export default App
