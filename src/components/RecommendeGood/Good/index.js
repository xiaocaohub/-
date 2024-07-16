import React from "react";
import {Link} from "react-router-dom";
import "./index.css";
import goodImg from "../../../assets/home_tuijian_1.png";

import bigGoodImg from "../../../assets/recomend_good1.png";
class Good extends React.Component {

    render () {
        return (
            <li className="recommende_good">
                <Link to="/" className="img">
                    <img src={goodImg} alt="" className="small_img"/>
                    <img src={bigGoodImg} alt="" className="big_img"/>
                </Link>
                <div className="text_bottom">
                    <div className="title">现代极简头层牛皮沙发不含抱枕</div>
                    <div className="price">
                        <span>￥</span>99999
                    </div>
                    <div className="but_btn">GO</div>
                </div>
            </li>
        )
    }
}


export default Good;