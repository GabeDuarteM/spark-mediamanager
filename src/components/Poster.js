import React from 'react'
import { Link } from 'react-router'
import { Card, CardMedia, CardTitle } from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import './Poster.css'

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

const Poster = ({ poster, showSubtitle, size, contentStyle, setEditVideo, link, className }) => {
  if (!poster) {
    return <div />
  }
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

  let insidePaper

  if (link) {
    insidePaper = (
      <Link to={link} onClick={() => setEditVideo(poster._id)} className='linkless-link'>
        <div style={size} className={styles.poster}>
          <Card style={size}>
            {cardContent}
          </Card>
        </div>
      </Link>
    )
  } else {
    insidePaper = (
      <div style={size} className={styles.poster}>
        <Card style={size}>
          {cardContent}
        </Card>
      </div>
    )
  }

  return (
    <div id='poster' style={{...size, ...contentStyle}} className={className}>
      <Paper style={size} className={styles.posterShadow} zDepth={4}>
        {insidePaper}
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
