import React from "react";
import {Row, Col} from "antd";
import { Pagination,   ConfigProvider } from 'antd';

import zh_CN from 'antd/es/locale/zh_CN';
import "./index.css";
import Header from "../../components/Header";

import GoodNav from "../../components/ProductRoom/GoodNav";
import Good from "../../components/ProductRoom/Good";
import request from "../../api/request";
import SmallCart from "../../components/SmallCart";
import {getStorageFn,setStorageFn} from "../../utils/localStorage";
import {scrollTopFn} from "../../utils/imgAuto";
class Show extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            goodList: [],
            total: 0,
            currentPage: 1,
            pageSize: 16
        }
    }
    componentDidMount () {
        // this.getSpaceNavFn()
        this.getGoodListFn()
        scrollTopFn()
    }
    pageOnChange = (pageNumber)=> {
        // console.log(pageNumber)
    }
    getGoodListFn = (optionIds)=> {
        console.log("optionIds", optionIds)
        // console.log("spaceId", spaceId)
        // console.log("categoryId", categoryId)
        let formData = new FormData();
        let option = {"brandId":"","minPrice":"","maxPrice":""};
        let storeId = getStorageFn("storeId") || 1;
       
       
        let storeType = getStorageFn("storeType") || 6;
        let productClass = "";
        let styleId = "";
        let sortCriteria = "";

        let productLabel = "";
        let sort = "";
        if (optionIds) {
            if (optionIds.spaceSid && optionIds.spaceId) {
                productClass = "-" + optionIds.spaceSid + "-" + optionIds.spaceId + "-";
            }
            
            if (optionIds.categoryId) {
                productClass += optionIds.categoryId + "-";
            }
            styleId = optionIds.styleId;

            if (optionIds.sortCriteria) {

                sortCriteria = optionIds.sortCriteria;
            }
            if (optionIds.productLabel) {
                productLabel = optionIds.productLabel;
            }

            if (optionIds.sort) {
                sort = optionIds.sort;
            }
            console.log("productClass: " + productClass)
            console.log("productClass styleId: " + styleId)
        }
       
        
        formData.append("api", "app.product.listProduct");
        formData.append("storeId", storeId);
        formData.append("storeType", storeType);
        formData.append("page", this.state.currentPage);
        formData.append("pageSize", this.state.pageSize);   
        
        formData.append("productClass", productClass);
        formData.append("styleIds",  styleId);
        formData.append("sortCriteria", sortCriteria);
        
        formData.append("productLabel", productLabel);
        formData.append("queryCriteria",  JSON.stringify(option));
        
        formData.append("sort", sort);
        request({
            url: "/api/gw",
            method: "POST",
            data: formData
        }).then((res)=> {
            console.log(res)
            let resData =  res.data.data;
            let goodList = resData.goodsList;    
            let total = resData.total;
            this.setState({
                goodList: goodList,
                total: total
            })
        })
    }

    // getSpaceNavFn = ()=> {
    //     let _this = this;
    //     let formData = new FormData();
    //     formData.append("api", "app.product.getSpaceClassList");
    //     formData.append("storeId", 1);
    //     formData.append("storeType", 6);
    //     request({
    //         url: "/api/gw",
    //         method: "POST",
    //         data: formData
    //     }).then((res)=> {
    //         let resData =  res.data.data;
    //         _this.setState({
    //             spaceNavArr: resData
    //         })
    //     })
    // }

    // 统计购物车数量
    totalCartGoodCountFn = ()=> {
    
        let _this = this;
        let formData = new FormData();
        let token = getStorageFn("token");
        formData.append("api", "app.cart.index");    
        formData.append("accessId", token);  
        formData.append("storeId", 1);
        formData.append("storeType", 6);
        request({
            url: "/api/gw",         
        
            method: "POST",    
        
        
            data: formData
        }).then((res)=> {
            let resData = res.data.data.data;
            _this.setState({
            
                cartArr: resData
            
            },function () {
                let cartArr = _this.state.cartArr;
                let length = cartArr.length;
                _this.props.totalCartGoodCountFn(length)
            })
            setStorageFn("cartArr", resData)
        })
    }
    render () {
        return (
            <Row className="product_room_con">           
                <Col span={3}></Col>
                
                <Col span={18}>
                    <GoodNav getGoodListFn={this.getGoodListFn} total={this.state.total}></GoodNav>

                    <ul className="product_list">
                        {this.state.goodList.map((item)=> {
                            return (<Good key={item.id} itemData={item}></Good>)
                        })}
                    </ul>

                    <div className="page_con">    
                        <ConfigProvider locale={zh_CN}>
                            <Pagination
                                className="page"
                                style={{ textAlign: "center" }}
                                total={this.state.total}
                                defaultCurrent={1}
                                showSizeChanger = {false}
                                showQuickJumper
                                pageSize={this.state.pageSize}
                                current={this.state.currentPage}
                                // showTotal={totalCount => "总条数" + this.state.total + "条"}
                                onChange={(params, state) => {
                                    this.setState({
                                        currentPage: params
                                    }, function () {
                                        this.getGoodListFn()
                                    })
                                }}
                                onShowSizeChange = {(current, size)=>{
                                    this.setState({
                                        pageSize: size
                                    })
                                }}
                                />
                        </ConfigProvider>
                    </div>
                </Col>
                <Col span={3}></Col>
                {this.props.state.commonState.showCartFlag && <SmallCart hideSmallCart={this.props.hideSmallCartFn} totalCartGoodCountFn={this.totalCartGoodCountFn}></SmallCart>}
            </Row>
        )
    }
}



export default Show;