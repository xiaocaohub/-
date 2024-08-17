import React from "react";
import {Row, Col} from "antd";
import { Pagination,   ConfigProvider } from 'antd';

import zh_CN from 'antd/es/locale/zh_CN';
import "./index.css";
import Header from "../../components/Header";

import GoodNav from "../../components/ProductRoom/GoodNav";
import Good from "../../components/ProductRoom/Good";
import request from "../../api/request";
class Show extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            goodList: [],

            total: 0,
            currentPage: 1,
            pageSize: 40
        }
    }

    componentDidMount () {
        this.getGoodListFn()
    }
    pageOnChange = (pageNumber)=> {
        // console.log(pageNumber)
    }
    getGoodListFn = ()=> {
        let formData = new FormData();
        let option = {"brandId":"","minPrice":"","maxPrice":""};
        formData.append("api", "app.product.listProduct");
        formData.append("storeId", 1);
        formData.append("storeType", 6);
        formData.append("page", this.state.currentPage);
        formData.append("pageSize", this.state.pageSize);
        
        
        formData.append("styleIds", "")
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
            
            let total = resData.total;
            this.setState({
                goodList: goodList,
                total: total
            })
        })
    }
    render () {
        return (
            <Row className="product_room_con">           
                <Col span={3}></Col>
                
                <Col span={18}>
                    <GoodNav></GoodNav>

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
            </Row>
        )
    }
}

export default Show;