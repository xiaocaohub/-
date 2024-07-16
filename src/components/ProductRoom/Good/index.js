import React from "react";
import {Link} from "react-router-dom";
import GoodImg from "../../../assets/recomend_good1.png";
import "./index.css";

class Good extends React.Component {
    render () {
        return (
            <li>
                <Link to="/">
                    <img  src={GoodImg} className="good_img"/>
                </Link>






                <div className="text_con">
                  <div className="txt">现代极简头层牛皮沙发不含抱枕现代极简头层牛皮沙发不含抱枕现代极简头层牛皮沙发不含抱枕</div>
                  <div className="price"><span className="unit">￥</span>99999</div>
                </div>
            </li>
        )
    }
}


export default Good;