import React from "react";
import {Link} from "react-router-dom";
import "./index.css";
import goodImg from "../../../assets/home_tuijian_1.png";

import bigGoodImg from "../../../assets/recomend_good1.png";
class Good extends React.Component {

    constructor (props) {
        super(props)
    }
    render () {
        return (
            <li className="recommende_good">
                <Link to={this.props.goodInfo?("/productroom/detail/" + this.props.goodInfo.id):"/"} className="img">
               
                    <img src={this.props.goodInfo?this.props.goodInfo.coverImg:""} alt="" className="small_img"/>
                    <img src={bigGoodImg} alt="" className="big_img"/>
                </Link>
                <div className="text_bottom">
                    <div className="title">{this.props.goodInfo?this.props.goodInfo.product_title:""}</div>
                    <div className="price">
                        <span>￥</span>{this.props.goodInfo?this.props.goodInfo.price:""}
                    </div>
                    <Link to={this.props.goodInfo?("/productroom/detail/" + this.props.goodInfo.id):"/"} className="but_btn">GO</Link>
 
                </div>
            </li>
        )
    }
}


export default Good;