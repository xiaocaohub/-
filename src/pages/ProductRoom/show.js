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
import EmptyPage from "../../components/Empty";

class Show extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            goodList: [],
            total: 0,
            currentPage: 1,
            pageSize: 16,

            optionIds: {
                categoryId: "",
                categoryPname: "",
                productLabel: "",
                sort: "",
                sortCriteria: "",
                spaceId: "",
                spacePname: "",
                spaceSid: "",
 
                productClass: "",


                styleId: "",
                stylePname: "",
                keyWord: ""
            },

            optionIdsFlag: false, // 是否渲染导航
            
            keyword: ""
        }
    }
    componentDidMount () {
        // this.getSpaceNavFn()
        this.init()
        scrollTopFn()
        // console.log("window.location")
        // console.log(window.location)
        // console.log("window.location")
        // this.getGoodListFn()
        this.totalCartGoodCountFn()
    }

    init = ()=> {
        let search = window.location.search;      
        let optionIds = this.state.optionIds;
 
        console.log("window.location")

        console.log(optionIds)
        console.log("window.location")
    
        if (search && search.indexOf("keyword")!=-1) {
            let keyword = search.split("keyword=")[1];
            optionIds.keyWord = keyword;
        } 

        if (search && search.indexOf("keyword") == -1) {

console.log("keyword ----------------")
            optionIds.keyWord = "";
            console.log("optionIds optionIds")
            console.log(optionIds)
            console.log("optionIds optionIds")
        }

        if (search && search.indexOf("productLabel") != -1) {
            let productLabel = search.split("productLabel=")[1];
            optionIds.productLabel = productLabel;
        }
        
        this.setState({
            // keyword: keyword
            optionIds: optionIds,
            optionIdsFlag: true
        }, function () {
            this.getGoodListFn()
        })
    }
    // getGoodListFn = (optionIds)=> {
    //     console.log("optionIds", optionIds)
    //     let formData = new FormData();
    //     let option = {"brandId":"","minPrice":"","maxPrice":""};
    //     let storeId = getStorageFn("storeId") || 1;       
    //     let storeType = getStorageFn("storeType") || 6;
    //     let productClass = "";
    //     let styleId = "";
    //     let sortCriteria = "";
    //     let productLabel = "";
    //     let sort = "";
    //     this.setState({
    //         optionIds: optionIds
    //     })

    //     if (optionIds) {
    //         if (optionIds.spaceSid && optionIds.spaceId) {
    //             productClass = "-" + optionIds.spaceSid + "-" + optionIds.spaceId + "-";
    //         }
            
    //         if (optionIds.categoryId) {
    //             productClass += optionIds.categoryId + "-";
    //         }
    //         styleId = optionIds.styleId;

    //         if (optionIds.sortCriteria) {
    //             sortCriteria = optionIds.sortCriteria;
    //         }
    //         if (optionIds.productLabel) {
    //             productLabel = optionIds.productLabel;
    //         }

    //         if (optionIds.sort) {
    //             sort = optionIds.sort;
    //         }
    //     }
       
    //     formData.append("api", "app.product.listProduct");
    //     formData.append("storeId", storeId);
    //     formData.append("storeType", storeType);
    //     formData.append("page", this.state.currentPage);
    //     formData.append("pageSize", this.state.pageSize);   
    //     formData.append("productClass", productClass);
    //     formData.append("styleIds",  styleId);
    //     formData.append("sortCriteria", sortCriteria);
    //     formData.append("productLabel", productLabel);
    //     formData.append("keyword", this.state.keyword);
    //     formData.append("queryCriteria",  JSON.stringify(option));
    //     formData.append("sort", sort);
    //     request({
    //         url: "/api/gw",
    //         method: "POST",
    //         data: formData
    //     }).then((res)=> {
    //         let resData =  res.data.data;
    //         let goodList = resData.goodsList;    
    //         let total = resData.total;
    //         this.setState({
    //             goodList: goodList,
    //             total: total
    //         })
    //     })
    // }
    // getGoodListFn = (option)=> {
    //     let productClass = "";
    //     let optionIds = this.state.optionIds;

    //     if (option) {
    //         if (option.spaceSid && option.spaceId) {
    //             productClass = "-" + option.spaceSid + "-" + option.spaceId + "-";
    //             optionIds.productClass = productClass;
    //         }
            
    //         if (option.categoryId) {
    //             productClass += option.categoryId + "-";
    //             optionIds.productClass = productClass;
    //         }
    //     }
    //     this.setState({
    //         optionIds: optionIds
    //     }, function () {
    //         this.requestGoodListFn()
    //     })
    // }
    getGoodListFn = (option)=> {
        let productClass = "";
     
     
        let optionIds = this.state.optionIds;

        if (option) {
            if (option.spaceSid && option.spaceId) {
                productClass = "-" + option.spaceSid + "-" + option.spaceId + "-";
                option.productClass = productClass;
            }
            
            if (option.categoryId) {
                productClass += option.categoryId + "-";
                option.productClass = productClass;
            }
            optionIds = option;
        }

        this.setState({
            optionIds: optionIds
        }, function () {
            this.requestGoodListFn()
        })
    }

    requestGoodListFn = ()=> {
        let optionIds = this.state.optionIds;
        // console.log("optionIds optionIds request")
        // console.log(optionIds)
        // console.log("optionIds optionIds request")
        let formData = new FormData();
        let option = {"brandId":"","minPrice":"","maxPrice":""};
        let storeId = getStorageFn("storeId") || 1;       
        let storeType = getStorageFn("storeType") || 6;
        
        let keyWord = "";
        if (optionIds.keyWord) {
            keyWord =  encodeURIComponent(optionIds.keyWord);
        } 
       
        formData.append("api", "app.product.listProduct");
        formData.append("storeId", storeId);
        formData.append("storeType", storeType);
        formData.append("page", this.state.currentPage);
        formData.append("pageSize", this.state.pageSize);   
        formData.append("productClass", optionIds.productClass);
        formData.append("styleIds",  optionIds.styleId);
        formData.append("sortCriteria", optionIds.sortCriteria);
        formData.append("productLabel", optionIds.productLabel);
        formData.append("keyword", keyWord);
        formData.append("queryCriteria",  JSON.stringify(option));
        formData.append("sort", optionIds.sort);
        request({
            url: "/api/gw",
            method: "POST",
            data: formData
        }).then((res)=> {
            let resData =  res.data.data;
            let goodList = resData.goodsList;    
            let total = resData.total;
            this.setState({
                goodList: goodList,
                total: total
            })
        })
    }
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
            <div className="product_room_con">           
                <div className="content_common_width">
                    {this.state.optionIdsFlag && <GoodNav getGoodListFn={this.getGoodListFn} total={this.state.total} optionIds={this.state.optionIds}></GoodNav>}
                
                    <ul className="product_list">
                        {this.state.goodList.length>0 && this.state.goodList.map((item)=> {
                        
                            return (<Good key={item.id} itemData={item}></Good>)
                        })}
                    </ul>
                    
                    {this.state.goodList.length == 0 && <EmptyPage></EmptyPage>}

                    {this.state.goodList.length>0 && <div className="page_con">    
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
                                            this.getGoodListFn(this.state.optionIds)
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
                    }
                </div>
             
                {this.props.state.commonState.showCartFlag && <SmallCart hideSmallCart={this.props.hideSmallCartFn} totalCartGoodCountFn={this.totalCartGoodCountFn}></SmallCart>}
            </div>
        )
    }
}



export default Show;