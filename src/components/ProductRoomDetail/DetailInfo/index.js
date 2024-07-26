import React from "react";
import {Link} from "react-router-dom";
import { RightOutlined   } from '@ant-design/icons';

import "./index.css";

class DetailInfo extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            currentIndex: 1,
            bigImg: require("../../../assets/vedio_list1.png"),
            navArr: [
                {
                    id: 0,
                    srcImg:  require("../../../assets/recomend_good1.png"),
                    navImg:  require("../../../assets/room_list_3.png")
                },
                {
                    id: 1,
                    srcImg: require("../../../assets/vedio_list1.png"),
                    navImg:  require("../../../assets/room_list_3.png")
                },
                {
                    id: 2,
                    srcImg:  require("../../../assets/recomend_good1.png"),
                    navImg:  require("../../../assets/room_list_3.png")
                },
                {
                    id: 3,
                    srcImg: require("../../../assets/vedio_list1.png"),
                    navImg:  require("../../../assets/room_list_3.png")
                },
                {
                    id: 4,
                    srcImg:  require("../../../assets/recomend_good1.png"),
                    navImg:  require("../../../assets/room_list_3.png")
                },



                {
                    id: 5,   
                    srcImg: require("../../../assets/vedio_list1.png"),
                    navImg:  require("../../../assets/room_list_3.png")
                }
            ]
        }
    }
    selectNavFn = (index)=> {
        let currentIndex = index;
        let bigImg = this.state.navArr[currentIndex].srcImg;
        this.setState({
            currentIndex: index,
            bigImg: bigImg
        })
    }
    render () {
        return (
            <div className="detail_info_con">
                <div className="detail_info">             
                    <div className="left">
                        <img src={this.state.bigImg} alt="" className="big_img"/>
                        <ul className="img_nav">
                            {this.state.navArr.map((item, index)=> {
                                return (<li className={this.state.currentIndex==index?"on":""} onClick={()=>{this.selectNavFn(index)}}>
                                    <img src={item.navImg} alt=""  />
                                </li>)
                            })}
                        </ul>
                    </div>
                    
                    <div className="right">
                        <div className="top_tit">
                            <span className="tit">原创</span>
                            <span className="txt">
                                <Link to="/">进入系列</Link> 
                                <RightOutlined className="right_icon"/>    
                            </span>
                        </div>

                        <div className="title">
                            <span className="tit">新品</span>
                            <span className="tit">现货</span>
                            <div className="tit_txt">意式极简设计师款直排高脚头层牛皮黑武士沙发</div>
                            <div className="intro">黑武士真皮沙发意式极简大户型客厅轻奢设计师直排别墅区高脚沙发黑武士真皮沙发意式极简大户型客厅轻奢设计师直排别墅区高脚沙发</div>
                        </div>

                        <div className="price"><span className="unit">￥</span>10449</div>
                        <div className="specifications_con">
                            <div className="title_name">颜色</div>
                            <ul className="specifications_list">
                                <li className="on">黑色7054</li>
                                <li>黑色7054</li>
                                <li>黑色7054</li>
                                <li>黑色7054</li>
                                <li>黑色7054</li>
                                <li>黑色7054</li>
                                <li>黑色7054</li>
                                <li>黑色7054</li>
                            </ul>
                        </div>

                        <div className="specifications_con">
                            <div className="title_name">规格</div>
                            <ul className="specifications_list">
                                <li>大三位3000*1100*700mm</li>
                                <li>大三位3000*1100*700mm</li>
                                <li>大三位3000*1100*700mm</li>
                                <li>大三位3000*1100*700mm</li>
                                <li>大三位3000*1100*700mm</li>
                                <li>大三位3000*1100*700mm</li>
                                <li>大三位3000*1100*700mm</li>
                                <li>大三位3000*1100*700mm</li>
                            </ul>
                        </div>

                        <div className="specifications_con">
                            <div className="title_name">编码</div>
                            <div className="code_con">J-YZ-YZ-HWS-3RW-HS</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailInfo;