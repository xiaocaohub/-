import React from "react";
import {Row, Col} from "antd";
import {InfoCircleOutlined} from '@ant-design/icons';

import Platform from "../../components/Pay/Platform";
import Offline from "../../components/Pay/Offline";
import "./index.css";

class Pay extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className="pay_page_con">
                <Row>
                    <Col span={3}></Col>
                    <Col span={18}>
                        <div className="order_title_con">
                            {/* <div className="order_status"></div> */}
                            <div className="title_con">

                                <div className="tit">订单提交成功, 请您在<span className="last_time">6天23小时59分59秒</span>内完成支付, 否则订单会被自动取消!</div>
                                <div className="txt">
                                    <span className="item">订单编号: 12345789123451</span>
                                    <span className="item">应付款金额: 3333.33</span>
                                </div>
                                <div className="txt">本次支付金额: <span className="money">21005.00</span> </div>
                            </div>
                        </div>

                        <div className="pay_con">
                            <div className="top">
                                <ul className="nav_list">                 
                                    <li>结算通</li>
                                    <li>线下汇款</li>
                                </ul>


                                <span className="tit"><InfoCircleOutlined /> 付款说明</span>
                            </div>

                            <Platform></Platform>

                            {/* <Offline></Offline> */}
                        </div>
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </div>
        )
    }
}

export default Pay;