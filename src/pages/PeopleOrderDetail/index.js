import React from "react";
import {Steps} from "antd";
import goodImg from "../../assets/recomend_good1.png";

import "./index.css";

const { Step } = Steps;
class PeopleOrderDetail extends React.Component {
    constructor (props) {
        super(props)
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
                        <div className="title">订单信息</div>
                        <ul className="order_info_list">
                            <li><span className="tit">主订单号:</span> 202407030000422</li>
                            <li><span className="tit">下单时间:</span> 2024-07-03</li>
                            <li><span className="tit">下单账号:</span> 张三 1001000</li>
                            <li><span className="tit">客户信息:</span> 黄s 1001000 广东省深圳市龙岗区黄屋村</li>
                            <li><span className="tit">应付总额:</span> <span className="total_money">¥1529</span></li>
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
                            <li><span className="tit">收货人:</span> 202407030000422</li>
                            <li><span className="tit">手机号:</span> 2024-07-03</li>
                            <li><span className="tit">下单账号:</span> 张三 1001000</li>
                            <li><span className="tit">收货地址:</span> 黄s 1001000 广东省深圳市龙岗区黄屋村</li>
                            
                            <li><span className="tit">期望发货时间:</span> 202407030000422 <span className="change_time">更改时间</span></li>
                        </ul>
                    </li>
                    
                    <li>
                        <div className="title">付款信息</div>
                        <ul className="order_info_list">
                            <li><span className="tit">商品总价:</span> ¥1529</li>
                            <li><span className="tit">应付总额:</span> ¥1529</li>

                            <li><span className="tit">付款时间:</span> --- </li>
                            <li><span className="tit">付款方式:</span> --- </li>
                        </ul>
                    </li>

                    <li>
                        <div className="title">发票信息</div>
                        <ul className="order_info_list">
                            <li><span className="tit">发票类型:</span> 202407030000422</li>

                            <li><span className="tit">发票抬头:</span> 2024-07-03</li>
                            <li><span className="tit">发票内容类型:</span> 张三 1001000</li>
                            <li><span className="tit">收货地址:</span> 黄s 1001000 广东省深圳市龙岗区黄屋村</li>                            
                            <li><span className="tit">纳税人识别号:</span> 11323234545425335</li>
                        </ul>
                    </li>
                </ul>


                <div className="order_good_info_list_con">
                    <div className="title">订单商品</div>
                    <div className="order_good_table">
                        <div className="table_title">
                            <div className="good_info">商品信息</div>
                            <div className="size">规格</div>
                            <div className="vol">体积(m³)</div>
                            <div className="price">供货单价(元)</div>
                            <div className="count">数量</div>
                            <div className="return_goods_count">退货数量</div>
                        
                            <div className="total_money">合计金额(元)</div>
                            <div className="status">状态</div>
                        </div>

                        <ul className="good_list">
                            <li>
                                <div className="good_info">
                                   
                                    <img src={goodImg} alt="" className="good_img"/>

                                    <div className="text_con">
                                       <div className="tit">现代风格 时尚简约休闲款 头层牛皮床 【不支持改色】</div>
                                       <p className="txt">编码: J-ZZ-OY-615-2CY-1 </p>
                                       <p className="txt">型号: 615*2</p>
                                    </div>
                                </div>
                                <div className="size"><span>灰色_餐椅*2把- 520*565*845mm</span></div>
                                <div className="vol">100</div>

                                <div className="price">1000</div>
                                <div className="count">2</div>
                                <div className="return_goods_count">1</div>
                                <div className="total_money">1000</div>
                                <div className="status">-----</div>
                            </li>
                         
                            <li>
                                <div className="good_info">
                                   
                                    <img src={goodImg} alt="" className="good_img"/>

                                    <div className="text_con">
                                       <div className="tit">现代风格 时尚简约休闲款 头层牛皮床 【不支持改色】</div>
                                       <p className="txt">编码: J-ZZ-OY-615-2CY-1 </p>
                                       <p className="txt">型号: 615*2</p>
                                    </div>
                                </div>
                                <div className="size"><span>灰色_餐椅*2把- 520*565*845mm</span></div>
                                <div className="vol">100</div>

                                <div className="price">1000</div>
                                <div className="count">2</div>
                                <div className="return_goods_count">1</div>
                                <div className="total_money">1000</div>
                                <div className="status">-----</div>
                            </li>
                        </ul>
                        <p className="time_txt">子订单号: 2406220008627</p>
                        <p className="time_txt">预计发货时间: —</p>

                        <p className="time_txt">实际发货时间: —</p>
                    </div>
                </div>
            </div>
        )
    }
}



export default PeopleOrderDetail;