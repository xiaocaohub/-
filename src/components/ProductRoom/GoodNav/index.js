import React from "react";
import {Breadcrumb } from "antd";
import { CaretRightOutlined , UpOutlined,  DownOutlined } from '@ant-design/icons';

import "./index.css";
class GoodNav extends React.Component {
    render () {

        return (
            <div className="good_nav_con">
                <div className="breadcrumb_con">
                    <Breadcrumb  separator={<CaretRightOutlined />} className="breadcrumb">
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item><a href="">艺术家</a></Breadcrumb.Item>
                        <Breadcrumb.Item>共100款宝贝</Breadcrumb.Item>

                    </Breadcrumb>

                    <div className="show_btn_a">收起筛选 <UpOutlined /></div>
                </div>


                <div className="good_nav">
                    <div className="nav_list_con">
                        <div className="title">空间</div>
                        <ul className="nav_list">
                            <li>客厅</li>
                            <li>餐厅</li>
                            <li>卧室</li>
                            <li>书房</li>
                            <li>儿童房</li>
                            <li>爆款套餐</li>
                        </ul>

                        {/* <div className="slect_more">+多选</div>
                        <div className="show_btn">收起 <DownOutlined /></div> */}
                    </div>


                    <div className="nav_list_con">
                        <div className="title">品类</div>
                        <ul className="nav_list">
                            <li>沙发</li>

                            <li>茶几</li>
                            <li>电视柜</li>
                            <li>床</li>
                            <li>床垫</li>
                            <li>床头柜</li>
                            <li>餐桌</li>
                            <li>餐椅</li>
                            <li>餐椅</li>
                            <li>休闲椅</li>
                            <li>卧室套装</li>
                        </ul>
{/* 
                        <div className="slect_more">+多选</div>
                        <div className="show_btn">收起 <DownOutlined /></div> */}
                    </div>

                    <div className="nav_list_con">
                        <div className="title">风格</div>
                        <ul className="nav_list">
                            <li>现代</li>
                            <li>极简</li>
                            <li>轻奢</li>
                            <li>中式</li>
                            <li>新中式</li>
                            <li>欧美</li>
                            <li>北欧</li>
                            <li>中古风</li>
                            <li>其他</li>
                        </ul>

                        <div className="slect_more">+多选</div>
                        <div className="show_btn">收起 <DownOutlined /></div>
                    </div>

                    <div className="nav_list_con">
                        <div className="title">系列</div>
                        <ul className="nav_list">                        
                            <li> 全屋·柏林M1</li>
                            <li>全屋·柏林M2</li>
                            <li>全屋·柏林M3</li>
                            <li>全屋·伦敦L2</li>
                            <li>全屋·伦敦L1</li>
                            <li>全屋·纽约N1</li>
                            <li>全屋·云想Y2</li>
                            <li>全屋·云想Y1</li>
                        </ul>

                        {/* <div className="slect_more">+多选</div> */}
                        <div className="show_btn">收起 <DownOutlined /></div>
                    </div>
                </div>
            </div>
        )
    }
}


export default GoodNav;