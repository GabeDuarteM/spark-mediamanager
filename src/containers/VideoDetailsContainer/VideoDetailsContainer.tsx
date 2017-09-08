import * as React from "react"

import { connect, MapStateToProps } from "react-redux"
import { withRouter } from "react-router"
import { compose } from "recompose"

import IVideo from "../../@types/IVideo"
import VideoDetails from "../../components/VideoDetails/VideoDetails"
import IMapStateToProps from "../../store/IMapStateToProps"
import IStoreState from "../../store/IStoreState"
import { clear } from "../../store/reducers/editVideo/editVideoActions"

interface IHocProps {
  video: IVideo
  clearEditVideo: () => void
  history: any[]
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

const mapStateToProps: IMapStateToProps<IStoreState, { video: IVideo }, {}> = state => ({
  video: state.editVideo.video as IVideo,
})

const mapDispatchToProps: MapStateToProps<any, {}> = dispatch => ({
  clearEditVideo: () => dispatch(clear()),
})

const enhance = compose<{}, IHocProps>(connect(mapStateToProps, mapDispatchToProps), withRouter)

export default enhance(VideoDetailsContainer)
