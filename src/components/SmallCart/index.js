import React from "react";
import {Input} from "antd";
import {Link} from "react-router-dom";

import "./index.css";

import imgGood from "../../assets/recomend_good1.png";

class CartSmall extends React.Component {
    
    constructor (props) {
        super(props)
        console.log("CartSmall props", props)
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
                            <li> 
                                <div className="select_con">
                                    <div className="select"></div>
                                </div>

                                <div className="info_con">
                                    <img src={imgGood} alt="" className="img"/>
                                    <div className="info">
                                    
                                    
                                        <div className="txt">现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色</div>
                                        <div className="tit">米白色 1.5x2.0米-1630*2180*1100MM 1.5x2.0米-1630*2180*1100MM</div>
                                    </div>
                                </div>

                                <div className="price">4890.00</div>
                                <div className="count_con">
                                        <div className="btn reduce">-</div>
                                        <Input className="count"/>
                                        <div className="btn">+</div>      
                                </div>
                                <div className="sub_total">9780.00</div>
                                <div className="operate_con">
                                    <div className="delete"></div>
                                </div>
                            </li>

                            <li> 
                                <div className="select_con">
                                    <div className="select"></div>
                                </div>

                                <div className="info_con">
                                    <img src={imgGood} alt="" className="img"/>
                                    <div className="info">
                                    
                                    
                                        <div className="txt">现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色</div>
                                        <div className="tit">米白色 1.5x2.0米-1630*2180*1100MM 1.5x2.0米-1630*2180*1100MM</div>
                                    </div>
                                </div>

                                <div className="price">4890.00</div>
                                <div className="count_con">
                                        <div className="btn reduce">-</div>
                                        <Input className="count"/>
                                        <div className="btn">+</div>      
                                </div>
                                <div className="sub_total">9780.00</div>
                                <div className="operate_con">
                                    <div className="delete"></div>
                                </div>
                            </li>

                            <li> 
                                <div className="select_con">
                                    <div className="select"></div>
                                </div>

                                <div className="info_con">
                                    <img src={imgGood} alt="" className="img"/>
                                    <div className="info">
                                    
                                    
                                        <div className="txt">现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色</div>
                                        <div className="tit">米白色 1.5x2.0米-1630*2180*1100MM 1.5x2.0米-1630*2180*1100MM</div>
                                    </div>
                                </div>

                                <div className="price">4890.00</div>
                                <div className="count_con">
                                        <div className="btn reduce">-</div>
                                        <Input className="count"/>
                                        <div className="btn">+</div>      
                                </div>
                                <div className="sub_total">9780.00</div>
                                <div className="operate_con">
                                    <div className="delete"></div>
                                </div>
                            </li>

                            <li> 
                                <div className="select_con">
                                    <div className="select"></div>
                                </div>

                                <div className="info_con">
                                    <img src={imgGood} alt="" className="img"/>
                                    <div className="info">
                                    
                                    
                                        <div className="txt">现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色</div>
                                        <div className="tit">米白色 1.5x2.0米-1630*2180*1100MM 1.5x2.0米-1630*2180*1100MM</div>
                                    </div>
                                </div>

                                <div className="price">4890.00</div>
                                <div className="count_con">
                                        <div className="btn reduce">-</div>
                                        <Input className="count"/>
                                        <div className="btn">+</div>      
                                </div>
                                <div className="sub_total">9780.00</div>
                                <div className="operate_con">
                                    <div className="delete"></div>
                                </div>
                            </li>


                            
                            <li> 
                                <div className="select_con">
                                    <div className="select"></div>
                                </div>

                                <div className="info_con">
                                    <img src={imgGood} alt="" className="img"/>
                                    <div className="info">
                                    
                                    
                                        <div className="txt">现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色</div>
                                        <div className="tit">米白色 1.5x2.0米-1630*2180*1100MM 1.5x2.0米-1630*2180*1100MM</div>
                                    </div>
                                </div>

                                <div className="price">4890.00</div>
                                <div className="count_con">
                                        <div className="btn reduce">-</div>
                                        <Input className="count"/>
                                        <div className="btn">+</div>      
                                </div>
                                <div className="sub_total">9780.00</div>
                                <div className="operate_con">
                                    <div className="delete"></div>
                                </div>
                            </li>

                            <li> 
                                <div className="select_con">
                                    <div className="select"></div>
                                </div>

                                <div className="info_con">
                                    <img src={imgGood} alt="" className="img"/>
                                    <div className="info">
                                    
                                    
                                        <div className="txt">现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色现代风格 时尚简约休闲款 头层牛皮床不支持改色</div>
                                        <div className="tit">米白色 1.5x2.0米-1630*2180*1100MM 1.5x2.0米-1630*2180*1100MM</div>
                                    </div>
                                </div>

                                <div className="price">4890.00</div>
                                <div className="count_con">
                                        <div className="btn reduce">-</div>
                                        <Input className="count"/>
                                        <div className="btn">+</div>      
                                </div>
                                <div className="sub_total">9780.00</div>
                                <div className="operate_con">
                                    <div className="delete"></div>
                                </div>
                            </li>
                        </ul>
                    </div>    

                    <div className="total_con">
                        <div className="select_all">全选</div>
                        <span className="delete_all">删除选中商品</span>
                        <Link to="/cart" className="go_cart_btn">下单采购</Link>

                        <div className="down_btn">导出清单</div>

                        <div className="total">合计<span className="money">￥14670</span></div>
                        <div className="total_good">已选 <span className="count">2</span> 件商品</div>
                    </div>  
                </div>
            </div>
        )
    }
}




export default CartSmall;