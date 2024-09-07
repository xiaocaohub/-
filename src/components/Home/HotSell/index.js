import React from "react";
import {Row, Col} from "antd";
import {Link} from "react-router-dom";

import "./index.css";
import hostBig from "../../../assets/hot_sales_big.png";
import hostSmalla from "../../../assets/hot_sales_small1.png";
import hostSmallb from "../../../assets/hot_sales_small2.png";
class HotSell extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className="hot_sell_con">
       
                <div className="content_common_width">
                   
                   
                        <div className="hot_big">
                            <img src={hostBig} alt=""/>
                        </div>
                    
                        
                        <div className="hot_small_con" >
                            <div className="hot_small">
                                <img src={hostSmalla} alt=""/>
                                <Link to="/" className="search">点我搜索</Link>
                            </div>
                            <div className="hot_small">
                                <img src={hostSmallb} alt=""/>
                                <Link to="/" className="search">点我搜索</Link>
                            </div>
                        </div>
               
                </div>
            </div>
        )
    }
}

export default HotSell;