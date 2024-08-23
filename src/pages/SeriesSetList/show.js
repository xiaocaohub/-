import React from "react";
import {Row, Col, Pagination } from "antd";
import Good from "../../components/SeriesSetList/Good";

import {getGoodListApi} from "../../api/SeriesSetList";
import { getStorageFn } from "../../utils/localStorage";
import banner from "../../assets/seriesset_list.png";

import GoodNav from "../../components/SeriesSetList/GoodNav";
import request from "../../api/request";

import "./index.css";
class Show extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            brandId: parseInt(props.match.params.id),        
            goodListArr: [],
            goodList: [],
            total: 0,
            currentPage: 1,
            pageSize: 16
        }
    }
    // getGoodListFn = ()=> {
    //     let formData = new FormData();
    //     let storeId = getStorageFn("storeId") || 1;
    //     let storeType = getStorageFn("storeType") || 6;
    //     let queryCriteria = {brandId:"88",minPrice:"",maxPrice:""};
    //     formData.append("api", "app.product.listProduct");
    //     formData.append("storeId", storeId);
    //     formData.append("storeType", storeType);
    //     formData.append("page", 1);
    //     formData.append("pageSize", 6);
    //     formData.append("queryCriteria", JSON.stringify(queryCriteria));
    //     getGoodListApi(formData).then((res)=>{     
    //         // let goodListArr = res.data.data.goodsList;
    //         console.log("-", res)
           
           


    //         // this.setState({
    //         //     goodListArr:
    //         // })
    //     })
    // }
    componentDidMount () {
        this.getGoodListFn()
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
        if (optionIds) {

            if (optionIds.spaceSid && optionIds.spaceId) {
                productClass = "-" + optionIds.spaceSid + "-" + optionIds.spaceId + "-";
            }
            
            if (optionIds.categoryId) {
                productClass += optionIds.categoryId + "-";
            }

            if (optionIds.styleId) {
                styleId = optionIds.styleId;
            }
            
            // console.log("productClass: " + productClass)
            // console.log("productClass styleId: " + styleId)
        }
      
        formData.append("api", "app.product.listProduct");
        formData.append("storeId", storeId);
        formData.append("storeType", storeType);
        formData.append("page", this.state.currentPage);
        formData.append("pageSize", this.state.pageSize);   
        formData.append("brandId", this.state.brandId);
        formData.append("productClass", productClass);
        formData.append("styleIds",  styleId);
        formData.append("sortCriteria", "");
        formData.append("queryCriteria",  JSON.stringify(option));

        formData.append("sort", "");
        request({
            url: "/api/gw",
            method: "POST",
            data: formData
        }).then((res)=> {
            // console.log(res)
            let resData =  res.data.data;
            let goodList = resData.goodsList;    
            let total = resData.total;
            this.setState({
                goodList: goodList,
                total: total
            })
        })
    }
    render () {
        return (
            <div className="series_list_page">
                <Row>
                    <Col span={3}></Col>

                    <Col span={18}>

                        <div className="banner_con" onClick={this.getGoodListFn}>
                            <img src={banner} alt="" className="banner"/>
                            <div className="banner_text">
                                <div className="title">原创系列</div>
                                <div className="txt">国潮元素/流行趋势/中国制造</div>
                                <div className="btn">在售商品998款</div>
                            </div>
                        </div>
                        
                        <GoodNav getGoodListFn={this.getGoodListFn} total={this.state.total}></GoodNav>

                        <div className="good_list">
                            {this.state.goodList.length>0 && this.state.goodList.map((item, index)=>{
                                return (
                                    <Good goodItem={item} key={item.id}></Good>
                                )
                            })}
                        </div>


                        <Pagination showQuickJumper defaultCurrent={1} total={this.state.total} className="page"/>
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </div>
        )
    }
}



export default Show;