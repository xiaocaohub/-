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
            orders: []
        }
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
                console.log(item.id)
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
            setStorageFn("cartArr", resData)
            _this.setState({
                cartArr: resData
            }, function () {
                _this.getSelectIdsFn()
            })
        
        })
    }
    getCartListFn = (selectId)=> {
        let _this = this;   
        let formData = new FormData();
        let token = getStorageFn("token");
        formData.append("api", "app.orderV2.confirmOrder");
        formData.append("accessId", token);
       
        formData.append("storeId", 1);
        formData.append("storeType", 6);
        formData.append("cartIds",  selectId);
        request({
            url: "/api/gw",         
            method: "POST",    
            data: formData
        }).then((res)=> {
            let resData = res.data.data;
            let orders =  resData.orders;
            
            console.log("order")
            console.log(res.data.data)

            this.setState({     
                orders: orders
            })
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
                                <DatePicker></DatePicker>
                            </li>
                            <li>
                                <div className="title">发货说明</div>
                                <div className="txt">
                                    1.现货订单我们将在期望发货时间内发货。 <br/>
                                    2.无现货订单，发货时间以实际生产周期为准。
                                </div>
                            </li>
                
                            <li>
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
                        <div className="order_btn">提交订单</div>
                        <ul className="total_list">
                            <li>体积: 523m²</li>
                            <li>税额: ￥100</li>
                            <li>商品总额: ￥14570</li>

                            <li>应付总额:</li>
                            <li className="money">￥14670</li>
                        </ul>
                    </Col>

                    <Col span={3}></Col>
                </Row>
            </div>
        )
    }
}



export default Show;