import React from "react";
import {Row, Col} from "antd";


import "./index.css";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
import BannerCon from "../../components/BannerCon";
import HotSell from "../../components/Home/HotSell";
import VedioBanner from "../../components/Home/VedioBanner";
import Good from "../../components/Home/Good";
import HotSelling from "../../components/Home/HotSelling";








import KindGood from "../../components/Home/KindGood";

import popularImg from "../../assets/popular_img.png";
class Show extends React.Component {
    constructor (props) {

        super(props)
        this.state = {
            kindNav: [
                {id: 0, title:"极简"},
                {id: 1, title:"现代"},
                
                {id: 2, title:"奶油"}
            ],
            kindIndex: 0
        }
    }
    kindNavSelectFn = (index)=> {
        console.log(index)

        this.setState({

            kindIndex: index
        })
    }
    render () {
        return (            
            <div className="main_content">
                
                <BannerCon></BannerCon>
                <HotSell></HotSell>

                <div className="vedio_text_con">
                    <div className="small_title">Quality of life</div>
                    <div className="big_title">LUOCKOO HOME</div>
                    <div className="txt">品质生活，从细节开始<br/> 让每一处空间都有故事，每一款产品都有灵魂<br/> 打造温馨舒适的家，让生活更美好</div>
                </div>

                <VedioBanner></VedioBanner>                  
                <div className="recommend_text_con">
                    <div className="txt">年轻态 轻生活</div>
                    <div className="title">NEW ARRIVALS</div>
                    <div className="big_title">新品推荐</div>
                </div>


                <div className="recommend_good_con">
                    <Row>
                        <Col span={3}></Col>
                        <Col span={18}>
                        
                            <ul className="recommend_good_list">
                                <Good></Good>
                                <Good></Good>
                                <Good></Good>
                                <Good></Good>
                                <Good></Good>
                                <Good></Good>
                            </ul>
                            <div className="more_btn">搜索更多</div>
                        </Col>
                        <Col span={3}></Col>
                    </Row>
                </div>


                <HotSelling></HotSelling>

                <img src={popularImg} className="popular_img" alt=""/>

                <Row>
                    <Col span={3}></Col>
                    <Col span={18}>
                        <div className="king_good_list_con">
                            <ul className="nav_list">
                                {this.state.kindNav.map((item, index)=> {
                                    return (<li key={item.id} className={this.state.kindIndex===index?"on":""} onClick={()=>{this.kindNavSelectFn(index)}}>{item.title}</li>)
                                })}
                            </ul>
                            <ul className="good_list">
                                <KindGood></KindGood>
                                <KindGood></KindGood>
                                <KindGood></KindGood>
                                <KindGood></KindGood>
                                <KindGood></KindGood>

                                <KindGood></KindGood>
                            </ul>
                        </div>
                    </Col>
                    <Col span={3}></Col>
                </Row>
               
            </div>
        )
    }
}

export default Show;