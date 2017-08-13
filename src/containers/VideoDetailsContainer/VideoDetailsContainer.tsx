import * as React from "react"

import { connect } from "react-redux"

import IVideo from "../../@types/IVideo"
import VideoDetails from "../../components/VideoDetails/VideoDetails"
import IMapStateToProps from "../../store/IMapStateToProps"
import IStoreState from "../../store/IStoreState"

interface IHocProps {
  video: IVideo
}

const VideoDetailsContainer = ({ video }: IHocProps) => {
  return <VideoDetails open video={video} />
}

const mapStateToProps: IMapStateToProps<IStoreState, { video: IVideo }, {}> = state => ({
  video: state.editVideo.video as IVideo,
})

export default connect(mapStateToProps)(VideoDetailsContainer)
