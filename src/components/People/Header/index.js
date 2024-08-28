import React from "react";
import {Link} from "react-router-dom";
import "./index.css"

import logo from "../../../assets/footer_logo.png";

class Header extends React.Component {
    render () {
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
            
                            <p>首页</p>
                        </li>
                        <li>
                            <div className="icon"></div>
                           
                            <p>首页</p>
                        </li>
                        <li>
                            <div className="icon"></div>
                            <p>首页</p>
                        </li>
                        
                    </ul>
            </div>
        )
    }
}

export default Header;