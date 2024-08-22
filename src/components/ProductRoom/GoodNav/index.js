import React from "react";
import {Breadcrumb } from "antd";


import { CaretRightOutlined , UpOutlined,  DownOutlined, DeleteOutlined, CloseOutlined } from '@ant-design/icons';

import "./index.css";
import request from "../../../api/request";
import {getStorageFn} from "../../../utils/localStorage";
class GoodNav extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            // 空间导航
            spaceNavArr: [],

            currentSpaceId: "",
            currentSpaceSid: "",
            currentSpacePname: "",
            // 品类导航
            categoryNavArr: [],  

            currentCategoryId: "",
            navOption: {
                spacePname: "",
                spaceSid: "",  
                spaceId: "",
                categoryId:  "",
                categoryPname: "",
                styleId: "",
                stylePname: ""
            },
            // 风格导航
            styleHover: true,
            styleNavArr: [
                // {   id: 0, text: "现代", checked: false }
            ],


            styleIdSelectArr: [],
            styleNameSelectArr: []
        }
    }

    componentDidMount () {
        this.getSpaceNavFn()
        this.getStyleNavFn()
    }
    styleSelectMoreFn = ()=> {
        let styleHover = !this.state.styleHover; 
        this.setState({
            styleHover: styleHover
        })
    }
    selectStyleHoverFn = (index)=> {
       
        let styleNavArr = this.state.styleNavArr;
        let styleId = styleNavArr[index].id;
        let navOption = this.state.navOption;
        navOption.styleId = styleId;
        navOption.stylePname = styleNavArr[index].text;
        this.getSpaceGoodListFn(navOption);
        this.setState({
            styleNavArr: styleNavArr,
            navOption: navOption
        })
    }
    selectStyleFn = (index)=> {
        let styleNavArr = this.state.styleNavArr;
        styleNavArr[index].checked = !styleNavArr[index].checked;
        let navOption = this.state.navOption;
        let styleIdSelectArr = [];
        let styleNameSelectArr = [];
        styleNavArr.forEach((item, i)=>{
            if (item.checked) {
                styleIdSelectArr.push(item.id)
                styleNameSelectArr.push(item.text)
            }
        })
        // let styleId = styleIdSelectArr.join(",");
        // let stylePname = styleNameSelectArr.join(", ");
        // navOption.styleId = styleId;
        // navOption.stylePname = stylePname;
       
        this.setState({
            styleNavArr: styleNavArr,
            styleIdSelectArr: styleIdSelectArr,
            styleNameSelectArr: styleNameSelectArr
            // navOption: navOption
        })
    }
    cancelStyleFn = ()=> {
        this.setState({
            styleHover: true
        })
    }
    submitStyleFn = ()=> {
        let navOption = this.state.navOption;
        let styleIdSelectArr =  this.state.styleIdSelectArr;
        let styleNameSelectArr = this.state.styleNameSelectArr;
        let styleId = styleIdSelectArr.join(",");
        let stylePname = styleNameSelectArr.join(", ");
        // console.log("styleIdSelectArr")
        // console.log("styleIdSelectArr", styleIdSelectArr)
        // console.log("styleNameSelectArr", styleNameSelectArr)
        // console.log("styleIdSelectArr")
        navOption.styleId = styleId;
        navOption.stylePname = stylePname;
        this.setState({
            styleHover: true,   
            navOption: navOption
        }, function () {

            this.getSpaceGoodListFn(navOption);
        })
    }
    getSpaceNavFn = ()=> {
        let _this = this;
        let formData = new FormData();
        formData.append("api", "app.product.getSpaceClassList");
        formData.append("storeId", 1);
        formData.append("storeType", 6);
        request({
            url: "/api/gw",
            method: "POST",
            data: formData
        }).then((res)=> {
            let resData =  res.data.data;
            let currentSpaceId = resData[0].cid;
            let currentSpaceSid = resData[0].sid;
            let currentSpacePname = resData[0].pname;
            _this.setState({
                spaceNavArr: resData,
                currentSpaceId: currentSpaceId,
                currentSpaceSid: currentSpaceSid,
                currentSpacePname: currentSpacePname


            }, function () {
                _this.getCategoryNavFn()
            })
        })
    }
    getCategoryNavFn = ()=> {
        let _this = this;
        let formData = new FormData();

        formData.append("api", "app.product.getSecondClassList");   
        formData.append("parentId", this.state.currentSpaceId);
        formData.append("storeId", 1);
        formData.append("storeType", 6);
        request({
            url: "/api/gw",
            method: "POST",
            data: formData
        }).then((res)=> {
            let resData =  res.data.data;  
            resData.forEach((item, index)=> {

                item.checked = false;
            }) 
            _this.setState({

                categoryNavArr: resData
            })
        })
    }
    getStyleNavFn = ()=> {
        let _this = this;
        let formData = new FormData();
        let storeId = getStorageFn("storeId") || 1;
        let storeType = getStorageFn("storeType") || 6;
        formData.append("api", "saas.dic.getDictionaryInfo");
        formData.append("storeId", storeId);  
        formData.append("storeType", storeType);
        formData.append("page", 1);
        formData.append("pageSize", 6);
        formData.append("key", "");
        formData.append("pageSize", 10);
        request({
            url: "/api/gw",
            method: "POST",
            data: formData
        }).then((res)=> {
            let resData =  res.data.data.list;
            
            resData.forEach((item, index)=>{
                item.checked = false;
            })
            _this.setState({
                styleNavArr: resData
            })
        })
    }
    selectSpaceFn = (item)=> {  // 选择空间导航
        let _this = this;
        let navOption = this.state.navOption;
        navOption.spacePname = item.pname;
        navOption.spaceSid = item.sid;
        navOption.spaceId = item.cid;
        navOption.categoryId = "";
        navOption.categoryPname = "";
        this.setState({
            currentSpaceId: item.cid,
            currentSpaceSid: item.sid,
            currentSpacePname: item.pname,
            navOption: navOption
        }, function () {
            this.getCategoryNavFn()
            _this.getSpaceGoodListFn(navOption)
        })
    }
    getSpaceGoodListFn = (option)=> {
        this.props.getGoodListFn(option)
    }

    selectCategoryNavFn = (item, index)=> {
        console.log("item cate")
        console.log(item)
        console.log("item cate")
         

        let _this = this;
        let navOption = this.state.navOption;
        if (!navOption.spaceSid) {
            navOption.spaceSid = _this.state.currentSpaceSid;
        }
        if (!navOption.spaceId) {
            navOption.spaceId = _this.state.currentSpaceId;
        }
        if (!navOption.spacePname) {
            navOption.spacePname = _this.state.currentSpacePname;
        }
        let categoryNavArr = this.state.categoryNavArr;
        categoryNavArr.forEach((item, i)=>{
            item.checked = false;
        })
      



        categoryNavArr[index].checked = true;
        navOption.categoryPname = item.pname;
        navOption.categoryId =  item.cid;
        this.setState({
            currentCategoryId: item.cid,
            categoryPname: item.pname,
            navOption: navOption,
            categoryNavArr: categoryNavArr
        }, function () {

            _this.getSpaceGoodListFn(_this.state.navOption)
        })
    }
    clearNavFn = ()=> {
        let navOption = {
            spacePname: "",
            spaceSid: "",  
            spaceId: "",
            categoryId:  "",
            categoryPname: "",
            styleId: "",
            stylePname: ""
        }
        let styleNavArr = this.state.styleNavArr;
        styleNavArr.forEach((item, index)=> {
            item.checked = false;
        })
     
     
        this.setState({
            navOption: navOption,
            styleNavArr: styleNavArr,
            styleIdSelectArr: [],

            styleNameSelectArr: []
        }, function () {
            this.getSpaceGoodListFn(this.state.navOption)
        })
    }
    clearSpaceFn = ()=> {
        let navOption =  {
            spacePname: "",
            spaceSid: "",  
            spaceId: "",
            categoryId:  "",
            categoryPname: "",
            styleId: "",
            stylePname: ""
        }
        console.log("spaceNavArr")
        console.log(this.state.spaceNavArr)
        console.log("spaceNavArr")
        let currentSpaceId = this.state.spaceNavArr[0].cid;
        this.setState({
            navOption: navOption,
            styleIdSelectArr: [],
            styleNameSelectArr: [],
            currentSpaceId: currentSpaceId
        }, function () {
            this.getCategoryNavFn()
            this.getSpaceGoodListFn(navOption)
        })
    }
    clearCategoryFn = ()=> {
        let navOption = this.state.navOption;
        navOption.categoryId = "";
        navOption.categoryPname = "";
        let categoryNavArr = this.state.categoryNavArr;
        categoryNavArr.forEach((item)=> {
            item.checked = false;
        })




        this.setState({
            navOption: navOption,
            categoryNavArr: categoryNavArr
        })
        this.getSpaceGoodListFn(navOption)
    }


    clearStyleFn = ()=> {
        let navOption = this.state.navOption;
        navOption.styleId = "";
        navOption.stylePname = "";
        this.setState({
            navOption: navOption
        })
        this.getSpaceGoodListFn(navOption)
    }
    render () { 
        return (
            <div className="good_nav_con">
                <div className="breadcrumb_con">
                    <Breadcrumb  separator={<CaretRightOutlined />} className="breadcrumb">     
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item><a href="">产品仓</a></Breadcrumb.Item>
                        <Breadcrumb.Item>共 {this.props.total} 款宝贝</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className="select_nav_con">


                        {(this.state.navOption.spacePname || this.state.navOption.categoryPname || this.state.navOption.stylePname) &&  <div className="clear_all" onClick={this.clearNavFn}>清空 <DeleteOutlined /></div>}
                        {this.state.navOption.spacePname &&  <div className="select_nav_item" onClick={this.clearSpaceFn}>{this.state.navOption.spacePname} <CloseOutlined /></div>}
                        {this.state.navOption.categoryPname && <div className="select_nav_item" onClick={this.clearCategoryFn}>{this.state.navOption.categoryPname} <CloseOutlined /></div>}
                        {this.state.navOption.stylePname && <div className="select_nav_item" onClick={this.clearStyleFn}> {this.state.navOption.stylePname} <CloseOutlined /></div>}
                    </div>

                    <div className="show_btn_a">收起筛选 <UpOutlined /></div>
                </div>
                <div className="good_nav">
                    {   !this.state.navOption.spacePname &&
                        <div className="nav_list_con">
                            <div className="title">空间</div>
                            <ul className="nav_list"> 
                                {this.state.spaceNavArr.map((item, index)=> {
                                    return (<li key={item.cid} onClick={()=>{this.selectSpaceFn(item)}}> {item.pname}
                                        {/* sid{item.sid} =  cid -{item.cid} */}
                                    </li>)
                                })}
                            </ul>
                    
                    
                            {/* <div className="slect_more">+多选</div>
                                <div className="show_btn">收起 <DownOutlined /></div> */}
                        </div>
                    }

                    <div className="nav_list_con">
                        <div className="title">品类</div>
                        <ul className="nav_list">
                            
                            {this.state.categoryNavArr.length>0 && this.state.categoryNavArr.map((item, index)=> {
                                return (<li className={item.checked?"category_item on": "category_item"} key={item.cid} onClick={()=>{this.selectCategoryNavFn(item, index)}} data-id= {item.cid}>{ item.pname }</li>)
                            })}
                        </ul>
 
                        {/*  <div className="slect_more">+多选</div> */}
                        <div className="show_btn">收起 <DownOutlined /></div> 
                    </div>

                    
                    {!this.state.navOption.stylePname &&
                        <div className= {this.state.styleHover?"nav_list_con":"nav_list_con on"}>
                            <div className="title">风格</div>
                            <ul className = "nav_list on">
                                {this.state.styleNavArr.map((item, index)=>{
                                    return ( this.state.styleHover? (<li key={index} onClick={()=>{this.selectStyleHoverFn(index)}} data-id={item.id}>{item.text} </li>) : 
                                                (<li onClick={()=>{this.selectStyleFn(index)}} key={index}>                                                
                                                    <div className = {item.checked?"select on": "select"}></div>
                                                    <span data-id={item.id}>{item.text}</span>
                                                </li>)
                                    )
                                })}
                                
                                {this.state.styleHover?
                                "":
                                    (<div className="btn_group">     
                                        <div className="btn sub_btn" onClick={this.submitStyleFn}>提交</div>
                                        <div className="btn cancel_btn" onClick={this.cancelStyleFn}>取消</div>
                                    </div>)
                                }       
                            </ul>

                            <div className="slect_more" onClick={this.styleSelectMoreFn}>+多选</div>
                            {/* <div className="show_btn">收起 <DownOutlined /></div> */}
                        </div>
                    }

                    {/* <div className="nav_list_con">
                        <div className="title">系列</div>
                        <ul className="nav_list">                        
                            <li> 全屋·柏林M1</li>
                        </ul>

                        <div className="slect_more">+多选</div>
                        <div className="show_btn">收起 <DownOutlined /></div>
                    </div> */}
                </div>
            </div>
        )
    }
}


export default GoodNav;