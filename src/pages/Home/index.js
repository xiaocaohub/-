import React from "react";
import {Link} from "react-router-dom";
import {Row, Col, Carousel } from "antd";
import BannerCon from "../../components/Banner";
import VideoShadow from "../../components/VideoShadow";
import HotSell from "../../components/HotSell";
import RecommendGood from "../../components/Home/RecommendGood";
import "./index.css";

 

import hostBig from "../../assets/hot_sales_big.png";
import hostSmalla from "../../assets/hot_sales_small1.png";
import hostSmallb from "../../assets/hot_sales_small2.png";
import bigVedio1 from "../../assets/big_vedio1.mp4";
import vedioList1 from "../../assets/vedio_list1.png";
import playVedio from "../../assets/play.png";
 
import popularBanner from "../../assets/popular_img.png";
class Home extends React.Component {
    constructor(props) {
 
        super(props)
        this.state = {
            currentVideoIndex: 0,
            vidioList: [
                {
                    id: 0,
                    img: require("../../assets/vedio_list1.png")
                },
                {
                    id: 1,
                    img: require("../../assets/vedio_list1.png")
                },
                {
                    id: 2,
                    img: require("../../assets/vedio_list1.png")
                }
            ],
            videoShowFlag: false,
            styleNavList: [
                {
                    id:0,
                 
                    title: "极简",
                    checked: true
                },
                {
                    id:0,
                    title: "现代",
                    checked: false
                },
                {
                    id:0,
                    title: "奶油",
                 
                    checked: false
                }
            ]
        }
    }
    componentDidMount () {
        this.play()
    }
    play = ()=> {
        const video = document.getElementById("video");
        video.autoplay = true;
        video.style.outline = "none";
    }
    showVideoFn = (index)=> {
        this.setState({
            videoShowFlag: true,
            currentVideoIndex: index
        })
    }
    closeVideoFn = ()=> {
        this.setState({
            videoShowFlag: false
        })
    }
    styleChangeFn = (index)=>{
        let styleNavList = this.state.styleNavList;
        styleNavList.forEach((item, i)=>{
            item.checked = false;
            if (i===index) {
                item.checked = true;
            }
        })
        this.setState({
            styleNavList: styleNavList
        })
    }
    render () {
        return (
            <div>
                <BannerCon></BannerCon>

                <div className="hot_sales">
                    <div className="hot_big">
                        <img src={hostBig} alt=""/>
                    </div>
                    <div className="host_small">
                        <div className="host_m host_m_f">
                            <img src={hostSmalla} alt=""/>
                            <div className="btn">即可搜索</div>
                        </div>

                        <div className="host_m">
                            <img src={hostSmallb} alt=""/>
                            <div className="btn">即可搜索</div>
                        </div>
                    </div>
                </div>

                <div className="hot_sale_text">
                    <p className="small_title">Quality of life</p>
                    <p className="big_title  animate__animated animate__zoomIn">LUOCKOO HOME</p>
                    <p className="txt">品质生活，从细节开始</p>
                    <p className="txt">让每一处空间都有故事, 每一款产品都有灵魂</p>
                    <p className="txt">打造温馨舒适的家, 让生活更美好</p>
                </div>

                <div className="vedio_con">
                    <video  className="video" src={bigVedio1} id="video" muted   
                    ></video>

                    <div className="shadow_con">
                        <div className="shadow"></div>
                        <div className="vedio_content">
                            <div className="text_con">
                                <div className="text">
                                    <span>一分钟看视频</span>
                                    <div className="tit">VIDEO INTRDUCED</div>
                                </div>
                                <div className="search_more_btn">搜索更多</div>
                            </div>

                            <ul className="vedio_list">
                                {this.state.vidioList.map((item, index)=>{
                                    return (
                                        <li key={item.id}>
                                            <img src={vedioList1} className="video_img"/>
                                            <img src={playVedio} className="play_vedio" onClick={()=>{this.showVideoFn(index)}}/>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                {this.state.videoShowFlag&&<VideoShadow currentVideoIndex={this.state.currentVideoIndex} closeVideoFn={this.closeVideoFn}/>}
           
                <div className="new_product_con">
                    <div className="big_title">
                        <div className="txt">年轻态 轻生活</div>
                        <div className="title">NEW ARRIVALS <br/>  新品推荐</div>
                    </div>
                    
                    <div className="good_list">
                        <RecommendGood></RecommendGood>
                        <RecommendGood></RecommendGood>
                        <RecommendGood></RecommendGood>
                        <RecommendGood></RecommendGood>
                        <RecommendGood></RecommendGood>
                        <RecommendGood></RecommendGood>
                    </div>
                    
                    <Link to="/login" className="search_more_btn">搜索更多</Link>
                </div>

                <HotSell></HotSell>

                <img src={popularBanner} className="popular_banner"/>
                
                <div className="style_table_list">
                    <ul className="nav_list">
                       {this.state.styleNavList.map((item, index)=>{
                            return (
                                <li key={item.id} className={item.checked?"on":""} onClick={()=>{this.styleChangeFn(index)}}>{item.title}</li>
                            )
                       })}
                    </ul>

                    <ul className="list">
                        <RecommendGood></RecommendGood>
                        <RecommendGood></RecommendGood>
                        <RecommendGood></RecommendGood>
                        <RecommendGood></RecommendGood>
                        <RecommendGood></RecommendGood>
                        <RecommendGood></RecommendGood>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home;