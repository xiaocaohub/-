import React from "react";
import {Form, Input, Button} from "antd";
import "./index.css";

import checkedImg from "../../assets/check_true_icon.png";
import checkedFalseImg from "../../assets/check_false_icon.png";
class LoginPage extends React.Component {
    constructor (props) {
        super(props)
    }    
    render () {
        return (
            <Form className="login_form_con login-form" >
                <div className="title">账号密码登录</div>
                <Form.Item>
                    <Input placeholder="请输入账号" className="put_val"></Input>
                </Form.Item>
                
                <Form.Item>
                    <Input placeholder="请输入密码" className="put_val"></Input>
                </Form.Item>
             
                <Form.Item>
                    <div className="sub_btn">登 录</div>
                </Form.Item>
                <Form.Item>
                    <div className="select_con">下次自动登录</div>
                    <div className="forget_btn">忘记密码</div>
                </Form.Item>
            </Form>
        )
    }
}


export default LoginPage;