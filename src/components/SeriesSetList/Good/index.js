import React from "react";
import {Link} from "react-router-dom";
import {Icon} from "antd";

import { HeartOutlined   } from '@ant-design/icons';
import "./index.css";
import goodImg from "../../../assets/recomend_good1.png";

class Good extends React.Component {

    constructor (props) {
        super(props)
        console.log("props")

        console.log(props)

        console.log("props")
    }
    render () {
        return (
            <div className="series_good">
                <Link to="/">
                    <img src={goodImg} alt="" className="good_img"/>
                </Link>
                <div className="text_con">
                    <div className="txt">product_title</div>
                    
                    <div className="price"><span className="unit">￥</span>price</div>
                </div>
                <ul className="btn_group">
                    <li>
                       
                       <HeartOutlined className="collect_icon"/>加入收藏夹
                    </li>
                    <li>进入系列集</li>
                </ul>
            </div>
        )
    }
}






export default Good;