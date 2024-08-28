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
                    src: require("../../assets/banner1.png")
                },

                {
                    id: 1,
                    src: require("../../assets/banner2.png")
                },
                {
                    id: 2,
                    src: require("../../assets/banner3.png")
                },
                {

                    id: 3,
                    src: require("../../assets/banner4.png")
                }
            ]
        }
        this.prev = this.prev.bind(this)
        this.next = this.next.bind(this)
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
                                <Link to="/">
                                 
                                    <img src={item.src} className="banner_img"/>
                                </Link> 
                            </div>
                        )
                    })}
                   
                </Carousel>

                <div className="operate_con">
                    <Row>
                        <Col span={3}></Col>
                        <Col span={18} className="operate">
                            <div className="btn btn_left" onClick={this.prev}></div>
                            <div className="btn btn_right" onClick={this.next}></div>
                        </Col>
                        <Col span={3}></Col>
                    </Row>
                </div>
            </div>
        )
    }
}



export default BannerCon;