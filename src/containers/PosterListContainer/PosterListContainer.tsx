import React from "react"

import { connect } from "react-redux"

import { EVideoType } from "../../@types/EVideoType"
import IVideo from "../../@types/IVideo"
import PosterList from "../../components/PosterList/PosterList"
import IStoreState from "../../store/IStoreState"
import { set } from "../../store/reducers/editVideo/editVideoActions"
import IVideoState from "../../store/reducers/video/IVideoState"

interface IProps {
  className?: string
}

interface IHocProps {
  videos: IVideoState
  setVideoEdit: (video: IVideo) => void
}

type IFullProps = IProps & IHocProps

const PosterListContainer = ({ className, setVideoEdit, videos }: IFullProps) => {
  const visibleVideos = setVisibleVideos(videos)

  return <PosterList className={className} videos={sortPosters(visibleVideos)} setEditVideo={setVideoEdit} />
}

const setVisibleVideos = (videos: IVideoState): IVideo[] => {
  switch (videos.visibilityFilter) {
    case "anime":
      return videos.animes
    case "movie":
      return videos.movies
    case "serie":
      return videos.series

    default:
      throw new Error("An invalid visibilityFilter were supplied to setVisibleVideos")
  }
}

const sortPosters: (posters: IVideo[]) => IVideo[] = posters =>
  posters.sort((posterA, posterB) => posterA.api.title.localeCompare(posterB.api.title))

const mapStateToProps = (state: IStoreState, ownProps?: IProps) => ({
  videos: state.video,
})

const mapDispatchToProps = (dispatch: any, ownProps: IProps) => ({
  setVideoEdit: (video: IVideo, videoType: EVideoType) => dispatch(set(video)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PosterListContainer)
