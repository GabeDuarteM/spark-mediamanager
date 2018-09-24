import React from 'react'

import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import { StyleRules } from 'material-ui/styles/withStyles'
import { Link } from 'react-router-dom'

import IVideo from '../../@types/IVideo'
import Poster from '../Poster/Poster'

const styles: StyleRules = {
  posterList: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  link: {
    textDecoration: 'none',
    height: 320,
    cursor: 'default',
    outline: 'none',
  },
}

const stylesDecorator = withStyles(styles, { name: 'PosterList' })

interface IProps {
  className?: string
  videos: IVideo[]
  setEditVideo: (video: IVideo) => void
}

const PosterList = stylesDecorator<IProps>(
  ({ classes, className, videos, setEditVideo }) => (
    <div className={classNames(className, classes.posterList)}>
      {videos.map((video, i) => (
        <Link
          to="/videoDetails"
          onClick={() => setEditVideo(video)}
          key={i}
          className={classes.link}
        >
          <Poster video={video} />
        </Link>
      ))}
    </div>
  ),
)

export default PosterList
