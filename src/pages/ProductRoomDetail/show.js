import React from "react";
import {Row, Col, message} from "antd";
import DetailInfo from "../../components/ProductRoomDetail/DetailInfo";

import Design from "../../components/ProductRoomDetail/Design";
import SameKind from "../../components/ProductRoomDetail/SameKind";
import GoodDetail from "../../components/ProductRoomDetail/GoodDetail";

import SmallCart from "../../components/SmallCart";
import ShowLoading from "../../components/Loading";
import "./index.css";
import request from "../../api/request";
import {setStorageFn, getStorageFn} from "../../utils/localStorage";
import {scrollTopFn} from "../../utils/imgAuto";
class Show extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            designCurrentIndex: 0,
            designSameNav: [
                {
                    id: 0,
                    title: "设计搭配"
                },
                {
                    id: 1,
                    title: "同类推荐"
                }
            ],
            goodId: 0,
            goodInfo: "",
            goodInfoFlag: false,
            cartArr: [],
            addCartFlag: true
        }    
    }
    componentDidMount () {

        this.setGoodId()   
        //this.props.getGoodInfoFn() 
        //this.setGoodInfo()
        this.initFn()
        

        scrollTopFn()
    }
    initFn = ()=> {
        let cartArr = getStorageFn("cartArr") || [];
        console.log("init cartArr")
        console.log(cartArr)
        console.log("init cartArr")
        this.setState({
            cartArr: cartArr
        })
    }
    setGoodId = ()=> {
        let id = this.props.match.params.id;
        let _this = this;

        this.setState({
            goodId: id
        }, function () {
            // _this.props.getGoodInfoFn(id)
            this.getGoodInfoFn(id)
        })
    } 

    // 设置商品详情
    setGoodInfo = ()=> {  
        let _this = this;
        let goodInfo = _this.props.productRoomDetailState.goodInfo;
        this.setState({
            goodInfo: _this.props.productRoomDetailState.goodInfo
        })
    }
    getGoodInfoFn = (goodId)=> {
        let _this = this;    
        let formData = new FormData();
        let option = {"brandId":"","minPrice":"","maxPrice":""};
        formData.append("api", "app.product.productDetails");          
        formData.append("storeId", 1);
        formData.append("storeType", 6);
        formData.append("productId", goodId);
        request({
            url: "/api/gw",         
            method: "POST",
            data: formData
        }).then((res)=> {
            let resData = res.data.data;
            // console.log("resData")
            // console.log(resData)
            // console.log("resData----------------")
            _this.setState({
                goodInfo: resData
            })
        })
    }
    selectSameFn = (index)=> {
        this.setState({
            designCurrentIndex: index 
        }) 
    }
    setSelectGoodFn = (currentGood)=> {
        console.log("currentGoodFn", currentGood)
        this.setState({
            currentGood: currentGood
        })
    }

    addCartFn = ()=> {
        let _this = this;
        let token = getStorageFn("token");
        if (!token) {
            message.error("未登录")

            return ;
        }
        // let cartArr = getStorageFn("cartArr") || this.state.cartArr;

        let cartArr =  this.state.cartArr;

        let currentGood = this.state.currentGood;
        let addCartFlag = this.state.addCartFlag;


        this.setState({
            addCartFlag: false
        })

        if (!addCartFlag) {
            return ;
        } 

        currentGood.goods_id = parseInt(this.state.goodId);
        currentGood.attribute_id = currentGood.cid;
    
    
        const arr = cartArr.filter(item=>item.goods_id == currentGood.goods_id && item.attribute_id == currentGood.attribute_id);
        if (arr.length > 0) {
            cartArr.forEach((item, index)=>{
              


                if (item.goods_id == currentGood.goods_id && item.attribute_id == currentGood.attribute_id) {  
                    item.goods_num += 1;
                    currentGood = item;
                }
            })
        } else {
            currentGood.goods_num = 1;

            currentGood.selectFlag = false;
            cartArr.push(currentGood)
        }
        setStorageFn("cartArr", cartArr)
        this.setState({
            cartArr: cartArr,
            currentGood: currentGood
        }, function () {
            
            


            // console.log("currentGood", currentGood)
           
            // console.log("cartArr")
            // console.log(cartArr)
            // console.log("cartArr")

            this.addCurrentGoodCartFn()
        })
    }
    // 当前的商品加入后台购物车

    addCurrentGoodCartFn () {
        let _this = this;
        let currentGood = this.state.currentGood;
        let formData = new FormData();
        let option = {"brandId":"","minPrice":"","maxPrice":""};
        
        let token = getStorageFn("token");
        formData.append("api", "app.cart.addCart");   
        formData.append("accessId", token); 
        formData.append("storeId", 1);
        formData.append("storeType", 6);
        formData.append("goodsId",  currentGood.goods_id );
        formData.append("num",  currentGood.goods_num );
        formData.append("attributeId",  currentGood.attribute_id );
    
        request({
            url: "/api/gw",         
            method: "POST",

            data: formData
        }).then((res)=> {
            let code = res.data.code;
            if (code == 200) {
                message.success("加入成功")
            } else {
                message.error(res.data.message);
            }
            _this.setState({
                addCartFlag: true
            })
        })
    }
    render () {
        return (
            <div className="productroom_detail_page">
                <Row>
                    <Col span={3}></Col>
                    <Col span={18}>
                        {this.state.goodInfo&&<DetailInfo goodDetail={this.state.goodInfo} setSelectGood={this.setSelectGoodFn} addCartFn={this.addCartFn}></DetailInfo>}
                        {this.state.goodInfoFlag&&<ShowLoading></ShowLoading>}
                        <div className="design_same_con">
                            <ul className="nav_list">          
                                {this.state.designSameNav.map((item, index)=> {
                                    return (<li className={this.state.designCurrentIndex == index?"on":""} onClick={()=>{this.selectSameFn(index)}} key={item.id}>
                                        {item.title}
                                    </li>)
                                })}
                            </ul>

                            {this.state.designCurrentIndex == 0 && <Design></Design>}
                            {this.state.designCurrentIndex == 1 && <SameKind></SameKind>}
                        </div>
                    </Col>
                    
                    <Col span={3}></Col>
                </Row>
                
                {this.state.goodInfo && this.state.currentGood &&<GoodDetail goodDetail={this.state.goodInfo} currentGood={this.state.currentGood}></GoodDetail>}
                {this.props.state.commonState.showCartFlag && <SmallCart hideSmallCart={this.props.hideSmallCartFn}></SmallCart>}
            </div>
        )
    }
}


export default Show;