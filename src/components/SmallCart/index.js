import React from "react";
import {Input, Modal, message} from "antd";
import {Link} from "react-router-dom";

import "./index.css";

import imgGood from "../../assets/recomend_good1.png";
import {setStorageFn, getStorageFn} from "../../utils/localStorage";
import {setImgAutoHeightFn} from "../../utils/imgAuto";
import request from "../../api/request";
import Empty from "../Empty";
class CartSmall extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            cartArr: [],

            selectAllFlag: false,
            totalMoney: 0,
            setImgHeight: 0
        }
    }
    componentDidMount () {
         //this.initFn()
        this.getCartInfoFn()
    }

    initFn = ()=> {
        // let cartArr = getStorageFn("cartArr") || [];
        // this.setState({
        //     cartArr: cartArr
        // }, function () {
        //     if (cartArr.length>0) {
        //         this.setImgHeightFn()
        //     }
        //     this.totalAll()
        // })



        let cartArr = this.state.cartArr;
        if (cartArr.length>0) {
            this.setImgHeightFn()
        }
    }


    setImgHeightFn = ()=> {
        let img = document.querySelectorAll(".info_con .img")[0];
        let setImgHeight = setImgAutoHeightFn(img);
        this.setState({
            setImgHeight: setImgHeight
        })
    }
    selectGoodFn = (item, index)=> {
        let cartArr = this.state.cartArr;

        item.selectFlag = !item.selectFlag;
        cartArr[index] = item;
        setStorageFn("cartArr", cartArr)
        
        this.selectGoodRequestFn(item.id)
        this.setState({
            cartArr: cartArr
        }, function () {
            this.totalAll()
        })
    }
    selectGoodRequestFn = (selectId)=> {
        let _this = this; 
        let formData = new FormData();
        let token = getStorageFn("token");
        selectId = selectId + "";
        formData.append("api", "app.cart.checkedCart");
        formData.append("accessId", token);
        formData.append("storeId", 1);
        formData.append("storeType", 6);
        formData.append("cartIds", selectId)
        request({
            url: "/api/gw",         
            method: "POST",    
            data: formData
        }).then((res)=> {
            console.log("slect")
            console.log(res.data)
            if (res.data) {

                
            }
            // if (res.data.data) {
            //    message.success("删除成功")
            //    _this.getCartInfoFn()

            // } else {
            //     message.error(res.data.message)
            // }
        })
    }
    totalAll = ()=> {
        let cartArr = this.state.cartArr;
        let flag = true;

        let totalMoney = 0;
        if (cartArr.length>0) {
            cartArr.forEach((item,index)=> {
                if (!item.selectFlag) {
                    flag = false;
                }
                if (item.selectFlag) {
                    totalMoney += item.price * item.goods_num;
                }
            })
        } else {

            flag = false;
            totalMoney = 0;
        }
        this.setState({
            selectAllFlag: flag,
            totalMoney: totalMoney
        })
    }
    selectAllFn = ()=> { 
        let cartArr = this.state.cartArr;
        let selectAllFlag = !this.state.selectAllFlag;
        
        cartArr.forEach((item,index)=> {
            item.selectFlag = selectAllFlag ;
        })
     
        this.setState({
            cartArr: cartArr,
            selectAllFlag: selectAllFlag
        })
    }

    reduceFn = (item, index)=> {
      
    
        let cartArr = this.state.cartArr; 
        if (item.goods_num > 1) {
            cartArr[index].goods_num = item.goods_num - 1;
        }

        this.changeGoodCountFn(cartArr[index])
        
        this.setState({ 
            cartArr: cartArr
        }, function () {
            this.totalAll()
        })
    }
    addFn = (item, index)=> {
        let cartArr = this.state.cartArr;
        cartArr[index].goods_num = item.goods_num + 1;

        this.changeGoodCountFn(cartArr[index])
        this.setState({
            cartArr: cartArr
        }, function () {
            this.totalAll()
        })
    }
    changeGoodCountFn = (selectGood)=> {   
        console.log("selectGood")
     
        console.log(selectGood) 
        let _this = this; 
        let formData = new FormData();
        let token = getStorageFn("token");
        let goodsJson = [{"num": selectGood.goods_num,"cart_id":selectGood.id}]
        formData.append("api", "app.cart.updateCart");
        formData.append("accessId", token);
        formData.append("storeId", 1);
        formData.append("storeType", 6);
        // formData.append("cartIds", "")
        formData.append("goodsJson", JSON.stringify(goodsJson))
        request({
            url: "/api/gw",         
            method: "POST",    
            data: formData
        }).then((res)=> {
            // console.log(res.data)
        })
    }
    putCountFn = (e, item, index)=> {
        let value = e.target.value;
        item.goods_num = value;
        let cartArr = this.state.cartArr;
        cartArr[index] = item;
        this.setState({
            cartArr: cartArr
        })
    }
    blurGoodCountFn = (goodItem)=> {
        // console.log("blurGoodCountFn goodItem")
        // console.log(goodItem)
        // console.log("blurGoodCountFn goodItem")
        this.changeGoodCountFn(goodItem)
    }
    deleteGoodConfirmFn = (item, index)=> {
        let _this = this;
        let cartArr = this.state.cartArr;
        let selectAllFlag = this.state.selectAllFlag;
        let deleteId = item.id;
        Modal.confirm({
            title: "温馨提示",
            content: "确认删除吗?",
            cancelText: "取消",
            okText: "确认",
            onOk: function () {
                _this.deleteGoodFn(deleteId)
            }
        })
    }
    deleteGoodFn = (deleteId)=> {   
        let _this = this; 
        let formData = new FormData();
        let token = getStorageFn("token");
        formData.append("api", "app.cart.delCart");
        formData.append("accessId", token);
        formData.append("storeId", 1);
        formData.append("storeType", 6);
        formData.append("cartIds", deleteId)


        request({
            url: "/api/gw",         
            method: "POST",    
            data: formData
        }).then((res)=> {
            // console.log(res.data)
            if (res.data.data) {
               message.success("删除成功")
               _this.getCartInfoFn()

            } else {
        
        
                message.error(res.data.message)
            }
        })
    }

    deleteSelectAllFn = ()=> {
    
        let _this = this;
        let cartArr = this.state.cartArr;
        let length = cartArr.length;
        
        if (length > 0) {
            let selectCount = 0;
            cartArr.forEach((item)=> {
                if (item.selectFlag) {
                    selectCount += 1;
                }
            })

            if (selectCount > 0) {

                Modal.confirm({
                    title: "温馨提示",
                    content: "确认删除吗?",
                    cancelText: "取消",
                    okText: "确认",
                    onOk: function () {
                        let deleteIds = "";
                        for (let i=length-1; i>=0; i--) {
                            if (cartArr[i].selectFlag) {                        
                                deleteIds += cartArr[i].id + ",";
                            }
                        } 
                        _this.deleteGoodFn(deleteIds)
                    }
                })
            }
        }
    }
    // 获后台购物车数据
    getCartInfoFn = ()=> {
        let _this = this;
        let formData = new FormData();
        let token = getStorageFn("token");
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
            resData.forEach((item, index)=>{
                item.selectFlag = item.checked;
            })
            _this.setState({
                cartArr: resData
            }, function () {
                _this.totalAll()
                _this.initFn()
                // console.log("delete ----------------delete")
                _this.props.totalCartGoodCountFn()
            })
            setStorageFn("cartArr", resData)
        })
    }
    render () {
        return (
            <div className="show_small_cart">
                <div className="shadow"></div>    
                <div className="cart_small_con">
                    <div className="top_title">
                        <span className="title" onClick={this.setImgHeightFn}>购物车商品</span>
                        <span className="close" onClick={this.props.hideSmallCart}>继续购物</span>
                    </div>    
                    <div className="good_list_con">
                        <ul className="table_title">
                            <li className="select_con"></li>
                            <li className="info_con">商品信息</li>
                            <li className="price">单价(元)</li>


                            <li className="count_con">数量</li>
                            <li className="sub_total">金额(元)</li>
                            <li className="operate">操作</li>
                        </ul>

                        <ul className="good_list">
                            {
                                this.state.cartArr.length>0 && this.state.cartArr.map((item, index)=> {
                                    return (
                                        <li key={index}> 
                                            <div className="select_con">
                                                <div className={item.selectFlag?"select on":"select"} onClick={()=>{this.selectGoodFn(item, index)}}></div>
                                            </div>
                                            <div className="info_con">
                                                
                                                <div className="img" style={{height: this.state.setImgHeight + "px"}}>
                                                    <img src={item.imgurl} alt=""/>  
                                                </div>

                                                <div className="info">
                                                    <div className="txt"> { item.product_title } </div>
                                                    <div className="tit">{ item.skuName }</div>
                                                </div>
                                            </div>
            
                                            <div className="price">{ item.price }</div>
                                            <div className="count_con">
                                                    <div className="btn reduce" onClick={()=>{this.reduceFn(item, index)}}>-</div>
                                                    <Input className="count" value={item.goods_num} onChange={(e)=> {this.putCountFn(e, item, index)}} onBlur={()=>{this.blurGoodCountFn(item)}}/>
                                                    <div className="btn" onClick={()=>{this.addFn(item, index)}}>+</div>      
                                            </div>
                                            <div className="sub_total">{ item.price * item.goods_num }</div>
                                            <div className="operate_con">
                                                <div className="delete" onClick={()=>{this.deleteGoodConfirmFn(item, index)}}></div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        {this.state.cartArr.length == 0 && <Empty></Empty>}
                    </div>    

                    <div className="total_con">
                        <div className={this.state.selectAllFlag?"select_all on":"select_all"} onClick={this.selectAllFn}>全选</div>
                        <span className="delete_all" onClick={this.deleteSelectAllFn}>删除选中商品</span>
                        <Link to="/cart" className="go_cart_btn">下单采购</Link>
                        {/* <div className="go_cart_btn" onChange={this.props.goCartFn}>下单采购</div> */}
                        {/* <div className="down_btn">导出清单</div> */}
                      
                        <div className="total">合计<span className="money">￥{this.state.totalMoney}</span></div>
                        <div className="total_good">已选 <span className="count">{this.state.cartArr.length}</span> 件商品</div>
                    </div>  
                </div>
            </div>
        )
    }
}


export default CartSmall;