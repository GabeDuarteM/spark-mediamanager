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

const App = ({ children, setVisibilityFilter }) => (
  <div id='app' style={styles.app}>
    <Tabs style={styles.tabs}>
      <Tab label='Series' style={styles.tab} onClick={() => setVisibilityFilter('SERIES')} />
      <Tab label='Movies' style={styles.tab} onClick={() => setVisibilityFilter('MOVIES')} />
      <Tab label='Animes' style={styles.tab} onClick={() => setVisibilityFilter('ANIMES')} />
    </Tabs>
    <VisiblePosters />
    {children}
  </div>
)

export default App
