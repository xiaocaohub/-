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
            <Row className="hot_sell_con">
                <Col span={3}></Col>
                <Col span={18}>
                    

                    <Row>

                        <Col span={16} >
                            <div className="hot_big">
                               <img src={hostBig} alt=""/>
                            </div>
                        </Col>
                        
                        <Col span={8} >
                            <div className="hot_small">
                                <img src={hostSmalla} alt=""/>
                                <Link to="/" className="search">即可搜索</Link>
                            </div>
                            <div className="hot_small">
                                <img src={hostSmallb} alt=""/>
                                <Link to="/" className="search">即可搜索</Link>
                            </div>
                        </Col>
                    </Row>
                </Col>
                

                <Col span={3}></Col>
            </Row>
        )
    }
}

export default HotSell;