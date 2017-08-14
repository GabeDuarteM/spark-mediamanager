import * as React from "react"

import { connect, MapDispatchToProps, MapStateToProps } from "react-redux"

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

const sortPosters: (posters: IVideo[]) => IVideo[] = posters => {
  return posters.sort((posterA, posterB) => {
    if (posterA.api.title < posterB.api.title) {
      return -1
    }
    if (posterA.api.title > posterB.api.title) {
      return 1
    }

    return 0
  })
}

const mapStateToProps: MapStateToProps<{ videos: IVideoState }, IProps> = (state: IStoreState, ownProps?: IProps) => ({
  videos: state.video,
})

const mapDispatchToProps: MapDispatchToProps<any, IProps> = (dispatch, ownProps) => ({
  setVideoEdit: (video: IVideo, videoType: EVideoType) => dispatch(set(video)),
})

export default connect<any, any, IProps>(mapStateToProps, mapDispatchToProps)(PosterListContainer)
