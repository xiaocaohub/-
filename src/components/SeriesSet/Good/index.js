import React from "react";
import {Link} from "react-router-dom";
import "./index.css";
 
import goodImg from "../../../assets/recomend_good1.png";
class Good extends React.Component {
    render () {
        return (
            <li className="good">
                <Link to="/">
                     
                     <img src={goodImg} alt="" className="good_img"/>
                </Link>

                <div className="title">万物系列</div>

                <div className="txt">产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍</div>

                <div className="total">在售商品125款</div>
            </li>
        )
    }
}



export default Good;