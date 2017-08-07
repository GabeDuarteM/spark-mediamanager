import * as React from "react"

import { connect } from "react-redux"

import Home from "../../components/Home/Home"
import IState from "../../store/IState"
import IVideoState from "../../store/reducers/video/IVideoState"

interface IHocProps {
  videos: IVideoState
}

const HomeContainer = ({ videos }: IHocProps) => <Home posters={videos} />

const mapStateToProps = (state: IState) => ({
  videos: state.video
})

export default connect(mapStateToProps)(HomeContainer)
