import React from 'react'
import Poster from './Poster'

const CreatePoster = ({ showPoster, poster, posterSize, contentStyle }) => {
  if (showPoster) {
    return <Poster style={{...posterSize}} contentStyle={contentStyle} size={posterSize} showSubtitle={false} poster={poster} />
  } else {
    return <div />
  }
}

const Fanart = ({ poster, posterSize, showPoster, contentStyle }) => {
  const styles = {
    fanart: {
      backgroundImage: 'url(' + poster.fanartImg + ')',
      backgroundSize: 'cover',
      backgroundPosition: '50% 10%',
      height: 250
    },
    poster: {
      paddingTop: 30,
      paddingLeft: 25
    }
  }
  return (
    <div style={{ ...styles.fanart, ...contentStyle }}>
      <CreatePoster contentStyle={styles.poster} showPoster={showPoster} poster={poster} posterSize={posterSize} />
    </div>
  )
}

export default Fanart
