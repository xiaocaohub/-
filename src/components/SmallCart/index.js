import React from "react";
import {Input, Modal} from "antd";
import {Link} from "react-router-dom";

import "./index.css";

import imgGood from "../../assets/recomend_good1.png";
import {setStorageFn, getStorageFn} from "../../utils/localStorage";
import request from "../../api/request";
class CartSmall extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            cartArr: [],
            selectAllFlag: false,

            totalMoney: 0
        }
    }
    componentDidMount () {
         this.initFn()
        // this.getCartInfoFn()
    }

    initFn = ()=> {
        let cartArr = getStorageFn("cartArr") || [];
        console.log("cartArr smallCart")
      
        console.log(cartArr)
        console.log("cartArr smallCart")
        this.setState({
            cartArr: cartArr
        }, function () {
            this.totalAll()
        })
    }
    selectGoodFn = (item, index)=> {
        let cartArr = this.state.cartArr;
        item.selectFlag = !item.selectFlag;

        cartArr[index] = item;
        

        setStorageFn("cartArr", cartArr)
        this.setState({
            cartArr: cartArr
        }, function () {

            this.totalAll()
        })
    }
    totalAll = ()=> {
        let cartArr = this.state.cartArr;
        let flag = true;
        let totalMoney = 0;

    
        cartArr.forEach((item,index)=> {
            if (!item.selectFlag) {

                flag = false;
            }
            if (item.selectFlag) {
                totalMoney += item.price * item.goods_num;
            }
        })
        if (cartArr.length == 0) {
            flag = false;
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
        console.log(item)
        let cartArr = this.state.cartArr;
        if (item.goods_num > 1) {
            cartArr[index].goods_num = item.goods_num - 1;
        }

        this.setState({
            cartArr: cartArr
        })
    }
    addFn = (item, index)=> {
        

        let cartArr = this.state.cartArr;
 
        cartArr[index].goods_num = item.goods_num + 1;
        this.setState({
            cartArr: cartArr
        })
    }
    deleteGoodFn = (item, index)=> {
        let _this = this;

        let cartArr = this.state.cartArr;
        let selectAllFlag = this.state.selectAllFlag;
        Modal.confirm({
            title: "温馨提示",
            content: "确认删除吗?",
            onOk: function () {
                cartArr.splice(index, 1)
                
                 

                console.log(cartArr.length)
                if (cartArr.length == 0) {
                    selectAllFlag = false;
                }
                console.log(selectAllFlag)
                _this.setState({
                    cartArr: cartArr,
                    selectAllFlag: selectAllFlag
                }, function () {
                    _this.totalAll()
                })
            }
        })
    }
    render () {
        return (
            <div className="show_small_cart">
        
        
                <div className="shadow"></div>    
                <div className="cart_small_con">
                    <div className="top_title">
                        <span className="title">购物车商品</span>

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
                                                <img src={item.imgurl} alt="" className="img"/>
                                                <div className="info">
                                                    <div className="txt"> { item.product_title } </div>
                                                    <div className="tit">{ item.skuName }</div>
                                                </div>
                                            </div>
            
                                            <div className="price">{ item.price }</div>
                                            <div className="count_con">
                                                    <div className="btn reduce" onClick={()=>{this.reduceFn(item, index)}}>-</div>
                                                    <Input className="count" value={item.goods_num}/>
                                                    <div className="btn" onClick={()=>{this.addFn(item, index)}}>+</div>      
                                            </div>
                                            <div className="sub_total">{ item.price * item.goods_num }</div>
                                            <div className="operate_con">
                                                <div className="delete" onClick={()=>{this.deleteGoodFn(item, index)}}></div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>    

                    <div className="total_con">
                        <div className={this.state.selectAllFlag?"select_all on":"select_all"} onClick={this.selectAllFn}>全选</div>
                        <span className="delete_all">删除选中商品</span>
                        <Link to="/cart" className="go_cart_btn">下单采购</Link>

                        <div className="down_btn">导出清单</div>
                      
                        <div className="total">合计<span className="money">￥{this.state.totalMoney}</span></div>
                        <div className="total_good">已选 <span className="count">{this.state.cartArr.length}</span> 件商品</div>
                    </div>  
                </div>
            </div>
        )
    }
}



export default CartSmall;