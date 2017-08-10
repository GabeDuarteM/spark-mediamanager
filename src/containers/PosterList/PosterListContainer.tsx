import * as React from "react"

import { connect } from "react-redux"

import { EVideoType } from "../../@types/EVideoType"
import IVideo from "../../@types/IVideo"
import PosterList from "../../components/PosterList/PosterList"
import IStoreState from "../../store/IStoreState"
import IVideoState from "../../store/reducers/video/IVideoState"

interface IProps {
  videoType: EVideoType
  className?: string
}

interface IHocProps {
  videos: IVideoState
}

interface IState {
  visibleVideos: IVideo[]
}

class PosterListContainer extends React.Component<IProps & IHocProps, IState> {
  constructor(props: IProps & IHocProps) {
    super(props)

    this.state = {
      visibleVideos: this.setVisibleVideos(),
    }
  }

  public render() {
    return <PosterList className={this.props.className} videos={this.sortPosters(this.state.visibleVideos)} />
  }

  private setVisibleVideos(): IVideo[] {
    switch (this.props.videoType) {
      case EVideoType.Anime:
        return this.props.videos.animes
      case EVideoType.Movie:
        return this.props.videos.movies
      case EVideoType.Serie:
        return this.props.videos.series

      default:
        throw new Error("An invalid visibilityFilter were supplied to setVisibleVideos")
    }
  }

  private sortPosters: (posters: IVideo[]) => IVideo[] = posters => {
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
}

const mapStateToProps = (state: IStoreState, ownProps?: IProps) => ({
  videos: state.video,
})

export default connect<any, any, IProps>(mapStateToProps)(PosterListContainer)
