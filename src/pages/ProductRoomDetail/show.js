import React from "react";
import {Row, Col, message, Button} from "antd";
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
                // {
                //     id: 0,
                //     title: "设计搭配"
                // },
                {
                    id: 0,
                    title: "同类推荐"
                }
            ],
            goodId: 0,
            goodInfo: "",
            goodInfoFlag: false,
            cartArr: [],
            addCartFlag: true,  // 防止多次点击

            sameGoodArr: []
        }    
    }
    componentDidMount () {
        this.setGoodId()   
        //this.props.getGoodInfoFn() 
        //this.setGoodInfo()

        this.initFn()
        
        scrollTopFn()
        this.totalCartGoodCountFn()
    }
    initFn = ()=> {
        let cartArr = getStorageFn("cartArr") || [];

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
            this.getGoodInfoFn(id)
            this.getSameGoodFn()
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
        let token = getStorageFn("token");
        formData.append("api", "app.product.productDetails");    
        formData.append("accessId", token);      
        formData.append("storeId", 1);
        formData.append("storeType", 6);
        formData.append("productId", goodId);
        request({
            url: "/api/gw",         
            method: "POST",
            data: formData
        }).then((res)=> {
            let resData = res.data.data;
            console.log("resData goodInfo")
            console.log(resData)
            console.log("resData goodInfo")
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
        console.log("currentGoodFn setSelectGoodFn", currentGood)
        this.setState({
            currentGood: currentGood
        })
    }
    addCartFn = (count)=> {
        // console.log("add count")
        // console.log(count)
        // console.log("add count")


        let _this = this;
        let token = getStorageFn("token");
        if (!token) {
            message.error("未登录")
            return ;
        }
        let cartArr =  this.state.cartArr;
        
        // console.log("arr cartArr")
        // console.log(cartArr)
        // console.log("arr cartArr")
        let currentGood = this.state.currentGood;
        let addCartFlag = this.state.addCartFlag;
        if (!currentGood) {
            message.error("请选择商品")
            return ;
        }
        

        

        this.setState({
            addCartFlag: false
        })
        if (!addCartFlag) {
          
            return ;
        } 
        // console.log("currentGood----------start")
        // console.log(currentGood)
        // console.log("currentGood---------start")
        currentGood.goods_id = parseInt(this.state.goodId);
        currentGood.attribute_id = currentGood.cid;
 
        const arr = cartArr.filter(item=>item.goods_id == currentGood.goods_id && item.attribute_id == currentGood.attribute_id);        
        
        // console.log("arr----------filter")
        // console.log(arr)
        // console.log("arr----------filter")

       
        if (arr.length > 0) {

            cartArr.forEach((item, index)=>{
            
                if (item.goods_id == currentGood.goods_id && item.attribute_id == currentGood.attribute_id) {  
                    // item.goods_num += 1;
                    // console.log("currentGood item")
                    // console.log(item)
                    // console.log("currentGood item")
                    item.cid = currentGood.cid;
                    currentGood = item;
                }
            })
        } else {
            // currentGood.goods_num = 1;
            currentGood.selectFlag = false;
            // cartArr.push(currentGood)
        }

        // console.log("currentGood------end")
                 
                 
        // console.log(currentGood)
        // console.log("currentGood-----end")
       
        // setStorageFn("cartArr", cartArr)

        this.setState({
            // cartArr: cartArr,
            currentGood: currentGood
        }, function () {
            this.addCurrentGoodCartFn(count)
        })
    }
    // 当前的商品加入后台购物车
    addCurrentGoodCartFn (count) {

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
        formData.append("num",  count );
        formData.append("attributeId",  currentGood.attribute_id );
        request({
            url: "/api/gw",         
            method: "POST",
            data: formData
        }).then((res)=> {
            let code = res.data.code;
            if (code == 200) {
                message.success("加入成功")      
                _this.getCartInfoFn()
            } else {
                message.error(res.data.message);
            }
            _this.setState({
                addCartFlag: true
            })
        })
    }
    
    // 获后台购物车数据
    getCartInfoFn = ()=> {
        let _this = this;
        let formData = new FormData();
        let token = getStorageFn("token");
        let option = {"brandId":"","minPrice":"","maxPrice":""};
        formData.append("api", "app.cart.index");    
        formData.append("accessId", token);  
        formData.append("storeId", 1);
        formData.append("storeType", 6);
        request({
            url: "/api/gw",         
            method: "POST",    
            data: formData

        }).then((res)=> {
            let resData = res.data.data.data;
    

            // resData.forEach((item, index)=>{
            //     item.selectFlag = false;
            // })
            _this.setState({
                cartArr: resData
            
            },function () {
                _this.totalCartGoodCountFn()
            })
            setStorageFn("cartArr", resData)
        })
    }


    // 统计购物车数量
    totalCartGoodCountFn = ()=> {
        let _this = this;
        let formData = new FormData();
        let token = getStorageFn("token");
    
        // let option = {"brandId":"","minPrice":"","maxPrice":""};
        formData.append("api", "app.cart.index");    
        formData.append("accessId", token);  
        formData.append("storeId", 1);
        formData.append("storeType", 6);
        request({
            url: "/api/gw",         
            method: "POST",    
            data: formData

        }).then((res)=> {
            let resData = res.data.data.data;
            _this.setState({
                cartArr: resData
            
            },function () {
                let cartArr = _this.state.cartArr;
                let length = cartArr.length;
                _this.props.totalCartGoodCountFn(length)
            })
            setStorageFn("cartArr", resData)
        })  
    }
    getSameGoodFn = ()=> {
 
        let _this = this;    
        let formData = new FormData();
 
        formData.append("api", "app.product.listSimilarProduct");          
        formData.append("storeId", 1);
        formData.append("storeType", 6);
        formData.append("productId", this.state.goodId);
        request({
            url: "/api/gw",         
            method: "POST",
            data: formData
        }).then((res)=> {
            
            let resData = res.data.data.goodsList;
            let sameGoodArr = resData.splice(0, 6)
            _this.setState({
                sameGoodArr: sameGoodArr
            })
        })
 
    }
    render () {
        return (
            <div className="productroom_detail_page">
                <div>
               
                    <div className="content_common_width">
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

                            {/* {this.state.designCurrentIndex == 0 && <Design></Design>} */}
                            {this.state.designCurrentIndex == 0 &&  this.state.sameGoodArr.length>0 && <SameKind sameGoodArr={this.state.sameGoodArr}></SameKind>}
                        </div>
                    </div>
                    
                </div>
                
              
                {this.state.goodInfo && this.state.currentGood &&<GoodDetail goodDetail={this.state.goodInfo} currentGood={this.state.currentGood}></GoodDetail>}
                {this.props.state.commonState.showCartFlag && <SmallCart hideSmallCart={this.props.hideSmallCartFn} totalCartGoodCountFn={this.totalCartGoodCountFn}></SmallCart>}
            </div>
        )
    }
}


export default Show;