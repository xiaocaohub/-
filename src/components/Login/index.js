import {useState} from "react";
import {useHistory} from "react-router-dom";
import {Form, Input, Button, message} from "antd";

import "./index.css";
import checkedImg from "../../assets/check_true_icon.png";
import checkedFalseImg from "../../assets/check_false_icon.png";
import {loginApi} from "../../api/login";

import {setStorageFn} from "../../utils/localStorage";
 
function LoginPage (props) {
    const [messageApi, contextHolder] = message.useMessage();
    const [autoLoginFlag, setAutoLognFn] = useState(false);
    const history = useHistory();
    console.log('history')

    console.log(history)

    console.log("history")
    function autoLoginFn () { 
        const flag = autoLoginFlag;
        setAutoLognFn(!flag)
    }

    function loginFn () {
        let formData = new FormData();
        formData.append("api", "app.login.login");
        formData.append("storeId", 1);
        formData.append("storeType", 6);
        formData.append("phone", "000000");
        formData.append("password", "000000");
        loginApi(formData).then(function (res) {
            console.log(res)
            let data = res.data.data;
            setStorageFn("token", data.access_id);
            


            setStorageFn("storeId", 1)
            setStorageFn("storeType", 6)  
            if (data.access_id) {
                messageApi.open({
                    type: 'success',
                    content: '登陆成功',

                    duration: 10,
                });
                setTimeout(()=>{
                    history.push("/");
                }, 2500)
            }
            
           
           //   history.push("/");
        })
    }



 
    return (
        <Form className="login_form_con login-form" >   
            <div className="title">账号密码登录</div>        
            <Form.Item  >

                <Input placeholder="请输入账号" className="put_val"></Input>
            </Form.Item>
            
            <Form.Item>
                <Input placeholder="请输入密码" className="put_val"></Input>
            </Form.Item>
            
            <Form.Item>
                <div className="sub_btn" onClick={loginFn}>登 录</div>

            </Form.Item>

            <Form.Item>    

                <div className={autoLoginFlag?"select_con on":"select_con"} onClick={autoLoginFn}>下次自动登录</div>                   
                <div className="forget_btn" onClick={props.forgetFn}>忘记密码</div>
            </Form.Item>
            {contextHolder}
        </Form>
    )
    
}



export default LoginPage;


 