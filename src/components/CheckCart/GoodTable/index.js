import React from "react";
import {Link} from "react-router-dom";
import {Input} from "antd";

import "./index.css";
import goodImg from "../../../assets/recomend_good1.png";
class GoodTable extends React.Component {
    render () {
        return (
            <div className="good_table">
                <ul className="header_top">
                    <li className="select"></li>
                    <li className="info">商品信息</li>
                    <li className="good_code">商品编码</li>
                    <li className="vol">体积(m³)</li>

                    <li className="price">供货单价(元)</li>
                    <li className="count">数量</li>
                    <li className="sub_total">小计(元)</li>
                </ul>

                <ul className="good_list">
                    <li>
                        <div className="select"></div>
                        <div className="info">
                            <Link to="/" className="good_img">
                                <img src={goodImg} alt=""/>
                            </Link>
                            <div className="intro">
                                <div className="txt">现代风格 时尚简约休闲款 头层牛皮床 【不支持改色】现代风格 时尚简约休闲款 头层牛皮床 现代风格 时尚简约休闲款 头层牛皮床 现代风格 时尚简约休闲款 头层牛皮床 </div>
                                <div className="size">米白色 1.5x2.0米-1630*2180*1100MM 现代风格 时尚简约休闲款 头层牛皮床 现代风格 时尚简约休闲款 头层牛皮床 现代风格 时尚简约休闲款 头层牛皮床 现代风格 时尚简约休闲款 头层牛皮床 </div>
                            </div>
                        </div>
                        <div className="good_code">J-CMSJ-CMSJ-BC5961-13CZ-1</div>
                        <div className="vol">100</div>
                        <div className="price">10000.00</div>
                        <div className="count_con">100</div>


                        <div className="sub_total">10000.00</div>
                    </li>
                   
                    <li>
                        
                        <div className="select"></div>
                        <div className="info">
                            <Link to="/" className="good_img">
                                <img src={goodImg} alt=""/>
                            </Link>
                            <div className="intro">
                                <div className="txt">现代风格 时尚简约休闲款 头层牛皮床 【不支持改色】现代风格 时尚简约休闲款 头层牛皮床 现代风格 时尚简约休闲款 头层牛皮床 现代风格 时尚简约休闲款 头层牛皮床 </div>
                                <div className="size">米白色 1.5x2.0米-1630*2180*1100MM 现代风格 时尚简约休闲款 头层牛皮床 现代风格 时尚简约休闲款 头层牛皮床 现代风格 时尚简约休闲款 头层牛皮床 现代风格 时尚简约休闲款 头层牛皮床 </div>
                            </div>
                        </div>
                        <div className="good_code">J-CMSJ-CMSJ-BC5961-13CZ-1</div>
                        <div className="vol">100</div>
                        <div className="price">10000.00</div>
                        <div className="count_con">100</div>
                        <div className="sub_total">10000.00</div>
                    </li>
                </ul>
            </div>
        )
    }
}




export default GoodTable;