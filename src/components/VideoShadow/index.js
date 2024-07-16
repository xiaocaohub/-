import React from "react";
import {Row, Col} from "antd";
import {Icon} from "@ant-design/compatible";

import "./index.css";

import bigVedioa from "../../assets/big_vedio1.mp4";
import bigVediob from "../../assets/big_vedio2.mp4";
import bigVedioc from "../../assets/big_vedio3.mp4";
const VideoArr = [bigVedioa, bigVediob, bigVedioc];
class VideoShadow extends React.Component {
    constructor (props) {
        super(props)
    }
    componentDidMount () {

        this.play()
    }
    play = ()=> {
        const video = document.getElementById("showVideo");
        video.autoplay = true;

        video.style.outline = "none";
    }
    render () {
        return (
            <div className="video_shadow">
                <div className="shadow"></div>
                <div className="video_con">
                    <Icon type="close-circle" className="close" onClick={this.props.closeVideoFn}/>
                    <video  id="showVideo" className="show_video" src={VideoArr[this.props.currentVideoIndex]} controls      
                    ></video>
                    
                </div>
            </div>
        )
    }
}

export default VideoShadow;