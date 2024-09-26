import React from "react";
import {Link} from "react-router-dom";
import {Carousel, Row, Col} from "antd";

import "./index.css";
import bannerImaga from "../../assets/banner1.png";
class BannerCon extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            bannerList: [
                {
                    id: 0,
                    src: require("../../assets/banner1.png"),
                    url: "/us"
                },

                {
                    id: 1,
                    src: require("../../assets/banner2.png"),
                    url: "/serieslist?id=94"
                },
                {
                    id: 2,
                    src: require("../../assets/banner3.png"),
                     url: "/serieslist?id=95"
                },
                {

                    id: 3,
                    src: require("../../assets/banner4.png"),
                     url: "/serieslist?id=96"
                }
            ],
            bannerHeight: 0
        }
        this.prev = this.prev.bind(this)
        this.next = this.next.bind(this)
    }
    
    componentDidMount () {
        this.init()
    }
    init = ()=> {
        let _this = this;
        
        let bannerList = this.state.bannerList;
        if (bannerList.length > 0) {        
            let bannerImg = document.querySelectorAll(".banner_img")[0];
            bannerImg.onload = function () {
                let bannerHeight = bannerImg.clientHeight;

                _this.setState({
                    bannerHeight: bannerHeight
                })
            }
        }
    }
    prev = (index)=> {
  
        this.img.prev()
    }

    next = ()=> {
        this.img.next()
    }
    onChange = (index)=> {
        
       // console.log(index)
    }

    render () {
        return (
            <div className="banner_con">

                <Carousel autoplay afterChange={this.onChange} ref={dom=>{this.img=dom }} >
                    {this.state.bannerList.map((item, index)=>{
                        return (
                            <div key={index}>

                                <Link to={item.url}>         
                                    <img src={item.src} className="banner_img"/>
                                </Link> 
                            </div>
                        )
                    })}
                   
                </Carousel>

                <div className="operate_con">
                 
                        
                        {/* <Col span={18} className="operate">
                             
                        </Col> */}
                    <div className="operate">
                       
                        <div className="btn btn_left" onClick={this.prev} style={{top: (this.state.bannerHeight/2 - 20) + "px"}}></div>
                        <div className="btn btn_right" onClick={this.next} style={{top: (this.state.bannerHeight/2 -20) + "px"}}></div>
                    </div>
                </div>
            </div>
        )
    }
}



export default BannerCon;