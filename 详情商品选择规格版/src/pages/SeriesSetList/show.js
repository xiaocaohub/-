import React from "react";
import {Row, Col, Pagination, ConfigProvider } from "antd";
import Good from "../../components/SeriesSetList/Good";

import {getGoodListApi} from "../../api/SeriesSetList";

import { getStorageFn, setStorageFn } from "../../utils/localStorage";
import banner from "../../assets/seriesset_list.png";
import SmallCart from "../../components/SmallCart";
import GoodNav from "../../components/SeriesSetList/GoodNav";
import request from "../../api/request";
import EmptyPage from "../../components/Empty";
import "./index.css";

import zh_CN from 'antd/es/locale/zh_CN';
class Show extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            // 系列集
            brandId: parseInt(props.match.params.id),        
            goodListArr: [],
            goodList: [],
            brandInfo: "",
            goodInfo: "",
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
                keyword: ""
            },
            optionIdsFlag: false
        }
    }
    componentDidMount () {
        this.init()
        this.getGoodListFn()
        this.totalCartGoodCountFn()
    }
    init = ()=> {
        console.log("window.location")
        console.log(window.location)
        console.log("window.location")
        let search = window.location.search;
        let keyword = "";
        let optionIds = this.state.optionIds;
        if (search && search.indexOf("keyword")!=-1) {
            keyword = decodeURIComponent(search.split("keyword=")[1]);
            optionIds.keyword = keyword;
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
    //     let formData = new FormData();
    //     let option = {"brandId":"","minPrice":"","maxPrice":""};
    //     let storeId = getStorageFn("storeId") || 1;

    //     let storeType = getStorageFn("storeType") || 6;
    //     let productClass = "";

    //     let styleId = "";
    //     if (optionIds) {
    //         if (optionIds.spaceSid && optionIds.spaceId) {
    //             productClass = "-" + optionIds.spaceSid + "-" + optionIds.spaceId + "-";
    //         }
    //         if (optionIds.categoryId) {
    //             productClass += optionIds.categoryId + "-";
    //         }
    //         if (optionIds.styleId) {
    //             styleId = optionIds.styleId;
    //         }
    //     }
    //     formData.append("api", "app.product.listProduct");
    //     formData.append("storeId", storeId);
    //     formData.append("storeType", storeType);
    //     formData.append("page", this.state.currentPage);
    //     formData.append("pageSize", this.state.pageSize);   
    //     formData.append("brandId", this.state.brandId);
    //     formData.append("productClass", productClass);
    //     formData.append("styleIds",  styleId);

    //     formData.append("sortCriteria", "");        
    //     formData.append("queryCriteria",  JSON.stringify(option));
    //     formData.append("sort", "");
    //     request({
    //         url: "/api/gw",
    //         method: "POST",
    //         data: formData
    //     }).then((res)=> {
    //         let resData =  res.data.data;
    //         let goodList = resData.goodsList;    
    //         let brandInfo = resData.brandInfo;
    //         let total = resData.total;
    //         this.setState({
    //             brandInfo: brandInfo,
    //             goodList: goodList,
    //             total: total
    //         })
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
        let formData = new FormData();

        let option = {"brandId":"","minPrice":"","maxPrice":""};
        let storeId = getStorageFn("storeId") || 1;       
        let storeType = getStorageFn("storeType") || 6;
   
        formData.append("api", "app.product.listProduct");
        formData.append("storeId", storeId);
        formData.append("storeType", storeType);
        formData.append("page", this.state.currentPage);
        formData.append("pageSize", this.state.pageSize);   
        formData.append("productClass", optionIds.productClass);
        formData.append("styleIds",  optionIds.styleId);
        formData.append("sortCriteria", optionIds.sortCriteria);
        formData.append("productLabel", optionIds.productLabel);
        formData.append("keyword", optionIds.keyword);
        formData.append("queryCriteria",  JSON.stringify(option));
        formData.append("sort", optionIds.sort);
        formData.append("brandId", this.state.brandId);
      
        request({
            url: "/api/gw",
            method: "POST",
            data: formData
        }).then((res)=> {
            let resData =  res.data.data;
            let goodList = resData.goodsList;   
            let brandInfo = resData.brandInfo; 
            let total = resData.total;
            console.log("brandInfo brandInfo")
            console.log(resData)
            console.log("brandInfo brandInfo")
            this.setState({
                brandInfo: brandInfo,
                goodList: goodList,
                total: total,
                goodInfo: resData
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
            <div className="series_list_page">                
                <div className="content_common_width">
                    <div className="banner_con">
                        <img src={this.state.brandInfo.brand_image} alt="" className="banner"/>
                        <div className="banner_text">
                            <div className="title">{this.state.brandInfo?this.state.brandInfo.brand_name:"---"}</div>
                            <div className="txt">{this.state.brandInfo?this.state.brandInfo.brand_introduce:"---"}</div>
                            <div className="companey_name">{this.state.goodInfo.mchName}</div>
                            <div className="btn">在售商品{this.state.total}款</div>
                        </div>
                    </div>
                    
      


                    {this.state.optionIdsFlag && <GoodNav getGoodListFn={this.getGoodListFn} total={this.state.total} optionIds={this.state.optionIds}></GoodNav>}
                    <div className="good_list">
                        {this.state.goodList.length>0 && this.state.goodList.map((item, index)=>{
                            return (
                                <Good goodItem={item} key={item.id}></Good>
                            )
                        })}
                    </div>

                    {this.state.goodList.length==0 && <EmptyPage></EmptyPage>}
                    {/* <Pagination showQuickJumper defaultCurrent={1} total={this.state.total} className="page"/> */}
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
                {this.props.state.commonState.showCartFlag && <SmallCart hideSmallCart={this.props.hideSmallCartFn} totalCartGoodCountFn={this.totalCartGoodCountFn}></SmallCart>}
            </div>
        )
    }
}



export default Show;