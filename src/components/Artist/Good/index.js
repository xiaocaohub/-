import React from "react";
import {Link} from "react-router-dom";
import GoodImg from "../../../assets/recomend_good1.png";

import "./index.css";

class Good extends React.Component {
    render () {
        return (
            <li className="good">
                <Link to="/">
                     
                     <img src={GoodImg} alt="" className="good_img"/>
                </Link>  
                <div className="text">深圳·深圳湾1号</div>
            </li>
        )
    }
}






export default Good;