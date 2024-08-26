import React,{useEffect, useState } from "react";
import {Row, Col} from "antd";
import bannerImg from "../../assets/us_banner.png";

import bigVedio1 from "../../assets/big_vedio1.mp4";

import totalBanner from "../../assets/total_banner.png";

import vedioImg from "../../assets/rsw_pic.png";
import competeIcon1 from "../../assets/icon/service_cycle.png";
import competeIcon2 from "../../assets/icon/competence.png";
import flow from "../../assets/flow.png";
import science1 from "../../assets/science1.png";
import luockooAdvantage from "../../assets/luockoo_advantage.png";
import science2 from "../../assets/science2.png";
import science3 from "../../assets/science3.png";

import science4 from "../../assets/science4.png";
import science5 from "../../assets/science5.png";
import science6 from "../../assets/science6.png";
import VedioShadow from "../../components/Home/VedioShadow";
import "./index.css";
class Show extends React.Component {
        constructor (props) {
            super(props)
            this.state = {
                
                currentVedioIndex: 0,
                vedioShadowFlag: false
            }
        } 
        play = ()=> {
            this.setState({
                vedioShadowFlag: true
            })
        }
        closeVedioFn = ()=> {
            


            this.setState({
                vedioShadowFlag: false
            })
        }
        render () {
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
    
                                <div className="video_con"  onClick={this.play}>
                                 
                                    <img src={vedioImg} alt=""/>
                                    <div className="play_btn" onClick={this.play}></div>
                                </div>
                            </div>
    
                            {/* <div className="brand_con">
                                <div className="brand_title_con">
    
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
                            </div> */}
                        </Col>
                    </Row>




                    <Row className="brand_con">
                        <Col span={3}></Col>
                        <Col span={18}>
                            <div  >
                                <div className="brand_title_con">
    
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
                        </Col>
                        <Col span={3}></Col>
                    </Row>

                    <Row className="brand_total_con">                       
                        <Col span={3}></Col>
                        <Col span={18}>
                            <ul className="total_list">
                                <li>
                                    <div className="title">10年</div>
                                    <div className="tit">深圳</div>
                                    <div className="tit">品牌</div>
                                </li>
                                <li>
                                    <div className="title">1000000+</div>
                                    <div className="tit">用户</div>
                                    <div className="tit">至爱之选</div>
                                </li>
                                <li>
                                    <div className="title">20000m²</div>
                                    <div className="tit">深惠国际化</div>
                                    <div className="tit">生产基地</div>
                                </li>
                                <li>
                                    <div className="title">2000+SKU</div>
                                    <div className="tit">高颜高品</div>

                                    <div className="tit">高质量产品</div>
                                </li>
                            </ul>
                        </Col>
                        <Col span={3}></Col>
                    </Row>


                    <Row>
                        <Col span={3}></Col>
                        <Col span={18}>
                        
                            <div className="compete_con">
                                <div className="brand_title_con">
                                    <div className="tit">CORE COMPETENCE</div>
                                    <div className="title">核心竞争力</div>
                                    <div className="line"></div>
                                </div>

                                <div className="compete_txt_con top">
                                    <div className="left">
                                        <img src={competeIcon1} alt=""/>
                                        <p>服务周期</p>
                                    </div>
                                    <div className="right">
                                        <img src={flow} alt="" className="step_img"/>
                                    </div>
                                </div>

                                <div className="compete_txt_con">
                                    <div className="left">
                                        <img src={competeIcon2} alt=""/>
                                        <p>核心竞争力</p>
                                    </div>
                                    <div className="right">
                                        <ul className="text_list">
                                            <li className="item_1">
                                                <span className="num">1</span>
                                                <p>海量产品供应体系</p>
                                            </li>
                                            <li className="item_2">
                                                <span className="num">2</span>
                                                <p>自主研发 高频推新</p>
                                            </li>
                                            <li className="item_3">
                                                <span className="num">3</span>
                                                <p>优质材料供应商库</p>
                                            </li>
                                            <li className="item_4">
                                                <span className="num">4</span>
                                                <p>严格品控 高质价比</p>
                                            </li>
                                            <li className="item_5">
                                                <span className="num">5</span>
                                                <p>创新经营SOP策略</p>
                                            </li>
                                            <li className="item_6">

                                                <span className="num">6</span>
                                                <p>全域营销 数字化赋能</p>
                                            </li>
                                        </ul>
                                    </div>
                                 </div>
                            </div>


                            <div className="product_text_con">                                
                                <div className="brand_title_con">
                                    <div className="tit">CORE COMPETENCE</div>
                                    <div className="title">核心竞争力</div>
                                    <div className="line"></div>
                                </div>

                                <ul className="text_list">
                                    <li>
                                        <img src={science1} alt=""/>
                                        <div className="text">
                                            <div className="tit">科学填充 舒适满分</div>
                                            <div className="txt">高品质东亚海绵+5a级白鹅绒+水洗棉+进口丝绵</div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={science2} alt=""/>
                                        <div className="text">
                                            <div className="tit">优质选材 高端质感</div>
                                            <div className="txt">北美进口头层黄牛皮/高定布艺面料/俄罗斯进口落叶松</div>
                                        </div>
                                    </li>
                                    <li className="short">
                                        <img src={science3} alt=""/>
                                      
                                        <div className="text">
                                            <div className="tit">匠心工艺 精益求精</div>
                                            <div className="txt">紧密剪裁/手工扪制/手工滚边</div>     
                                        </div>
                                    </li>
                                    <li className="short">
                                        <img src={science4} alt=""/>
                                        <div className="text">
                                            <div className="tit">标准化包装 层层防护</div>
                                            <div className="txt">珍珠棉+纸箱+木箱</div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={science5} alt=""/>
                                        <div className="text">
                                            <div className="tit">用户至上 体验为王</div>
                                            <div className="txt">产品标配暗印logo防尘套+材质小样</div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={science6} alt=""/>
                                        <div className="text">
                                            <div className="tit">行业高标 硬件技术领先</div>
                                            <div className="txt">CNC技术/德国杜克普缝纫机</div>
                                        </div>
                                    </li>

                                    <div className="center_con">
                                        <img src={luockooAdvantage} alt=""/>
                                    </div>
                                </ul>

                               
                            </div>
                             
                        </Col>
                        <Col span={3}></Col>
                    </Row>

                    {this.state.vedioShadowFlag && <VedioShadow index={this.state.currentVedioIndex} closeFn={this.closeVedioFn}/>}
                </div>
            )
        }

    

}




export default Show;