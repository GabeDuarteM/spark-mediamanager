import React from 'react'
import Poster from './Poster'

const styles = {
  posterList: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 50,
    height: '100%'
  }
}

const PosterListComponent = ({ posters }) => (
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
  </div>
)

export default PosterListComponent
