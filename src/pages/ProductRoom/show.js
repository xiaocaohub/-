import React from "react";
import {Row, Col} from "antd";
import { Pagination,   ConfigProvider } from 'antd';

import zh_CN from 'antd/es/locale/zh_CN';
import "./index.css";
import Header from "../../components/Header";
import Good from "../../components/ProductRoom/Good";
import request from "../../api/request";

class Show extends React.Component {
    constructor (props) {
          super(props)
    }
    pageOnChange = (pageNumber)=> {

        console.log(pageNumber)
    }
    getGoodListFn = ()=> {
        let formData = new FormData();
        let option = {"brandId":"","minPrice":"","maxPrice":""};
        
        formData.append("api", "app.prodcut.listProduct");
        formData.append("storeId", 1);
        formData.append("storeType", 6);
        formData.append("page", 1);
        formData.append("pageSize", 2);
        formData.append("styleIds", "")
        formData.append("sortCriteria", "");

        formData.append("queryCriteria",  JSON.stringify(option));
        formData.append("sort", "")
        request({
            url: "/api/gw",
            method: "POST",
            data: formData
        })
    }


    render () {
        return (
            <Row className="product_room_con">
                
                <Col span={3}><button onClick={this.getGoodListFn}>click me</button></Col>
                <Col span={18}>
                    <div className="nav_con"></div>  
                    <ul className="product_list">
                        <Good></Good>
                        <Good></Good>
                        <Good></Good>
                        <Good></Good>
                        <Good></Good>       
                        <Good></Good>
                        <Good></Good>
                        <Good></Good>
                    </ul>




                    <div className="page_con">    
                        <ConfigProvider locale={zh_CN}>
                            <Pagination
                                className="page"
                                style={{ textAlign: "right" }}
                                total={1000}
                                defaultCurrent={1}
                                showSizeChanger
                                showQuickJumper
                                showTotal={totalCount => `共 1000 条`}
                                onChange={(params, state) => {
                                    // pageParams.pageIndex = params;
                                    // pageParams.pageSize = 10;
                                    // pageParams.id = props.policyid;
                                    // setPage(params);
                                    // setSize(10)
                                    // getDataByPage(pageParams)
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