import React from "react";
import {Link} from "react-router-dom";
import goodImg from "../../../assets/recomend_good1.png";

import "./index.css";
class StyleGood extends React.Component {    
    constructor (props) {
        super(props)
    }
    render () {
        return (

            <div className="style_good">
                <Link to={"/productroom/detail/" + this.props.styleGood.id }>
                    <img src={this.props.styleGood.coverImg} alt="" className="good_img"/>
                </Link>
                <div className="good_bottom">
                    <div className="text_con">
                   
                        <div className="txt">{this.props.styleGood.product_title}</div>
                        <div className="price">
                            <span className="unit">¥ </span>{parseInt(this.props.styleGood.price)}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default StyleGood;