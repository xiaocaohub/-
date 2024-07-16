import React from "react";
import footerLogo from "../../assets/footer_logo.png";
import "./index.css";

import iconA from "../../assets/footer_icon1.png";
import iconB from "../../assets/footer_icon2.png";
import iconC from "../../assets/footer_icon3.png";
import iconD from "../../assets/footer_icon4.png";
import codeA from "../../assets/footer_code1.png";
import codeB from "../../assets/footer_code2.png";
class Footer extends React.Component {
    render () {
        return (
            <div className="footer">
                <div className="content">
                    <div className="left_con">
                        <div className="logo_con">
                            <img src={footerLogo}/>
                            <span className="logo_txt">为舒适而生</span>
                        </div>
                        <ul className="icon_list">
                            <li>
                                <img src={iconA}/>
                                <span>年轻潮流范</span>
                            </li>

                            <li>
                                <img src={iconB}/>
                                <span>高颜高品质</span>
                            </li>
                            <li>
                                <img src={iconC}/>
                                <span>支持个性定制</span>
                            </li>
                            <li>
                                
                                <img src={iconD}/>
                                <span>极致售后保障</span>
                            </li>
                        </ul>
                    </div>
                    <ul className="address_con">
                        <li className="address">广东省深圳市龙岗区黄屋路10号</li>
                        <li className="telephone">0755-23906666</li>
                        <li className="time">09:00～18:30</li>
                    </ul>
                    <ul className="code_list">
                        <li>
                            <img src={codeB}/>
                            <span>微信公众号</span>
                        </li>
                        <li>
                            <img src={codeA}/>
                            <span>微信小程序</span>
                        </li>
                    </ul>
                </div>

                <div className="copy">备案号：粤ICP备123456号</div>
            </div>
        )
    }
}

export default Footer;