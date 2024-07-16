import React from "react";
import "./index.css";
import {Icon} from "@ant-design/compatible";

class VedioShadow extends React.Component {
    constructor (props) {
        super(props)
        console.log(props)
        this.state = {
            width: window.innerWidth * 0.8,
            vedioHeight: window.innerHeight * 0.8,
            vedioList: [
                {
                    id: 0,
                    vedioSrc: require("../../../assets/big_vedio1.mp4")
                },
                {
                    id: 1,
                    vedioSrc: require("../../../assets/big_vedio2.mp4")
                },
                {
                    id: 3,
                    vedioSrc: require("../../../assets/big_vedio3.mp4")
                }
            ]
        }
    }
    componentDidMount () {
     
        this.play()
    }
    play = ()=> {
        const video = document.getElementById("bigvideo");
        video.autoplay = true;
        video.style.outline = "none";
    }
    render () {

        
        return (
            <div className="vedio_shadow_con">
                <div className="shadow"></div>
                <div className="big_vedio_con">

                    <video  className="big_video" src={this.state.vedioList[this.props.index].vedioSrc} controls style={{maxHeight: this.state.vedioHeight +"px", minHeight: this.state.vedioHeight + "px"}} id="bigvideo"  muted   
                    ></video>
                    <Icon type="close-circle" className="close_btn" onClick={this.props.closeFn}/> 
                </div>
            </div>
        )
    }
}

export default VedioShadow;