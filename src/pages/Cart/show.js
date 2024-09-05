import React from "react";
import {Link} from "react-router-dom";
import {Row, Col, Input, Modal, message} from "antd";
import "./index.css";
import GoodTable from "../../components/Cart/GoodTable";

import UserInfo from "../../components/Cart/UserInfo";
import {setStorageFn, getStorageFn} from "../../utils/localStorage";
import SmallCart from "../../components/SmallCart";
import request from "../../api/request";
class Show extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            cartArr: [],

            selectAllFlag: false,
            totalMoney: 0,
            totalCount: 0,
            totalVol: 0, // 总体积
            setImgHeight: 0,
            userInfo: {

                province: "",
                city: "",
                area: "",

                detailAdress: "",
                recipient: "", // 收件人
                remark: ""
            },
            // 被选择的商品
            totalSelectGoodCount: 0,
            // 客户信息是否保存
            isKeep: false
        }
    }
    componentDidMount () {
        this.getCartInfoFn()
    }

    // init = ()=> {


    //     let cartArr = getStorageFn("cartArr") || [];
    //     this.setState({
    //         cartArr: cartArr
    //     })
    // }
    reduceFn = (item, index)=> {
        let cartArr = this.state.cartArr;
        if (item.goods_num > 1) {
            cartArr[index].goods_num = item.goods_num - 1;
        }
        this.setState({
            cartArr: cartArr
        }, function () {

            this.changeGoodCountFn(cartArr[index])
            this.totalAll()
        })
    }
    addFn = (item, index)=> {
        let cartArr = this.state.cartArr;
        cartArr[index].goods_num = item.goods_num + 1;
        this.setState({
            cartArr: cartArr
        }, function () {
            this.changeGoodCountFn(cartArr[index])
            this.totalAll()
        })
    }
    changeGoodCountFn = (selectGood)=> {   
        let _this = this; 
        let formData = new FormData();
        let token = getStorageFn("token");
        let goodsJson = [{"num": selectGood.goods_num,"cart_id":selectGood.id}]
        formData.append("api", "app.cart.updateCart");
        formData.append("accessId", token);
        formData.append("storeId", 1);
        formData.append("storeType", 6);
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
        let cartArr = this.state.cartArr;
        let value = e.target.value;
        item.goods_num = value;
        cartArr[index] = item;
        this.setState({
            cartArr: cartArr
        })
    }
    blurGoodCountFn = (goodItem)=> {
        console.log(goodItem)
        this.changeGoodCountFn(goodItem)
    }
    totalAll = ()=> {
        let cartArr = this.state.cartArr;
     
        let flag = true;
        let totalMoney = 0;
        let totalVol = 0;
        if (cartArr.length>0) {
            cartArr.forEach((item,index)=> {
                if (!item.checked) {
                    flag = false;
                }
                if (item.checked) {
                    totalMoney += item.price * item.goods_num;
                    totalVol += item.capacity;
                    console.log("totalVol", totalVol)
                }
            })
        } else {
            flag = false;
            totalMoney = 0;
            totalVol = 0;
        }
        this.setState({
            selectAllFlag: flag,
            totalMoney: totalMoney,
            totalVol: totalVol
        })
    }
    totalSelectGoodFn = ()=> {
        let cartArr = this.state.cartArr;
        let count = 0;
        cartArr.forEach((item, index)=> {
            if (item.selectFlag) {
                count += 1;
            }
        })

        this.setState({
            totalCount: count
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
            this.totalSelectGoodFn()
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

            if (res.data.data) {
               _this.getCartInfoFn()

            } else {
                message.error(res.data.message)
            }
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

        this.totalSelectGoodFn()
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
        formData.append("cartIds", deleteId);
        request({
            url: "/api/gw",              
            method: "POST",    
            data: formData

        }).then((res)=> {
            if (res.data.data) {
               message.success("删除成功")
               _this.getCartInfoFn()
            } else {
                message.error(res.data.message)
            }
        })
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
            // console.log("resData cart")
            // console.log(resData)
            // console.log("resData")

            _this.setState({
                cartArr: resData
            }, function () {
                _this.totalSelectGoodFn()
                _this.totalAll()
                _this.totleSelectGoodCountFn()
            })
            setStorageFn("cartArr", resData)
        })
    }

    detailAdressFn = (value)=> {
        console.log()
    }
    changeInfoFn = (userInfo)=> {
        this.props.changeInfo(userInfo)
    }
    showFn = ()=> {
        console.log(this.props.state.cartState.userInfo)
    }

    deleteSelectAllFn = ()=> {
        let _this = this;
        let cartArr = this.state.cartArr;
        let length = cartArr.length;
        if (length > 0) {
            let selectCount = 0;
            cartArr.forEach((item)=> {
                if (item.checked) {
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
    // 统计被选择的商品
    totleSelectGoodCountFn = ()=> {
        let cartArr = this.state.cartArr;
        let length = cartArr.length;
        let totalSelectGoodCount = 0;
        cartArr.forEach((item)=> {
            if (item.checked) {
                totalSelectGoodCount += 1;
            }
        })


        this.setState({
            totalSelectGoodCount: totalSelectGoodCount
        })
    }

    goPayFn = ()=> {
    
        if (!this.state.isKeep) {
            message.error("请保存客户信息")
            return ;
        }
        if (this.state.totalSelectGoodCount > 0) {
            window.location.href = "/checkcart";
        } else {
            message.error("未选择商品")
        }
    }
    // 统计购物车数量
    totalCartGoodCountFn = ()=> {
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
    setKeepFn = (flag)=> {
        console.log("keep  flag")
        console.log(flag)

        this.setState({

            isKeep: flag
        })
    }
    render () {
        return (    
            <div className="cart_page_con">
                <Row>
                    <Col span={3}>  </Col>
                    <Col span={18}>
                         <div className="search_con">
                            <div className="title">普通购买</div>
                            <div className="search_btn"></div>       
                            <Input className="serach_put"/>
                        </div>
                        {this.state.cartArr.length>0 && <GoodTable cartArr={this.state.cartArr} totalSelectGoodCount={this.state.totalSelectGoodCount} reduceFn={this.reduceFn} addFn={this.addFn} selectGoodFn={this.selectGoodFn} deleteGoodConfirmFn={this.deleteGoodConfirmFn} putCountFn={this.putCountFn} blurGoodCountFn={this.blurGoodCountFn}></GoodTable>}
            
                        <UserInfo userInfo={this.props.state.cartState.userInfo} detailAdressFn={this.detailAdressFn} changeInfo={this.changeInfoFn} setKeepFn={this.setKeepFn}></UserInfo>
                    </Col>
                    <Col span={3}></Col>
                </Row>
                <Row className="total_con">
                    <Col span={3}></Col>
                    <Col span={18}>
                        <div className={this.state.selectAllFlag?"item select_all on":"item select_all"} onClick={this.selectAllFn}>全选</div>
                        <div className="item delete_all" onClick={this.deleteSelectAllFn}>删除选中商品</div>
                                    
                        <div className="item total_count">已选<span className="count"> {this.state.totalCount} </span>件商品</div>
                        {/* <Link to="/checkcart" className="pay_btn">去结算</Link> */}
                        <div className="pay_btn" onClick={this.goPayFn}>去结算</div>
                        {/* <div className="item total_money">￥{this.state.totalMoney}</div>
                        <div className="item total_money_tit">应付总额 </div> */}
               
                        <div className="item good_money">商品总额: ￥{this.state.totalMoney}</div>
                        <div className="item vol"> 体积: {this.state.totalVol }m² </div>
                    </Col>
                    <Col span={3}></Col>
                </Row>
                {/* {this.props.state.commonState.showCartFlag && <SmallCart hideSmallCart={this.props.hideSmallCartFn}  totalCartGoodCountFn={this.totalCartGoodCountFn}></SmallCart>} */}
            </div>
        )
    }
}


export default Show;