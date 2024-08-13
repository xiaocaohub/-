import React from "react";
import {Row, Col} from "antd";
import "./index.css";

import logoFooter from "../../assets/footer_logo.png";
import iconA from "../../assets/footer_map.png";
class Footer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            title: "粤ICP备2024161668号-1",
            iconArr: [
                {
                    id: 0,
                    imgSrc: require("../../assets/footer_icon1.png"),

                    txt: "国潮美学新生力"
                },
                {
                    id: 1,
                    imgSrc: require("../../assets/footer_icon1.png"),

                    txt: "高颜高品质"
                },
                {
                    id: 2,
                    imgSrc: require("../../assets/footer_icon2.png"),

                    txt: "色尺面百变定制"
                },
                {
                    id: 3,
                    imgSrc: require("../../assets/footer_icon3.png"),
                    txt: "极致售后保障"
                }
            ],



            infoArr: [
                {
                    id: 0,
                    imgSrc: require("../../assets/footer_map.png"),
                    
                    txt: "广东省深圳市龙岗区黄屋路10号"
                },
                {
                    id: 1,
                    imgSrc: require("../../assets/footer_phone.png"),
                    
                    txt: "0755-23906666"
                },
                {
                    id: 2,
                    imgSrc: require("../../assets/footer_clock.png"),
                    
                    txt: "09:00～18:30"
                }
            ],
            codeArr: [
                {
                    id: 0,
                    imgSrc: require("../../assets/footer_code1.png"),
                    txt: "微信小程序"
                },
                {
                    id: 1,
                    imgSrc: require("../../assets/footer_code1.png"),
                    txt: "抖音"
                },
                {
                    id: 2,
                    imgSrc: require("../../assets/footer_code1.png"),
                    txt: "小红书"
                },
                {
                    id: 3,
                    imgSrc: require("../../assets/footer_code1.png"),
                    txt: "微信公众号"
                }
            ]
        }
    }
    render () {
        return (
            <div className="footer_con">
                <Row>

                    <Col span={3}></Col>
                    <Col span={18} className="footer_content">
                        <div className="left">
                            <div className="logo_con">

                                <img src={logoFooter} alt="" className="logo_footer"/>
                                <div className="tit">为舒适而生</div>
                            </div>

                            <ul className="icon_list">
                                {this.state.iconArr.map((item)=>{
                                    return (

                                        <li key={item.id}>
                                            <img src={item.imgSrc} alt="" className="icon"/>
        
                                            <span>{item.txt}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <ul className="info_list">
                            {this.state.infoArr.map((item)=> {
                                return ( 
                                    <li key={item.id}>
                                        <img src={item.imgSrc} alt=""/>
                                        <span>{item.txt}</span>
                                    </li>
                                )
                            })}
                        </ul>

                        <ul className="code_list">
                            {this.state.codeArr.map((item)=> {
                                return (
                                    <li key={item.id}>
                                        <img src={item.imgSrc} alt=""/>
                                        <div className="txt">{item.txt}</div>
                                    </li>
                                )
                            })}
                             
                           
                        </ul>
                    </Col>
                    <Col span={3}></Col>
                </Row>
                <Row>
                    <Col span={24} className="copy">粤ICP备2024161668号-1</Col>


                </Row>
            </div>
        )
    }
}









export default Footer;