import React from "react";
import {Row, Col, DatePicker} from "antd";
import { RightOutlined } from '@ant-design/icons';

import GoodTable from "../../components/CheckCart/GoodTable";

import {setStorageFn, getStorageFn} from "../../utils/localStorage";
import request from "../../api/request";
import "./index.css";
class Show extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            cartArr: [],
            orders: [],

            totalVolume: 0, // 总体积
            totalPrice: 0, // 总价
            orderFlag: true,
            date: ""
        }
        console.log("checkcart", props)
    }
    componentDidMount () {
        this.getCartInfoFn()
    }

    // 选中商品 id
    getSelectIdsFn = ()=> {
        let _this = this;

        let cartArr = this.state.cartArr;
        let ids = "";
        cartArr.forEach((item, index)=> {
            if (item.checked) {
                ids += item.id + ",";
            }
        })


        setTimeout(()=>{
            _this.getCartListFn(ids)
        }, 1000)
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
            // console.log("resData-----")
            // console.log(resData)
            setStorageFn("cartArr", resData)
            _this.setState({
                cartArr: resData
            }, function () {
                _this.getSelectIdsFn()
            })
        })
    }
    getCartListFn = (selectId)=> {
        let orderFlag = this.state.orderFlag;
        this.setState({
            orderFlag: false
        })
        if (!orderFlag) {
            return ;
        }
        let _this = this;   
        let formData = new FormData();
        let token = getStorageFn("token");
        formData.append("api", "app.orderV2.confirmOrder");
        formData.append("accessId", token);  
        formData.append("storeId", 1);

        formData.append("storeType", 6);
        // formData.append("cartIds",  selectId);

        formData.append("cartIds",  743)
        request({
            url: "/api/gw",         
            method: "POST",    
            data: formData
        }).then((res)=> {
            let resData = res.data.data;
            let orders =  resData.orders;
            orders.forEach((item, index)=>{

                item.remark = "";
            })

            
            console.log("order")
            console.log(res.data.data)
            console.log("order")
            this.setState({     

                orders: orders,
                totalPrice: resData.totalPrice,
                taxation: resData.taxation,
                totalVolume: resData.totalVolume
            })
        })
    }

    payOrderFn = ()=> {
        this.props.history.push("/pay")
    }
    selectDateFn = (date, dateString)=> {

        this.setState({
            date: dateString
        })
 
    }
    render () {
        return (
            <div className="check_cart_page">
                <Row>
                    <Col span={3}></Col>
                  
                    <Col span={18}>
                        {this.state.orders.length>0 && this.state.orders.map((orderItem, index)=> {
                            return (<GoodTable orderItem={orderItem} key={index}></GoodTable>)
                        })}
                        

                        <ul className="invoice_info_con">
                            <li>
                                <div className="title">期望发货时间</div>
                                <DatePicker onChange={this.selectDateFn}></DatePicker>
                            </li>
                            <li>

                                <div className="title">发货说明</div>
                                <div className="txt">
                                    1.现货订单我们将在期望发货时间内发货。 <br/>
                                    2.无现货订单，发货时间以实际生产周期为准。
                                </div>
                            </li>
                
                            <li style={{display:"none"}}>
                                <div className="title">开票信息</div>           
                                <div className="invoice_select">开票</div>
                                <div className="invoice_btn">请完善发票信息<RightOutlined /></div>
                            </li>
                        </ul>
                    </Col>
                    <Col span={3}></Col>

                </Row>
                <Row className="total_con">
                    <Col span={3}></Col>
                    <Col span={18} className="total_list_con">
                        <div className="order_btn" onClick={this.payOrderFn}>提交订单</div>
                        <ul className="total_list">
                            <li>体积: {this.state.totalVolume}m²</li>
                            <li>税额: ￥{this.state.taxation}</li>

                            <li>商品总额: ￥{this.state.totalPrice}</li>
                            <li>应付总额:</li>
                            <li className="money">￥{this.state.totalPrice}</li>
                          
                             
                        </ul>
                    </Col>

                    <Col span={3}></Col>
                </Row>
            </div>
        )
    }
}



export default Show;