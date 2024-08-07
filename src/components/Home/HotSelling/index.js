import React from "react";
import {Link} from "react-router-dom";
import {Row, Col, Carousel} from "antd";

import hotSellImg from "../../../assets/hot_sell_1.png";
import "./index.css";
class HotSelling extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            currentIndex: 1
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
        
        console.log(index)
 
        let longLine = document.getElementById("longline");
        longLine.style.cssText="width:"+(index+1)*25+"%;" 
    }
    render () {
        return (
            <div className="hot_selling_con">
                <Row>
                    <Col span={3}></Col>
                    <Col span={18}>
                        <div className="title_con">
                            <div className="left">
                                <div className="small_title">好物一览</div>
                                <div className="big_title">HOT SELLING</div>
                                <div className="txt">常年霸榜 总有ta的道理</div>
                            </div>

                            <Link to="/" className="more_btn">搜索更多</Link>
                        </div>

                        <div className="hot_banner_con">
                            <div className="left_btn" onClick={this.prev}></div>
                            <div className="right_btn" onClick={this.next}></div>
                            <Carousel  afterChange={this.onChange} dots={false}    ref={dom=>{this.img=dom }}>
                                <div>
                                    <div className="good_item">
                                        <Link to="/">
                                            <img src={hotSellImg} className="good_img"/>
                                        </Link>


                                        <div className="text_con">
                                            <div className="txt">博纳豪斯 棉麻马鞍皮沙发</div>
                                            <div className="price">¥16199</div>
                                        </div>
                                    </div>
                                    
                                    

                                    <div className="good_item">
                                        <Link to="/">
                                            <img src={hotSellImg} className="good_img"/>
                                        </Link>


                                        <div className="text_con">
                                            <div className="txt">博纳豪斯 棉麻马鞍皮沙发</div>
                                            <div className="price">¥16199</div>
                                        </div>
                                    </div>
                                    <div className="good_item">
                                        <Link to="/">
                                            <img src={hotSellImg} className="good_img"/>
                                        </Link>


                                        <div className="text_con">
                                            <div className="txt">博纳豪斯 棉麻马鞍皮沙发</div>
                                            <div className="price">¥16199</div>
                                        </div>
                                    </div>
                                    <div className="good_item">
                                        <Link to="/">
                                            <img src={hotSellImg} className="good_img"/>
                                        </Link>


                                        <div className="text_con">
                                            <div className="txt">博纳豪斯 棉麻马鞍皮沙发</div>
                                            <div className="price">¥16199</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="good_item">
                                        <Link to="/">
                                            <img src={hotSellImg} className="good_img"/>
                                        </Link>


                                        <div className="text_con">
                                            <div className="txt">博纳豪斯 棉麻马鞍皮沙发</div>
                                            <div className="price">¥16199</div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div>
                                    <div className="good_item">
                                        <Link to="/">
                                            <img src={hotSellImg} className="good_img"/>
                                        </Link>


                                        <div className="text_con">
                                            <div className="txt">博纳豪斯 棉麻马鞍皮沙发</div>
                                            <div className="price">¥16199</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="good_item">
                                        <Link to="/">
                                            <img src={hotSellImg} className="good_img"/>
                                        </Link>


                                        <div className="text_con">
                                            <div className="txt">博纳豪斯 棉麻马鞍皮沙发</div>
                                            <div className="price">¥16199</div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                            


                            <div className="banner_line">
                                <span id="longline"></span>
                            </div>
                        </div>
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </div>
        )
    }
}






export default HotSelling;