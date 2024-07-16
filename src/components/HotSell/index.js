import React from "react";
import {Link} from "react-router-dom";
import {Carousel } from "antd";

import "./index.css";
import hotSell from "../../assets/hot_sell_1.png"
class HotSell extends React.Component {
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
    onChange = (index)=> {
        console.log("index", index)
        let longLine = document.getElementById("longline");
        longLine.style.cssText="width:"+(index+1)*25+"%;" 
    }
    render () {
        return (  
            <div className="hot_selling">
                <div className="big_title_con">
                    <div className="left">
                        <div className="small_title">热销爆款</div>
                        
                        <div className="big_title">HOT SELLING</div>
                        <div className="line"></div>

                        <div className="txt">Home is a warm harbor. Our furniture is the most comfortable embrace in the harbor. Let quality of life start with choosing us</div>
                    </div>
                    <Link to="/login" className="search_more_btn">搜索更多</Link>
                </div>

                <div className="hot_banner_con">
                
                    <Carousel afterChange={this.onChange} dots={false} ref={dom=>{this.img=dom }}>
                        <div>
                            <ul className="banner_list">
                                <li>
                                    <Link to="/login"><img src={hotSell}/></Link>
                                    <div className="intro">
                                        <span className="txt">博纳豪斯 棉麻马鞍皮沙发</span>

                                        <span className="price">¥16199</span>    
                                    </div>
                                </li>

                                <li>
                                    <Link to="/login"><img src={hotSell}/></Link>
                                    <div className="intro">
                                        <span className="txt">博纳豪斯 棉麻马鞍皮沙发</span>
                                        <span className="price">¥16199</span>    
                                    </div>
                                </li>

                                <li>
                                    <Link to="/login"><img src={hotSell}/></Link>
                                    <div className="intro">
                                        <span className="txt">博纳豪斯 棉麻马鞍皮沙发</span>

                                        <span className="price">¥16199</span>    
                                    </div>
                                </li>

                                <li>
                                    <Link to="/login"><img src={hotSell}/></Link>
                                    <div className="intro">
                                        <span className="txt">博纳豪斯 棉麻马鞍皮沙发</span>

                                        <span className="price">¥16199</span>    
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="banner_list">
                                <li>
                                    <Link to="/login"><img src={hotSell}/></Link>
                                    <div className="intro">
                                        <span className="txt">博纳豪斯 棉麻马鞍皮沙发</span>

                                        <span className="price">¥16199</span>    
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>

                            <ul className="banner_list">
                                <li>
                                    <Link to="/login"><img src={hotSell}/></Link>
                                    <div className="intro">
                                        <span className="txt">博纳豪斯 棉麻马鞍皮沙发</span>

                                        <span className="price">¥16199</span>    
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="banner_list">

                                <li>
                                    <Link to="/login"><img src={hotSell}/></Link>
                                    <div className="intro">
                                        <span className="txt">博纳豪斯 棉麻马鞍皮沙发</span>
                                        <span className="price">¥16199</span>    
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </Carousel>

                    <div className="left_btn" onClick={this.prev}></div>
                    <div className="right_btn" onClick={this.next}></div>

                    <div className="longline">
                        <span id="longline"></span>
                    </div>
                </div>

                
            </div>
        )
    }
}
export default HotSell;