import React from "react";
import {Row, Col, Breadcrumb, Pagination,   ConfigProvider} from "antd";
import zh_CN from 'antd/es/locale/zh_CN';

import Nav from "../../components/SeriesSet/Nav";
import Good from "../../components/Artist/Good";
import "./index.css";

class Artist extends React.Component {
    render () {
        return (
            <Row className="artist_con">
                <Col span={3}></Col>

                <Col span={18}>
                    <Breadcrumb separator=">" className="breadcrumb_con">
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item> 艺术家</Breadcrumb.Item>

                        <Breadcrumb.Item>共4564款宝贝</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className="artist_nav_con">
                        <Nav></Nav>
                    </div>

                    <ul className="good_list">
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




export default Artist;