import React,{useState} from "react";
import "./index.css";
import {Link} from "react-router-dom";
import {Row, Col, Badge } from "antd";
import {useHistory} from "react-router-dom";
import logo from "../../assets/logo.png";
import shoppingCart from "../../assets/shopping_cart.png";
import searchBtn from "../../assets/search.png";
var  navArr = [
    { id: 1, title: "首页", check: 1, path: "/"},
    { id: 2, title: "新品推荐", check: 0, path: "/login"},
    { id: 3, title: "产品中心", check: 0, path: "/center" },
    { id: 4, title: "产品系列", check: 0, path: "/xilie" },

    { id: 5, title: "大师灵感", check: 0, path: "/dashi" },
    { id: 6, title: "云设计",   check: 0, path: "/design" },
    { id: 7, title: "关于珞珂", check: 0, path: "/luoke"}
]; 

function Header (props) {
    const history = useHistory();
    let [navArrList, setNavFn] = useState(navArr);
    function selectNavFn (index) {
        let newNavArr = JSON.parse(JSON.stringify(navArr));
        newNavArr.forEach((item, i)=>{
            item.check = 0;
            if (i=== index) { 
                item.check= 1;
            }
        })
        setNavFn(newNavArr)
        // history.push("/login")
    }
    return (
        <div className="header">
            <div className="header_top">
                <div className="login_con">    
            
            
                    <span>更懂年轻人的国潮家居品牌</span>    
                    <div className="btn_group">
                        <Link to="/register" className="btn">注册</Link>
                        <Link to="/login" className="btn">登录</Link>    
                    </div>
                </div>
            </div>
     
            <div className="header_bottom_con">    
                <div   className="header_bottom">
                    <div className="left">
                        <Link to="/login">     
                            <img src={logo} alt=""/>   
                        </Link>
                        <ul className="nav_list">
                            {navArrList.map((item,index)=>{
                                return (<li className={item.check==1?'on':''}  key={item.id} onClick={()=>{selectNavFn(index)}} >
                                      {item.title}
                                </li>)
                            })}
                        </ul>
                    </div>
                    <div className="right">
                        <div className="search_con">
                            <input type="text" placeholder="搜索商品名称"/>
                            <div className="btn"></div>  
                        </div>
                        <div className="cart_icon">
                            <Badge count={2 } overflowCount={999} offset={[-10, 0]}>
                                <Link to="/login"> 
                                    <img src={shoppingCart} alt=""/> 
                                </Link>
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>     
        </div>
    )
}

export default Header;