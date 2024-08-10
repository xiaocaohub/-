import React from "react";
import {Link} from "react-router-dom";
import {Icon} from "antd";

import { HeartOutlined   } from '@ant-design/icons';
import "./index.css";
import goodImg from "../../../assets/recomend_good1.png";

class Good extends React.Component {
    constructor (props) {
        super(props)
 
    }
    render () {
        return (
            <div className="series_good">

                <Link to={"/productroom/detail/" + this.props.itemData.id} className="good_img">
                    <img src={this.props.itemData.coverImg} alt="" className="good_img"/>
                </Link>
                <div className="text_con">
                    <div className="txt">{this.props.itemData.product_title}</div>
                    
                    <div className="price"><span className="unit">￥</span>{this.props.itemData.price}</div>
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