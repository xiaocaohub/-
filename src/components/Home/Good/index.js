import React from "react";
import {Link} from "react-router-dom";
import goodImg from "../../../assets/recomend_good1.png";

import "./index.css";
class Good extends React.Component {    
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className="recommend_good">
                <Link to={"/productroom/detail/" + this.props.goodInfo.id}><img src={this.props.goodInfo.coverImg} alt="" className="good_img"/></Link>
                <div className="good_bottom">
                    <div className="text_con">
                        
                        <div className="txt">{this.props.goodInfo.product_title}</div>
                        <div className="price">
                            <span className="unit">¥ </span>{parseInt(this.props.goodInfo.price)}
                        </div>
                    </div>

                    <div className="cart_btn"></div>
                </div>
                <div className="line">
                    <span></span>
                </div>
            </div>
        )
    }
}

export default Good;