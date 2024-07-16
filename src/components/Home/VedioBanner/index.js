import React from "react";
import {Row, Col} from "antd";
import {Link} from "react-router-dom";

import VedioShadow from "../VedioShadow";
import "./index.css";
import bigVedio1 from "../../../assets/big_vedio1.mp4";
import vedioImga from "../../../assets/vedio_list1.png";
import playIcon from "../../../assets/play.png";

class VedioBanner extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            vedioHeight: 0,
            vedioShadowFlag: false,
            currentVedioIndex: 0,
            vedioList: [
                {
                    id: 0,
                    imgSrc: require("../../../assets/vedio_list1.png"),
                    vedioSrc: "../../../assets/big_vedio1.mp4"
                },
                {
                    id: 1,
                    imgSrc: require("../../../assets/vedio_list1.png"),
                    vedioSrc: "../../../assets/big_vedio2.mp4"
                },
                {
                    id: 2,
                    imgSrc: require("../../../assets/vedio_list1.png"),
                    vedioSrc: "../../../assets/big_vedio3.mp4"
                }
            ]
        }
    }
    componentDidMount () {

        
        this.play()
        this.getVedioHeight()
    }
    play = ()=> {
        const video = document.getElementById("video");
        video.autoplay = true;
        video.style.outline = "none";
    }
    getVedioHeight = ()=> {
        const screeWidth = window.innerWidth;
        const vedioHeight = screeWidth * 0.4;
        this.setState({
            vedioHeight: vedioHeight
        })
    }
    showVedioFn = (index)=> {
        this.setState({
            vedioShadowFlag: true,
            currentVedioIndex: index
        })
    }
    closeVedioFn = ()=> {
        this.setState({
            vedioShadowFlag: false
        })
    }
    render () {
        return (
            <div className="vedio_banner_con">
                <video  className="big_video" src={bigVedio1} style={{maxHeight: this.state.vedioHeight +"px", minHeight: this.state.vedioHeight + "px"}} id="video" muted   
                    ></video>
                <div className="vedio_list_con">
                    <div className="shadow"></div>
                    <div className="vedio_list_content">
                        <Row>
                            <Col span={3}></Col>
                            <Col span={18}>
                                <div className="title_con">
                                    <div className="left">
                                        <div className="small_title">一分钟看视频</div>
                                        <div className="big_title">video introduced</div>
                                    </div>
                                    <Link to="/" className="more_btn">搜索更多</Link>
                                </div>
                                <ul className="vedio_list">
                                    {this.state.vedioList.map((item, index)=> {
                                        return (
                                            <li key={item.id}>
                                                <img src={item.imgSrc} alt="" className="img"/>
                                                <img src={playIcon} alt="" className="play_icon" onClick={()=>{this.showVedioFn(index)}}/>
                                                <div className="text_con">
                                                    <div className="shadow"></div>
                                                    <div className="text">
                                                        <span className="txt">一分钟了解设计师严选系列</span>
                                                        <div className="collect_txt">10K</div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </Col>
                            <Col span={3}></Col>
                        </Row>
                    </div>
                </div>
                {this.state.vedioShadowFlag && <VedioShadow index={this.state.currentVedioIndex} closeFn={this.closeVedioFn}/>}
            </div>
        )
    }
}

export default VedioBanner;