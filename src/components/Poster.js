import React from 'react'
import { Card, CardMedia, CardTitle } from 'material-ui/Card'
import Paper from 'material-ui/Paper'

const styles = {
  poster: {
    width: 200,
    height: 300,
    cursor: 'default'
  },
  posterImg: {
    width: 200,
    height: 300
  },
  posterShadow: {
    width: 200,
    height: 300,
    margin: 30
  }
}

const Poster = ({ poster, showSubtitle, size }) => {
  let cardContent
  const img = (
    <img
      alt={poster.title}
      style={{ ...styles.posterImg, ...size }}
      src={poster.posterImg}
    />
  )

  if (showSubtitle) {
    cardContent = (
      <CardMedia
        overlay={<CardTitle title={poster.title} subtitle={'2016'} />}
      >
        {img}
      </CardMedia>
    )
  } else {
    cardContent = img
  }

  return (
    <div id='poster'>
      <Paper style={size} className={styles.posterShadow} zDepth={4}>
        <div style={size} className={styles.poster}>
          <Card style={size}>
            {cardContent}
          </Card>
        </div>
      </Paper>
    </div>
  )
}

export default Poster
