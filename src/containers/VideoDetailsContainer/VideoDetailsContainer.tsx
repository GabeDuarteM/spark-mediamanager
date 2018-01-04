import * as React from "react"

import { connect, MapDispatchToProps, MapStateToProps } from "react-redux"
import { withRouter } from "react-router"
import { compose } from "recompose"

import IVideo from "../../@types/IVideo"
import VideoDetails from "../../components/VideoDetails/VideoDetails"
import IStoreState from "../../store/IStoreState"
import { clear } from "../../store/reducers/editVideo/editVideoActions"

interface IHocProps {
  video: IVideo
  history: any[]
  clearEditVideo: () => void
}

class VideoDetailsContainer extends React.PureComponent<IHocProps, {}> {
  public componentWillUnmount() {
    this.props.clearEditVideo()
  }

  public render() {
    const { video } = this.props

    return <VideoDetails open video={video} handleClose={this.handleClose} />
  }

  private handleClose = () => {
    this.props.history.push("/")
  }
}

const mapStateToProps: MapStateToProps<{}, {}, IStoreState> = state => ({
  video: state.editVideo.video as IVideo,
})

const mapDispatchToProps: MapDispatchToProps<{}, {}> = dispatch => ({
  clearEditVideo: () => dispatch(clear()),
})

const enhance = compose<IHocProps, { video: IVideo }>(connect(mapStateToProps, mapDispatchToProps), withRouter)

export default enhance(VideoDetailsContainer)
