import React from "react";
import {Row, Col, Pagination } from "antd";
import Good from "../../components/SeriesSetList/Good";

import banner from "../../assets/seriesset_list.png";
import "./index.css";
class Show extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className="series_list_page">
                <Row>
                    <Col span={3}></Col>

                    <Col span={18}>
                        <div className="banner_con">
                            <img src={banner} alt="" className="banner"/>
                            <div className="banner_text">
                                <div className="title">原创系列</div>
                                <div className="txt">国潮元素/流行趋势/中国制造</div>
                                <div className="btn">在售商品998款</div>
                            </div>
                        </div>
                        
                        <div className="nav_con"></div>

                        <div className="good_list">
                            
                            <Good></Good>
                            <Good></Good>
                            <Good></Good>
                            <Good></Good>
                            <Good></Good>
                            <Good></Good>
                        </div>


                        <Pagination showQuickJumper defaultCurrent={2} total={500} className="page"/>
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </div>
        )
    }
}



export default Show;