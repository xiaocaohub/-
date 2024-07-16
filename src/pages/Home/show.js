import React from "react";
import {Row, Col} from "antd";


import "./index.css";
import Header from "../../components/Header";
import BannerCon from "../../components/BannerCon";
import HotSell from "../../components/Home/HotSell";
import VedioBanner from "../../components/Home/VedioBanner";

import Good from "../../components/Home/Good";
class Show extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div>
                <Header></Header>
                
                <div className="main_content">

                    <BannerCon></BannerCon>
                    <HotSell></HotSell>

                    <div className="vedio_text_con">
                        <div className="small_title">Quality of life</div>
                        <div className="big_title">LUOCKOO HOME</div>
                        <div className="txt">品质生活，从细节开始<br/> 让每一处空间都有故事，每一款产品都有灵魂<br/> 打造温馨舒适的家，让生活更美好</div>
                    </div>

                    <VedioBanner></VedioBanner>                  
                    <div className="recommend_text_con">
                        <div className="txt">年轻态 轻生活</div>
                        <div className="title">NEW ARRIVALS</div>
                        <div className="big_title">新品推荐</div>
                    </div>


                    <div className="recommend_good_con">
                        <Row>
                            <Col span={3}></Col>
                            <Col span={18}>
                            
                                <ul className="recommend_good_list">
                                    <Good></Good>
                                    <Good></Good>
                                    <Good></Good>
                                    <Good></Good>
                                    <Good></Good>
                                    <Good></Good>
                                </ul>
                                <div className="more_btn">搜索更多</div>
                            </Col>
                            <Col span={3}></Col>
                        </Row>
                    </div>

                    <div className="hot_selling_con">
                        <Row>
                            <Col span={3}></Col>
                            <Col span={18}>
                                <div className="title_con">
                                    <div className="left"></div>
                                </div>
                            </Col>
                            <Col span={3}></Col>
                        </Row>
                    </div>
                </div>
                <div className="footer_con">footer</div>
            </div>
        )
    }
}

export default Show;