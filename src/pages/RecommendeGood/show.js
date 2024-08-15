import React from "react";
import {Row, Col} from "antd";
import RoomBanner from "../../components/RecommendeGood/RoomBanner";

import Good from "../../components/RecommendeGood/Good";
import banner1 from "../../assets/recommendeGood_banner.png";
import "./index.css";
import {getStorageFn} from "../../utils/localStorage";
import {getGoodInfoApi} from "../../api/RecommendeGood";
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
            ],



           
            roomBannerArr: [
                {
                    id: 0,
                    topTitle: "餐厅",

                    topTxt: "/Dining area",
                    imgSrc: require("../../assets/room_list_banner1.png")
                },
                {
                    id: 1,
                    topTitle: "客厅",
                    topTxt: "/LIVING ROOM",
                    imgSrc: require("../../assets/room_list_banner2.png")
                },
                {
                    id: 2,
                    
                    topTitle: "卧房",
                    topTxt: "/BEDROOM",
                    imgSrc: require("../../assets/room_list_banner3.png")
                }
            ],
            roomFirstArr: "",
            roomTwoArr: "",
            roomThreeArr: ""
        }
    }
    componentDidMount () {
        this.getGoodInfoFn()
        this.getGoodInfoTwoFn()
        this.getGoodInfoThreeFn()
    }
    getGoodInfoFn = ()=> {
        let formData = new FormData();
        let storeId = getStorageFn("storeId") || 1;
        let storeType = getStorageFn("storeType") || 6;
        let styleId = this.state.styleId;
        formData.append("api", "app.product.listProduct"); 
        formData.append("storeId", storeId);
        formData.append("storeType", storeType);
        formData.append("page", 1);
        formData.append("pageSize", 6);
        formData.append("productLabel", 102);
        formData.append("productClass", "-148-167-");
        getGoodInfoApi(formData).then((res)=>{
            let goodArr = res.data.data.goodsList;
            this.setState({
                roomFirstArr: goodArr
            })
        })
    }
    getGoodInfoTwoFn = ()=> {
        let formData = new FormData();
        let storeId = getStorageFn("storeId") || 1;
        let storeType = getStorageFn("storeType") || 6;
        let styleId = this.state.styleId;
        formData.append("api", "app.product.listProduct"); 
        formData.append("storeId", storeId);
        formData.append("storeType", storeType);
        formData.append("page", 1);
        formData.append("pageSize", 6);
        formData.append("productLabel", 102);
        formData.append("productClass", "-148-150-");
        getGoodInfoApi(formData).then((res)=>{
            console.log(res.data)
            let goodArr = res.data.data.goodsList;
            this.setState({
                roomTwoArr: goodArr
            })
        })
    }
    getGoodInfoThreeFn = ()=> {
        let formData = new FormData();
        let storeId = getStorageFn("storeId") || 1;
        let storeType = getStorageFn("storeType") || 6;
        let styleId = this.state.styleId;
        formData.append("api", "app.product.listProduct"); 
        formData.append("storeId", storeId);
        formData.append("storeType", storeType);
        formData.append("page", 1);
        formData.append("pageSize", 6);
        formData.append("productLabel", 102);


        formData.append("productClass", "-148-166-");
        getGoodInfoApi(formData).then((res)=>{
            let goodArr = res.data.data.goodsList;
            this.setState({
                roomThreeArr: goodArr
            })
        })
    }
    render () {
        return (
            <div className="recommende_good_con">
                <div className="banner">      
                    <img src={banner1} alt="" onClick={()=>{this.getGoodInfoFn()}}/>  
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
                        <div className="big_room_con">
                            <RoomBanner bannerData={this.state.roomBannerArr[0]}></RoomBanner>
                            <ul className="good_list">
                                {this.state.roomTwoArr && this.state.roomTwoArr.map((item,index)=> {
                                    
                                    return (<Good goodInfo={item} key={index}></Good>)
                                 })}
                            </ul>
                        </div>
                        
                        <div className="big_room_con">
                            <RoomBanner bannerData={this.state.roomBannerArr[1]}></RoomBanner>
                            <ul className="good_list">
                                {this.state.roomTwoArr && this.state.roomTwoArr.map((item,index)=> {
                                    
                                    return (<Good goodInfo={item} key={index}></Good>)
                                 })}
                            </ul>
                        </div>

                        <div className="big_room_con">
                            <RoomBanner bannerData={this.state.roomBannerArr[2]}></RoomBanner>
                            
                            <ul className="good_list">
                                {this.state.roomTwoArr && this.state.roomTwoArr.map((item,index)=> {
                                    
                                    return (<Good goodInfo={item} key={index}></Good>)
                                 })}
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