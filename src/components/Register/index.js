import React from "react";
import {Form, Input, Button} from "antd";
import "./index.css";

import checkedImg from "../../assets/check_true_icon.png";
import checkedFalseImg from "../../assets/check_false_icon.png";
class RegisterPage extends React.Component {
    constructor (props) {
        super(props)
    }    
    render () {
        return (
            <Form className="register_form_con login-form" >
                <div className="title">设置密码</div>
                <Form.Item className="item">

                    <Input placeholder="请输入手机号" className="put_val"></Input>
                </Form.Item>
                
                <Form.Item className="item">
                    <Input placeholder="设置密码" className="put_val"></Input>
                </Form.Item>
                
                <Form.Item className="item">
                    <Input placeholder="设置密码" className="put_val"></Input>
                </Form.Item>
             
                <Form.Item className="item">
                    <Input placeholder="确认新密码" className="put_val"></Input>
                </Form.Item>

                <Form.Item>
                    <div className="sub_btn">确认重置</div>
                </Form.Item>
            </Form>
        )
    }
}


export default RegisterPage;