import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Poster from './Poster'

const styles = {
  posterList: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 14,
    marginBottom: 50,
    height: '100%'
  },
  fabAdd: {
    position: 'fixed',
    bottom: 24,
    right: 24
  }
}

const PosterListComponent = ({ children, posters, setEditVideo }) => (
  <div id='posterList' style={{ flex: '1 1 auto', overflow: 'auto' }}>
    <div style={styles.posterList}>
      {
        posters.map((poster, i) =>
          (<div key={i} style={{ margin: 10 }}>
            <Poster
              poster={poster}
              key={i}
              showSubtitle
              setEditVideo={setEditVideo}
              className='poster'
              link='/EditVideo'
            />
          </div>)
        )
      }
    </div>
    <FloatingActionButton style={styles.fabAdd}>
      <ContentAdd />
    </FloatingActionButton>
    {children}
  </div>
)

export default PosterListComponent
