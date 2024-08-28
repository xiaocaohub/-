import React from "react";
import {Link} from "react-router-dom";
import {Icon} from "antd";

import { HeartOutlined   } from '@ant-design/icons';
import "./index.css";
import goodImg from "../../../assets/recomend_good1.png";

import {setImgAutoHeightFn} from "../../../utils/imgAuto";
class Good extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            goodImgHeight: 0
        }
    }
    componentDidMount () {
        this.loadImgHeightFn()
    }
    loadImgHeightFn = ()=> {
        let recommendGood = document.getElementById("product_room_good");
        
        let goodImgHeight = setImgAutoHeightFn(recommendGood);
        this.setState({      
            goodImgHeight: goodImgHeight
        })
    }
    render () {
        return (
            
            <div className="series_good" id="product_room_good">
                <Link to={"/productroom/detail/" + this.props.itemData.id} className="good_img">
                    {/* <img src={this.props.itemData.coverImg} alt=""  style={{height: this.state.goodImgHeight + "px"}}/> */}
                    <img src={this.props.itemData.coverImg} alt=""  />
                </Link>
                <div className="text_con">
                    <div className="txt">{this.props.itemData.product_title}</div>
                    <div className="price"><span className="unit">￥</span>{parseInt(this.props.itemData.price)}</div>
            
            
                </div>
                <ul className="btn_group">
                    <li>       
                       <HeartOutlined className="collect_icon"/>加入收藏夹
                    
                    </li>

                    <li>进入系列集</li>
                </ul>
            </div>
        )
    }
}

export default Good;