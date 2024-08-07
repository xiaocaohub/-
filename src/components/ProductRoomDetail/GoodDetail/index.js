import React from "react";
import {Row, Col} from "antd";
import "./index.css";

import goodImg from "../../../assets/recomend_good1.png";
class GoodDetail extends React.Component {
    constructor (props) {
        
        super(props)
        this.state = {

            imgArr: [
                goodImg, goodImg, goodImg, goodImg, goodImg, goodImg
            ]
        }
    }
    render () {
        return (
            <Row className="good_edit_detail">
                <Col span={3}></Col>
               
                <Col span={18} className="content">
                    <div className="left"></div>
                    <div className="right">

                        <div className="title_top">

                            <span className="tit">实物拍摄</span>
                            <span className="show_btn">收起</span>
                        </div>

                        <div className="img_list">
                            {this.state.imgArr.map((item, index)=> {
                                return <img src={item} alt="" className="img" key={index}/>
                            })}                            
                        </div>



                        <div className="text_con">
                            <div className="tit">商品信息</div>
                            <ul className="txt_list">
                                <li><span className="txt">分类:</span>  沙发</li>

                                <li><span className="txt">风格:</span> 沙发 </li>
                                <li><span className="txt">型号:</span>  沙发 </li>
                                <li><span className="txt">软硬度:</span>  沙发 </li>
                                <li><span className="txt">产品规格:</span>  沙发 </li>
                                <li><span className="txt">三人位:</span>  沙发 </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col span={3}></Col>
            </Row>
        )
    }
}


export default GoodDetail;