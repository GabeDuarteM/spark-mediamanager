import React from 'react'
import { Link } from 'react-router'
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
        overlay={<CardTitle title={trimIfNecessary(poster.title)} subtitle={poster.year} />}
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
        <Link to={'/EditVideo/' + poster._id} className='linkless-link'>
          <div style={size} className={styles.poster}>
            <Card style={size}>
              {cardContent}
            </Card>
          </div>
        </Link>
      </Paper>
    </div>
  )
}

function trimIfNecessary (title) {
  const length = 14
  const trimmedString = title.length > length
                      ? title.substring(0, length - 3) + '...'
                      : title
  return trimmedString
}

export default Poster
