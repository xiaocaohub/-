import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Form, Switch } from "antd";

import {CHECK_SUPPLY_PRICE, SWITCH_SUPPLY_PRICE} from "../../../actionType/common";

import {setStorageFn, getStorageFn} from "../../../utils/localStorage";
import "./index.css";

function PasswordShadowSwitch () {
    let dispatch = useDispatch();
    let [status, setStatus] = useState(false);
    function closeShadowFn () {
        dispatch({type: SWITCH_SUPPLY_PRICE, payload: false})
    } 

    function supplyPriceStatusFn (status) {
        console.log(status)
        setStatus(status)
       
    }

    function subMitFn () {
        let pathname = window.location.pathname;
  

        setStorageFn("supplyPriceStatus", status)
        dispatch({type: SWITCH_SUPPLY_PRICE, payload: false})
        if (pathname.indexOf("productroom/detail/") != -1) {

            window.location.reload();
        }
    }
    return (
        <div className="password_shadow_con">
            <div className="shadow"></div>
    
            <Form className="form_con" layout="vertical">
                <div className="title">
                    <span className="tit">B端密码</span>
                    <span className="close_btn" onClick={closeShadowFn}></span>
                </div>

                <div className="switch_con">  <span className="tit" >查看供货价</span> <Switch value={status} onChange={supplyPriceStatusFn}/> </div>          
                <div className="sub_btn" onClick={subMitFn}>确定</div>
            </Form>

        </div>
    )
}


export default PasswordShadowSwitch;