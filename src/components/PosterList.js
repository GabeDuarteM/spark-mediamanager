import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Poster from './Poster'
import { push } from 'react-router-redux'

const styles = {
  posterList: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 50,
    height: '100%'
  },
  fabAdd: {
    position: 'fixed',
    bottom: 24,
    right: 24
  }
}

const PosterListComponent = ({ children, posters }) => (
  <div id='posterList' style={{ flex: '1 1 auto', overflow: 'auto' }}>
    <div style={styles.posterList}>
      {
        posters.map((poster, i) =>
          (<div key={i} style={{ margin: 30 }}>
            <Poster
              poster={poster}
              key={i}
              showSubtitle
            />
          </div>)
        )
      }
    </div>
    <FloatingActionButton style={styles.fabAdd} onClick={() => push('/EditVideo/1')}>
      <ContentAdd />
    </FloatingActionButton>
    {children}
  </div>
)

export default PosterListComponent
