import React from "react";
import {Row, Col, Pagination } from "antd";
import Good from "../../components/SeriesSetList/Good";

import {getGoodListApi} from "../../api/SeriesSetList";
import { getStorageFn } from "../../utils/localStorage";
import banner from "../../assets/seriesset_list.png";

import GoodNav from "../../components/SeriesSetList/GoodNav";
import request from "../../api/request";
import EmptyPage from "../../components/Empty";
import "./index.css";
class Show extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            brandId: parseInt(props.match.params.id),        
            goodListArr: [],
            goodList: [],
            brandInfo: "",
            total: 0,
            currentPage: 1,
            pageSize: 16
        }
    }
   
    componentDidMount () {
        this.getGoodListFn()
    }

    getGoodListFn = (optionIds)=> {
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
            let resData =  res.data.data;

            let goodList = resData.goodsList;    
            let brandInfo = resData.brandInfo;
            let total = resData.total;
            console.log("resData set goodList")
            console.log(resData)
            console.log("resData set goodList")
            this.setState({
                brandInfo: brandInfo,
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
                        <div className="banner_con">
                            <img src={this.state.brandInfo.brand_image} alt="" className="banner"/>
                            <div className="banner_text">
                                <div className="title">{this.state.brandInfo?this.state.brandInfo.brand_name:"---"}</div>
                                <div className="txt">{this.state.brandInfo?this.state.brandInfo.brand_introduce:"---"}</div>
                                <div className="btn">在售商品{this.state.total}款</div>
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

                        {this.state.goodList.length==0 && <EmptyPage></EmptyPage>}
                        <Pagination showQuickJumper defaultCurrent={1} total={this.state.total} className="page"/>
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </div>
        )
    }
}



export default Show;