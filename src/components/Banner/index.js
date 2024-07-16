import React from "react";
import { Carousel, Row, Col } from "antd";
import banner1 from "../../assets/banner1.png"; 

import "./index.css";
class BannerCon extends React.Component {
    constructor (props) {
    
        super(props)
        this.prev = this.prev.bind(this)
        this.next = this.next.bind(this)
    }
    prev  (index)  {
  
        this.img.prev()
    }

    next () {
        this.img.next()
    }
    onChange (index) {
        
        console.log(index)
    }
    render () {
        return (
            <div className="banner_con">
                <Carousel autoplay className="slick-list"  ref={dom=>{this.img=dom }}  afterChange={this.onChange}>
                    <div>
                        <img src={banner1}/>
                    </div>
                    <div>
                        <img src={banner1}/>
                    </div>
                    <div>
                        <img src={banner1}/>
                    </div>


                    <div>
                        <img src={banner1}/>
                    </div>
                </Carousel>

                <div className="content">
                    <div className="left_banner"  onClick={this.prev}></div>
                    <div className="right_banner" onClick={this.next}></div>
                </div>
            </div>
        )
    }
}

export default BannerCon;