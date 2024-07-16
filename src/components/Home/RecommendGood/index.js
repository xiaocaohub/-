import React from "react";
import {Link} from "react-router-dom";
import "./index.css";

import recommendGood from "../../../assets/home_tuijian_1.png";

import recommendGooda from "../../../assets/recomend_good1.png";
class RecommendGood extends React.Component {

    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className="recommend_good">
                <Link to="/">
                    <img src={recommendGooda} className="good_img"/>
                </Link>
                <div className="intro_con">
                    <div className="left">
                        <p className="title">CAESAR TAYLOR沙发 </p>
                        <div className="price"><span className="unit">¥</span> 2888</div>
                    </div>
                    <div className="right"></div>
                    <div className="line"><span></span></div>
                </div>
            </div>
        )
    }
}



export default RecommendGood;