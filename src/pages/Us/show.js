import React from "react";
import {Row, Col} from "antd";
import bannerImg from "../../assets/banner1.png";

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
                                
                            </div>
                            
                        </div>
                    </Col>
                  
                </Row>
            </div>
        )
    }
}




export default Show;