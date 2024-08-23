import React from "react";
import {Link} from "react-router-dom";
import "./index.css";
 
import goodImg from "../../../assets/recomend_good1.png";
class Good extends React.Component {
    constructor (props) {
        super(props)
        // console.log("item props")

        // console.log(props)
        // console.log("item props")
    }
    render () {
        return (

            <li className="good">
            
                <Link to={ "/series/list/" + this.props.goodInfo.brand_id } >         
                    <img src={this.props.goodInfo.brand_image} alt="" className="good_img"/>
                </Link>

                <div className="title">{this.props.goodInfo.brand_name}</div>
                <div className="txt">{this.props.goodInfo.brand_introduce}</div>
                <div className="total">在售商品 { this.props.goodInfo.goodsCount} 款</div>
            </li>
        )
    }
}



export default Good;