import React from "react";
import {Link} from "react-router-dom";
import {Icon} from "antd";

import { HeartOutlined   } from '@ant-design/icons';
import "./index.css";
import goodImg from "../../../assets/recomend_good1.png";
class Good extends React.Component {
    render () {
        return (
            <div className="good">
                <Link to="/">
                    <img src={goodImg} alt="" className="good_img"/>
                </Link>
                <div className="text_con">
                    <div className="txt">现代极简头层牛皮沙发不含抱枕现代极简头层牛皮沙发不含抱枕现代极简头层牛皮沙发不含抱枕</div>
                    
                    <div className="price"><span className="unit">￥</span>99999</div>
                </div>
                <ul className="btn_group">
                    <li>
                       
                       <HeartOutlined className="collect_icon"/>加入收藏夹
                    </li>
                    <li>进入系列/灰</li>
                </ul>
            </div>
        )
    }
}






export default Good;