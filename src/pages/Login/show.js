import React from "react";
import {Link} from "react-router-dom";
import loginBack from "../../assets/login_small_back.png";

import LoginPage from "../../components/Login";
import RegisterPage from "../../components/Register";
import "./index.css";
class Login extends React.Component {
    render () {
        return (
            <div className="login_page">
                <div className="login_con">
                    <img src={loginBack} className="login_back"/>
                    <div className="form_con">
                         {/* <LoginPage></LoginPage>   */}
                        
                        <RegisterPage></RegisterPage>
                    </div>
                    <Link to="/" className="home_btn">返回首页</Link>
                </div>
            </div>
        )
    }
}



export default Login;