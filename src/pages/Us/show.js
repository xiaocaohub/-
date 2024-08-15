import React from "react";
import {Row, Col} from "antd";
import bannerImg from "../../assets/us_banner.png";

import "./index.css";
class Show extends React.Component {    
    render () {
        return (
            <div className="us_page_con">
                <img src={bannerImg} className="banner_img"/>
                <Row>
                    <Col span={3}></Col> 





                    <Col span={18}>
                        <div className="intro_text">
                            <div className="text_con">
                                <div className="title">珞珂是谁</div>

                                <div className="txt">
                                    <p> LUOCKOO | 珞珂家居创立于2014年, 坐落于深圳市龙岗区, 专注软体家具的研发、生产与销售, 是深圳新崛起的一线国潮家居品牌, 致力于提供更懂年轻人, 更符合国人审美, 更舒适有品的家居解决方案。用互联网技术全面赋能装企、家居从业者、设计师等提供产品、设计、成交、营销、管理等美学场景立体化解决方案和服务。</p>
                                    <p>【珞珂】意指美玉，代表着传承、坚持与追求传承中国文化与精神，做有态度有价值的中国制造坚持品质与匠心，做高质价比高舒适度的家居产品追求审美与创新，做更懂年轻人的国潮家居品牌</p>
                                    
                                </div>
                            </div>
                        </div>
                    </Col>
                  
                </Row>
            </div>
        )
    }
}




export default Show;