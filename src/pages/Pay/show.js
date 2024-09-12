import React from "react";
import {Row, Col} from "antd";
import {InfoCircleOutlined} from '@ant-design/icons';

import Platform from "../../components/Pay/Platform";

import Offline from "../../components/Pay/Offline";

import {setStorageFn, getStorageFn} from "../../utils/localStorage";
import "./index.css";
class Pay extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            dateText: "",

            set: 0,
            orderNumber: "",
            payTotal: {
                totalVolume: 0, // 总体积
                totalPrice: 0, // 总价
                taxation: 0 // 税额
            }
        }
    }
    componentDidMount () {
        
        this.ltTime()
        this.init()
    }
    componentWillUnmount () {

        clearInterval(this.state.set)
    }
    init = ()=> {
        let orderNumber = getStorageFn("orderNumber");
        let payTotal = this.state.payTotal;


        let payOption = JSON.parse(getStorageFn("payOption"));
        console.log("payOption")
        console.log(typeof payOption)
        this.setState({
            orderNumber: orderNumber,
            payTotal: payOption
        })
    }
    ltTime = ()=> {

        let _this = this;
        var curTime=new Date();
        var endTime=new Date("2024/9/14, 0:20:0");
       
        var leftTime=parseInt((endTime.getTime()-curTime.getTime())/1000);
        var d=parseInt(leftTime/(60*60*24));
        var h=parseInt(leftTime/(60*60)%24);
        var m=parseInt(leftTime/60%60);
        var s=parseInt(leftTime%60);
        let dateText = d + "天" + h + "时" + m + "分" + s + "秒";
        if(leftTime <= 0) {
            dateText = "未支付";
        }




        this.setState({
            dateText: dateText
        })
        let set = setTimeout(()=>{
        
            _this.ltTime()
    
        }, 1000);
        this.setState({
            set: set
        })
    }
    render () {
        return (
            <div className="pay_page_con">
                    <div className="content_common_width">
                        <div className="order_title_con">
                            {/* <div className="order_status"></div> */}
                            <div className="title_con">

                                <div className="last_time_tit">订单提交成功, 请您在 <span className="last_time">{this.state.dateText}</span> <span className="last_txt">内完成支付, 否则订单会被自动取消!</span></div>
                                <div className="txt">
                                    <span className="item">订单编号: {this.state.orderNumber}</span>
                                    <span className="item">应付款金额: {this.state.payTotal.totalPrice}元</span>
                                </div>
                                {/* <div className="txt">本次支付金额: <span className="money"> {this.state.payTotal.totalPrice}元</span> </div> */}
                            </div>
                        </div>

                        <div className="pay_con">
                            <div className="top">
                                <ul className="nav_list">                 
                                    <li style={{display:"none"}}>结算通</li>
                                    <li>线下汇款</li>
                                </ul>


                                <span className="tit"><InfoCircleOutlined /> 付款说明</span>
                            </div>

                            {/* <Platform ></Platform>  */}

                            <Offline payTotal={this.state.payTotal}></Offline>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Pay;