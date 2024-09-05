import React from "react";
import {Steps} from "antd";
import goodImg from "../../assets/recomend_good1.png";

import {setStorageFn, getStorageFn} from "../../utils/localStorage";

import request from "../../api/request";
import "./index.css";

const { Step } = Steps;
class PeopleOrderDetail extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            orderNumber: "",

            orderArr: [],
            orderInfo: ""
        }
    }
    componentDidMount () {
       this.getOrderNumberFn()
    }
    getOrderNumberFn = ()=> {

        let orderNumber = window.location.pathname.split("/detail/")[1];
        this.setState({
            orderNumber: orderNumber

        }, function () {
            this.getOrderDetialFn()
        })
    }
    getOrderDetialFn = (optionIds)=> {
        let _this = this;
        let formData = new FormData();
        
        let token = getStorageFn("token");
        
        
        let storeId = getStorageFn("storeId") || 1;
        let storeType = getStorageFn("storeType") || 6;
        formData.append("api", "app.orderV2.orderDetail");
        formData.append("storeId", storeId);

        formData.append("storeType", storeType);
        
        formData.append("accessId", token);
        formData.append("orderParentNo", this.state.orderNumber);   
        request({
            url: "/api/gw",
            method: "POST",      
            data: formData
        }).then((res)=> {
            let resData =  res.data.data;
            let orderArr = resData.orders;
        
            _this.setState({
                orderInfo: resData,

                orderArr: orderArr
            })
            
            console.log("order detail")
            console.log(resData)
            console.log("order detail")
        })
    }

    orderStatusFn = (status)=> {
        switch (status) {
            case 0:
                return "已取消";
                break ;
            case 1: 
                return "代付款";
                break;
            case 2: 
                return "备货中";
                break;
            case 3:
                return "待发货";
                break;
            case 4:
                return "已发货";
                break;
            case 5:
                return "已完成";
                break;
            
            case 6:
                return "已退款";
                break ;
        }
    } 

    render () {
        return (
            <div className="people_order_detail">    
                
                <div className="step_con">
                    <Steps current={2}>
                        <Step title="提交订单" description="2024-07-03 19:42:26" />
                        
                        <Step title="已付款" subTitle="Left 00:00:08" description="This is a description." />
                        <Step title="配货中" description="This is a description." />
                        <Step title="已发货" description="This is a description." />
                        <Step title="已完成" description="This is a description." />
                    </Steps>
                </div>

                <ul className="order_dedtail_con">                    
                    <li>
                        <div className="title" onClick={this.getOrderDetialFn}>订单信息</div>
                        <ul className="order_info_list">
                            <li><span className="tit">主订单号:</span> {this.state.orderInfo.orderParentNo}</li>
                            <li><span className="tit">下单时间:</span>  {this.state.orderInfo.createTime}</li>
                            <li><span className="tit">下单账号:</span>  {this.state.orderInfo.name}  {this.state.orderInfo.mobile}</li>
                            <li><span className="tit">客户信息:</span>  
                               {this.state.orderInfo.provice}{this.state.orderInfo.city}{this.state.orderInfo.area} {this.state.orderInfo.address}
                            </li>
                            <li><span className="tit">应付总额:</span> <span className="total_money">¥ {this.state.orderInfo.payPrice}</span></li>
                        </ul>

                        <div className="operate_btn_list">
                            <div className="btn">去付款</div>

                            <div className="btn">取消订单</div>
                            <div className="btn">导出订单</div>
                            <div className="btn">再次购买</div>
                        </div>
                    </li>


                    <li>
                       <div className="title">订单跟踪</div>
                        <Steps direction="vertical" current={1} className="vertical_step">
                            <Step title="已下单" description="提交订单  2024-07-03 14:59:22" />
                        </Steps>
                    </li>
                </ul>

                <ul className="order_collapse_info_list">
                    <li>
                        <div className="title">收货信息</div>

                        <ul className="order_info_list">
                            <li><span className="tit">收货人:</span> {this.state.orderInfo.name}</li>
                            <li><span className="tit">手机号:</span> { this.state.orderInfo.userTel }</li>
                            <li><span className="tit">下单账号:</span> {this.state.orderInfo.name} {this.state.orderInfo.mobile}</li>
                            <li><span className="tit">收货地址:</span>  {this.state.orderInfo.provice}{this.state.orderInfo.city}{this.state.orderInfo.area} {this.state.orderInfo.address}</li>
                            
                            <li><span className="tit">期望发货时间:</span> {this.state.orderInfo.estimatedDeliveryTime?this.state.orderInfo.estimatedDeliveryTime:"-----"} <span className="change_time">更改时间</span></li>
                        </ul>
                    </li>
                     
                    <li>
                        <div className="title">付款信息</div>
                        <ul className="order_info_list">
                            <li><span className="tit">商品总价:</span> ¥{this.state.orderInfo.totalPrice}</li>

                            <li><span className="tit">商品税额:</span> ¥{this.state.orderInfo.taxation}</li>
                            <li><span className="tit">应付总额:</span> ¥-------</li>
                            <li><span className="tit">付款时间:</span> {this.state.orderInfo.offlinePayTime} </li>
                            <li><span className="tit">付款方式:</span>  线下汇款 </li>
                        </ul>
                    </li>

                    {/* <li>
                        <div className="title">发票信息</div>
                        <ul className="order_info_list">
                            <li><span className="tit">发票类型:</span> 202407030000422</li>

                            <li><span className="tit">发票抬头:</span> 2024-07-03</li>
                            <li><span className="tit">发票内容类型:</span> 张三 1001000</li>
                            <li><span className="tit">收货地址:</span> 黄s 1001000 广东省深圳市龙岗区黄屋村</li>                            
                            <li><span className="tit">纳税人识别号:</span> 11323234545425335</li>
                        </ul>
                    </li> */}
                </ul>


                <div className="order_good_info_list_con">
                    <div className="title">订单商品</div>
                    {this.state.orderArr.length>0 && this.state.orderArr.map((orderItem, index)=>{
                        return (
                             
                            <div className="order_good_table">
                                <div className="table_title">
                                    <div className="good_info">商品信息</div>
                                    <div className="size">规格</div>
                                    <div className="vol">体积(m³)</div>
                                    <div className="price">供货单价(元)</div>
                                    <div className="count">数量</div>

                                    {/* <div className="return_goods_count">退货数量</div> */}
                                    <div className="total_money">合计金额(元)</div>
                                    <div className="status">状态</div>
                                </div>
        

                                <ul className="good_list">
                                    {orderItem.details.length>0 && orderItem.details.map((goodItem, i)=> {
                                        return (
                                            <li>
                                                <div className="good_info">
                                                    <img src={goodImg} alt="" className="good_img"/>
                                                    <div className="text_con">
                                                    <div className="tit">{goodItem.productName}</div>
                                                    <p className="txt">编码: {goodItem.productCode} </p>
                                                    <p className="txt">型号: {goodItem.marque}</p>
                                                    </div>
                                                </div>
                                                <div className="size"><span>{goodItem.attribute}</span></div>
                                                <div className="vol">{ goodItem.totalVolume }</div>
                
                                                <div className="price">{goodItem.supplierPrice}</div>
                                                <div className="count">{ goodItem.num }</div>
                                                {/* <div className="return_goods_count">1</div> */}
                                                <div className="total_money">{ goodItem.totalSupplierPrice }</div>
                                                <div className="status">{this.orderStatusFn(goodItem.status)}</div>
                                            </li>
                                        )
                                    })}  
                                </ul>
                                <p className="time_txt">子订单号: {orderItem.orderNo?orderItem.orderNo:"-----"} </p>
                                <p className="time_txt">预计发货时间: {orderItem.estimatedDeliveryTime?orderItem.estimatedDeliveryTime:"-----"}</p>
        
                                <p className="time_txt">实际发货时间: {orderItem.realDeliveryTime?orderItem.realDeliveryTime:"-----"}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}



export default PeopleOrderDetail;