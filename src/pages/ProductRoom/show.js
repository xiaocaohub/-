import React from "react";
import {Row, Col} from "antd";
import { Pagination,   ConfigProvider } from 'antd';

import zh_CN from 'antd/es/locale/zh_CN';
import "./index.css";

import Header from "../../components/Header";
import Good from "../../components/ProductRoom/Good";

class Show extends React.Component {
    constructor (props) {
          super(props)
          console.log("props------")
          console.log(props)
    }
    pageOnChange = (pageNumber)=> {
        console.log(pageNumber)
    }
    render () {
        return (
            <div>
                <Header></Header>
                <Row className="product_room_con">
                    <Col span={3}></Col>

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
            </div>
        )
    }
}

export default Show;