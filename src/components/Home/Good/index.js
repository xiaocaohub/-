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
                <Link to="/"><img src={goodImg} alt="" className="good_img"/></Link>
                <div className="good_bottom">
                    <div className="text_con">
                        <div className="txt">caesar taylor沙发</div>

                        <div className="price">
                            <span className="unit">¥ </span>2888
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