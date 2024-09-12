import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import "./index.css";
import {Row, Col, Badge, message} from "antd";
import logo from "../../assets/logo.png";
import topcart from "../../assets/shopping_cart.png";
import { getStorageFn } from "../../utils/localStorage";

function Header () {
    const dispatch = useDispatch();
    const navList = [
        {id: 0, title: "首页", path: "/"},
        {id: 1, title: "新品鉴", path: "/recommendegood"},

        {id: 2, title: "产品仓", path: "/productroom"},
        {id: 3, title: "系列集", path: "/series"},
        // {id: 4, title: "艺术家", path: "/artist"},
        // {id: 5, title: "云设计"},
        {id: 6, title: "认识我", path: "/us"}
    ]
    const [currentIndex, setIndexFn] = useState(0);
    const [userInfo, setUserInfoFn] = useState("");
    let [goodCount, setGoodCountFn] = useState(0);
    
    let [searchValue, setSearchValueFn] = useState("");
    const history = useHistory();
    const storeData = useSelector(state=>state)
   
    useEffect(()=>{
        getGoodListFn()
        getUserInfoFn()
        matchNav()
    }, [storeData.commonState.goodCount, window.location.href])

    function getUserInfoFn () {
    
    
        let userInfo = JSON.parse(getStorageFn("userInfo"));
        setUserInfoFn(userInfo)
    }
    function selectNavFn (index) { 
    
        setIndexFn(index)
    
        const url = navList[index].path;
        history.push(url)
    } 
    function showSmallCartFn () {
        dispatch({type:"show_small_cart", payload: true})
    }
    function loginOutFn () {
        window.localStorage.clear()
        message.success('退出成功');
        setTimeout(()=>{
            history.push("/login")
        }, 2000)
    } 
    function matchNav () {
        let pathname = window.location.pathname;
        let pathNameArr = pathname.split("build/");
        let pathNameFirst = pathNameArr[1];
        let pathUrl = "";
        let currentIndex = 0;
        
        if (pathNameFirst && pathNameFirst.indexOf("/") != -1) {
            pathUrl = pathNameFirst.split("/")[0];
        } else {
            pathUrl = pathNameFirst;
        }
       
        if (pathUrl) {
            navList.forEach((item, index)=>{
                if (item.path.indexOf(pathUrl) != -1) {
                    currentIndex = index;
                }
            })
        }   
        setIndexFn(currentIndex)
    }
    function getGoodListFn () {
        let goodCount = storeData.commonState.goodCount;
        setGoodCountFn(goodCount)
    }
    function searchValueFn (e) {
        let value = e.target.value;
        setSearchValueFn(value)
    }
    function searchFn () {
        let  searchValueStr = encodeURIComponent(searchValue);
        window.location.href = "/build/productroom?keyword=" + searchValueStr;
        // window.location.href = "/productroom?keyword=" + searchValue;
    } 
    return (
        <div className="header_con">
            <div className="header_top">            
                <div className="content_common_width_noover" >
                    <span className="title" onClick={getUserInfoFn}>更懂年轻人的国潮家居平台</span>
                    {/* {userInfo && <div className="login_btn" onClick={loginOutFn}>退出</div>} */}
                    {userInfo && 
                        <div className="header_img">
                            <div className="phone">{userInfo.phone}</div>
                            <ul className="btn_group">
                                <li><Link to="/people/order/list">会员后台</Link></li>
                                {/* <li>查看供货价</li> */}
                               
                                <li onClick={loginOutFn}>退出登录</li>
                            </ul>
                        </div>
                    }     
                    {/* {userInfo && <img src={userInfo.headimgurl} alt="" className="header_img"/>}          */}
                    {!userInfo && <Link to="/login" className="login_btn">登录</Link>}
                    {!userInfo && <Link to="/register" className="login_btn">注册</Link>}
                </div>
            </div>
            
            <div className="header_bottom_con">
                <div className="header_bottom content_common_width">
                        <Link to="/" className="logo">
                            {/* <img src={logo} className="logo_img" alt=""/> */}
                        </Link>
                        <ul className="nav_list">
                        {navList.map((item, index)=>{
                                return (<li key={item.id} className={currentIndex==index?"on":""} onClick={()=>{selectNavFn(index)}}>{item.title}</li>)
                        })}
                        </ul>
                
                        <Badge count={goodCount} className="cart_logo" offset={[-10, 0]} onClick={showSmallCartFn}>           
                            <img src={topcart}/>    
                        </Badge>
                        {/* <Link to="/cart">
                            <img src={topcart}/>      
          n              </Link> */}

                        <div className="search_con">
                            <div className="btn" onClick={searchFn}></div>
                            <input type="text" placeholder="商品名称/编码/型号" value={searchValue} onChange={searchValueFn} className="search"/>
                        </div>    
                </div>
            </div>
        </div>
    )
}


export default Header;