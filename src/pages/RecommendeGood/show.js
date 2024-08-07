import React from "react";
import {Row, Col} from "antd";
import RoomBanner from "../../components/RecommendeGood/RoomBanner";

import Good from "../../components/RecommendeGood/Good";
import banner1 from "../../assets/recommendeGood_banner.png";
import roomImg from "../../assets/hot_sales_small1.png";
import "./index.css";

class Show extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            roomList: [
                {
                    id: 0,

                    imgSrc: require("../../assets/room_list_1.png"),
                    title: "餐厅区",
                    txt: "LIVING ROOM AREA"
                },
                {

                    id: 1,
                    imgSrc: require("../../assets/room_list_2.png"),
                    title: "客厅区",
                    txt: "BEDROOM AREA"
                },
                {
                    id: 2,

                    imgSrc: require("../../assets/room_list_3.png"),
                    title: "卧房区",
                    txt: "DINING AREA"
                }
            ]
        }
    }

    render () {
        return (
            <div className="recommende_good_con">
                <div className="banner">
                  
                    <img src={banner1} alt=""/>  
                </div>

                <Row className="room_list_con">
                    <Col span={3}></Col>
                    <Col span={18}>
                        <ul className="room_list">
                            {this.state.roomList.map((item,index)=>{
                                return (
                                    <li key={item.id}>
                                        <img src={item.imgSrc} alt="" className="room_img"/>
                                        {/* <div className="text_con">
                                            <div className="title">{item.title}</div>
                                            <div className="txt">{item.txt}</div>
                                        </div> */}
                                    </li>
                                )
                            })}
                        </ul>
                    </Col>
                    <Col span={3}></Col>
                </Row>

                <Row>
                    <Col span={3}></Col>
                    <Col span={18} >
                        <div className="big_room_com">
                            <RoomBanner></RoomBanner>
                            <ul className="good_list">
                                <Good></Good>
                                <Good></Good>
                                <Good></Good>
                                <Good></Good>
                                <Good></Good>
                                <Good></Good>
                            </ul>
                        </div>
                        
                        <div className="big_room_com">
                            <RoomBanner></RoomBanner>
                            <ul className="good_list">
                                <Good></Good>
                                <Good></Good>
                                <Good></Good>
                                <Good></Good>
                                <Good></Good>
                                <Good></Good>
                            </ul>
                        </div>

                        <div className="big_room_com">
                            <RoomBanner></RoomBanner>
                            <ul className="good_list">
                                <Good></Good>
                                <Good></Good>
                                <Good></Good>
                                <Good></Good>
                                <Good></Good>
                                <Good></Good>
                            </ul>
                        </div>
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </div>
        )
    }
}

export default Show;