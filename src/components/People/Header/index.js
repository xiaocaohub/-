import React from "react";
import {Link} from "react-router-dom";
import "./index.css"

import logo from "../../../assets/footer_logo.png";

function Header () {
    return (
        <div className="people_header_con">
    
                <Link to="/" className="logo_a"><img src={logo} alt="" className="logo"/></Link>
                <div className="title">管理后台</div>
                <ul className="top_nav">
                    <li className="on">

                        <div className="icon"></div>
                        <p>首页</p>
                    </li>
                    <li>
                        <div className="icon"></div>
                        <p>店铺</p>
                    </li>
                    <li>
                        <div className="icon"></div>
                        <p>订单</p>
                         
                    </li>
                    <li>
                        <div className="icon"></div>
                        <p>财务</p>
                    </li>
                </ul>

                <div className="out_btn">退出</div>





                <div className="phone_con">
                    <div className="phone_title">欢迎您, 13800138000</div>
                    <ul className="btn_list">
                        <li>修改密码</li>

                        <li className="out_b">退出登录</li>
                    </ul>
                </div>
        </div>
    )
}


export default Header;