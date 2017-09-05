import * as React from "react"

import { connect, MapStateToProps } from "react-redux"

import IVideo from "../../@types/IVideo"
import VideoDetails from "../../components/VideoDetails/VideoDetails"
import IMapStateToProps from "../../store/IMapStateToProps"
import IStoreState from "../../store/IStoreState"
import { clear } from "../../store/reducers/editVideo/editVideoActions"

interface IHocProps {
  video: IVideo
  clearEditVideo: () => void
}

class VideoDetailsContainer extends React.PureComponent<IHocProps, {}> {
  public componentWillUnmount() {
    this.props.clearEditVideo()
  }

  public render() {
    const { video } = this.props

    return <VideoDetails open video={video} />
  }
}

const mapStateToProps: IMapStateToProps<IStoreState, { video: IVideo }, {}> = state => ({
  video: state.editVideo.video as IVideo,
})

const mapDispatchToProps: MapStateToProps<any, {}> = dispatch => ({
  clearEditVideo: () => dispatch(clear()),
})

export default connect<{}, IHocProps, {}>(mapStateToProps, mapDispatchToProps)(VideoDetailsContainer)
