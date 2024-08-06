import React from "react";
import "./index.css";
import {Row, Col, Input} from "antd";

import GoodTable from "../../components/Cart/GoodTable";

import UserInfo from "../../components/Cart/UserInfo";
class Show extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className="cart_page_con">
                <Row>

                    <Col span={3}></Col>
                    <Col span={18}>
                         <div className="search_con">
                            <div className="title">普通购买</div>
                            <div className="search_btn"></div>
                            
                            <Input className="serach_put"/>
                         </div>

                        <GoodTable></GoodTable>

                        <UserInfo></UserInfo>
                    </Col>
                    <Col span={3}></Col>
                </Row>
                <Row className="total_con">
                    <Col span={3}></Col>
                    

                    <Col span={18}>
                        <div className="item select_all">全选</div>
                    
                       
                        <div className="item delete_all">删除选中商品</div>
                        <div className="item total_count">已选<span className="count"> 5 </span>件商品</div>
                        <div className="pay_btn">去结算</div>
                        <div className="item total_money">￥14670</div>
                        
                        <div className="item total_money_tit">应付总额 </div>
                        <div className="item good_money">商品总额: ￥14570</div>
                        <div className="item vol"> 体积: 523m² </div>
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </div>
        )
    }
}




export default Show;