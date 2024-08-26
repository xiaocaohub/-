import React,{useEffect, useState } from "react";
import {Row, Col} from "antd";
import bannerImg from "../../assets/us_banner.png";

import bigVedio1 from "../../assets/big_vedio1.mp4";

import totalBanner from "../../assets/total_banner.png";
import "./index.css";
function Show () {
        useEffect(() => {
             console.log("us useEffect")
             play()
        }, []);
        function play () {
 
            const video = document.getElementById("videoSmall");

            video.autoplay = true;
            video.style.outline = "none";
        }
        return (
            <div className="us_page_con">
                <img src={bannerImg} className="banner_img"/>
                <Row>
                    <Col span={3}></Col> 





                    <Col span={18}>
                        <div className="intro_text">
                            <div className="text_con">
                                <div className="title">珞珂是谁</div>

                                <div className="txt">
                                    <p> LUOCKOO | 珞珂家居创立于2014年, 坐落于深圳市龙岗区, 专注软体家具的研发、生产与销售, 是深圳新崛起的一线国潮家居品牌, 致力于提供更懂年轻人, 更符合国人审美, 更舒适有品的家居解决方案。用互联网技术全面赋能装企、家居从业者、设计师等提供产品、设计、成交、营销、管理等美学场景立体化解决方案和服务。</p>
                                    <p>【珞珂】意指美玉，代表着传承、坚持与追求传承中国文化与精神，做有态度有价值的中国制造坚持品质与匠心，做高质价比高舒适度的家居产品追求审美与创新，做更懂年轻人的国潮家居品牌</p>
                                    
                                </div>
                            </div>


                            
                            <div className="big_video_con">
                             
                                <video  className="big_video" src={bigVedio1} id="videoSmall" muted></video>
                                {/* <div className="play_btn" onClick={play}></div> */}
                            </div>
                        </div>

                        <div className="brand_con">
                            <div className="title_con">

                                <div className="tit">BRAND POSITIONING</div>
                                <div className="title">品牌定位</div>
                                <div className="line"></div>
                            </div>

                            <ul className="brand_list">
                                <li>
                                    <div className="icon"></div>
                                    <div className="title">目标客群</div>
                                    <div className="line"></div>
                                    <ul className="text_list">
                                        <li>
                                            <div className="txt">Y/Z</div>
                                            <div className="txt">世代</div>
                                        </li>
                                        <li>
                                            <div className="txt">新中产</div>
                                            <div className="txt">群体</div>
                                        </li>
                                    </ul>
                                    <div className="tit">
                                        <span>追求原价比</span>
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon"></div>
                                    <div className="title">产品定位</div>
                                    <div className="line"></div>
                                    <ul className="text_list">
                                        <li>
                                            <div className="txt">国际潮流</div>
                                            <div className="txt">设计产品</div>
                                        </li>
                                        <li>
                                            <div className="txt">国内设计</div>
                                            <div className="txt">原创产品</div>
                                        </li>
                                    </ul>
                                    <div className="tit">
                                        <span>国潮元素 中国制造</span>
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon"></div>
                                    <div className="title">价格定位</div>
                                    <div className="line"></div>
                                    <ul className="text_list">
                                        <li>
                                            <div className="txt">大平层</div>
                                            <div className="txt">别墅</div>
                                        </li>
                                        <li>
                                            <div className="txt">大户型</div>
                                            <div className="txt">豪宅</div>
                                        </li>
                                        <li>
                                            <div className="txt">小户型</div>
                                            <div className="txt">轻奢</div>
                                        </li>
                                    </ul>
                                    <div className="tit">
                                        <span>100-300m²</span>
                                        <span>整屋零售6-20W+</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="brand_total_con"></div>
                    </Col>
                </Row>
            </div>
        )
    

}




export default Show;