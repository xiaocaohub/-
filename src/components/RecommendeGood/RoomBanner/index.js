import React from "react";
import {Link} from "react-router-dom";
import bannerImg from "../../../assets/banner1.png";

import "./index.css";
class RoomBanner extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className="room_banner_con">
                <div className="top_title">餐厅 <span>/Dining area</span></div>
                <div className="room_banner">
                    <img src={bannerImg} className="banner_img"/>

                    <div className="text_con">
                        <div className="big_tit">餐厅空间</div>
                        <div className="txt">用餐 宴客 慢品烟火</div>
                        <Link to="/" className="show_more_btn">查看更多</Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default RoomBanner;