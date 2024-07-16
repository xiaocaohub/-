import React from "react";
import Header from "../../components/Header";
import {Row, Col} from "antd";

import Nav from "../../components/SeriesSet/Nav";
import "./index.css";
import bannerImg from "../../assets/banner1.png";

import Good from "../../components/SeriesSet/Good";
class Show extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div>
                <Header></Header>
                <Row className="series_con">
                    <Col span={3}></Col>



                    <Col span={18}>
                        <div className="banner_con">
                            <img src={bannerImg} alt="" className="banner_img"/>
                            <div className="text_con">
                                <div className="title">A MASIVE PRODUCT SUPPLY SYSTEM</div>
                                <div className="txt">大而全的产品供应体系</div>
                            </div>
                        </div>

                        <div className="series_list_con">

                            <Nav></Nav>
                            <ul className="good_list">
                                <Good></Good>
                                <Good></Good>


                                <Good></Good>
                                <Good></Good>
                                <Good></Good>
                                <Good></Good>
                            </ul>
                            
                        </div>
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </div>
        )
    }
}


export default Show;