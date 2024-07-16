import React from "react";
import {Link} from "react-router-dom";
import "./index.css";

import {Row, Col, Badge} from "antd";
import logo from "../../assets/logo.png";
import topcart from "../../assets/shopping_cart.png";
function Header () {
    return (
        <div className="header_con">
            <Row className="header_top">
                <Col span={3}></Col>
                <Col span={18}>
                    <span className="title">更懂年轻人的国潮家居品牌</span>
                    <Link to="/login" className="login_btn">登录</Link>
                    <Link to="/login" className="login_btn">注册</Link>
                </Col>
                <Col span={3}></Col>
            </Row>
            <Row className="header_bottom">
                <Col span={3}></Col>
                <Col span={18}>

                    <Link to="/" className="logo"><img src={logo}/></Link>
                    <ul className="nav_list">
                        <li className="on">首页</li>
                        <li>新品推荐</li>
                        <li>产品中心</li>
                        <li>臻选系列</li>                       
                        <li>大师灵感</li>
                        <li>云设计</li>
                        <li>关于珞珂</li>
                    </ul>
             
                    <Badge count={5} className="cart_logo" offset={[-10, 0]}>
                        <Link to="/cart">
                            <img src={topcart}/>  

                        
                        </Link>
                    </Badge>
                    <div className="search_con">
                        <div className="btn"></div>

                        <input type="text" placeholder="搜索商品名称" className="search"/>
                    </div>

                 
                </Col>
                <Col span={3}></Col>
            </Row>
        </div>
    )
    
}



export default Header;