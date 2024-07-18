import React from "react";
import {Form, Input, Button} from "antd";
import "./index.css";

import checkedImg from "../../assets/check_true_icon.png";
import checkedFalseImg from "../../assets/check_false_icon.png";
class RegisterPage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 60,
            setFlag: false
        }
    }    
    getCodeFn = () => {
        
        const _this = this;
        this.setState({
            setFlag: true
        })
        const set = setInterval(function () {
            const count = _this.state.count - 1; 
            _this.setState({
                count: count
            })
        
            if (count === 0) {
                clearInterval(set)
                _this.setState({
                    setFlag: false,
                    count: 60
                })
            }
        }, 1000)
    }
    render () {
        return (
            <form className="register_form_con">
                <div className="title">设置密码</div>
                <div className="item_put">

                    <input type="text" className="put_val" placeholder="请输入手机号"/>
                    
                    <div className="msg">请输入正确手机号</div>
                </div>
                <div className="item_put">
             
                    <input type="text" className="put_val code_val" placeholder="请输入验证码"/>
                    <div className="msg">请输入正确验证码</div>
                    <div className={this.state.setFlag?"code_btn": "code_btn on"} onClick={this.getCodeFn}>{"获取验证码"}</div>  
                    <div className={this.state.setFlag?"code_btn on": "code_btn"}>{"还剩"+this.state.count+"秒"}</div>
                </div>
                <div className="item_put"> 
                    <input type="text" className="put_val" placeholder="设置密码"/>
                    <div className="msg">请输入设置密码</div>
                </div>
                <div className="item_put">
                    <input type="text" className="put_val" placeholder="确认新密码"/>
                    <div className="msg">密码不一致</div>
                </div>
                <div className="sub_btn">确认重置</div>
            </form>
        )
    }
}


export default RegisterPage;