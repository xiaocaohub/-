import React from "react";
import {Link} from "react-router-dom";
import {Input} from "antd";

import { RightOutlined, StarOutlined, ShareAltOutlined } from '@ant-design/icons';
import codeImg from "../../../assets/footer_code2.png";
import "./index.css";
class DetailInfo extends React.Component {
    constructor (props) {
        super(props)
        // console.log("show detail props")
        // console.log(props.goodDetail.attrList)
        this.state = {
            currentIndex: 1,
            bigImg: require("../../../assets/vedio_list1.png"),
            
            bigHeight: 450,
            count: 1,
            colorArr: [],
            currentColorIndex: 0,
            sizeArr: [],

            currentSizeIndex: 0,
            // 所有规格商品
            allGoodArr: [],
            // 选中的商品 colorId, sizeId
            selectGoodIds: [],
            // 选中的商品
            currentGood: props.goodDetail.skuBeanList[0]
        }   
    }
    componentDidMount () {
       this.initDataFn()
       this.setBigImgHeightFn()
    }
    initDataFn = ()=> {
        let attrList = this.props.goodDetail.attrList;


        let colorArr = attrList[0].attr;
        let sizeArr = attrList[1].attr;
        let allGoodArr = this.props.goodDetail.skuBeanList;
        let selectGoodIds = [];
        
        selectGoodIds[0] = colorArr[0].id;
        selectGoodIds[1] = sizeArr[0].id;
        let goodFirst = this.props.goodDetail.skuBeanList[0];
        
        this.setState({
            colorArr: colorArr,
            sizeArr: sizeArr,
            allGoodArr: allGoodArr,
            selectGoodIds: selectGoodIds,
            currentGood: goodFirst,
            bigImg: goodFirst.imgurl
        }, function () {
            // console.log("colorArr", this.state.colorArr)
            // console.log("sizeArr", this.state.sizeArr)
            // console.log("allGoodArr", this.state.allGoodArr)
            // console.log("selectGoodIds", this.state.selectGoodIds)
            // console.log("goodFirst", goodFirst)
        })  
    }
    setBigImgHeightFn () {
        let bigImg = document.getElementById("big_img");
        let width = bigImg.width;
        let height = (width * 2) / 3;
        let smallImg = document.querySelectorAll(".img_nav li")[0];
        let smallWidth = smallImg.clientWidth;
        let smallHeight = (smallWidth * 3) / 4;
        this.setState({
            bigHeight: height,
            smallHeight: smallHeight
        })
    }
    selectNavFn = (index, item)=> {
        this.setState({
            currentIndex: index,
            bigImg: item
        })
    }
    changeCountFn = (e) => {
        let value = e.target.value;
        this.setState({
            count: value
        })
    }
    handleCountFn = (dir)=> {
        let count = this.state.count;
        if (dir<0) {

            if (count>=2) {
                count -= 1;
            }
        } else {
            count += 1;
        }
        this.setState({
            count: count
        })
    }
    selectColorFn = (index)=> {
        let color = this.state.colorArr[index];
        let selectGoodIds = this.state.selectGoodIds;
        selectGoodIds[0] = color.id;
        this.setState({
            currentColorIndex: index,
            selectGoodIds: selectGoodIds
        }, function () {
            this.selectGoodFn()
        })
    }


    selectSizeFn = (index)=> {
    
        let size = this.state.sizeArr[index];
        let selectGoodIds = this.state.selectGoodIds;    
        selectGoodIds[1] = size.id;

        this.setState({
    
            currentSizeIndex: index,
            selectGoodIds: selectGoodIds
        }, function () {
            this.selectGoodFn()
        })
    }
    selectGoodFn () {
        let allGoodArr = this.state.allGoodArr;
        let selectGoodIds =  this.state.selectGoodIds;
        let length = allGoodArr.length;
        let currentGood = "";
        for (let i=0; i<length; i++) {
            let attributes = allGoodArr[i].attributes;
            let flag = attributes[0].attributeValId == selectGoodIds[0] && attributes[1].attributeValId == selectGoodIds[1];           
            if (flag) {


                allGoodArr[i].imgArr = allGoodArr[i].imgArr;
                currentGood = allGoodArr[i];
                console.log("currentGood", currentGood)
            }
        }
        let bigImg = currentGood.imgurl;
        console.log("currentGood", currentGood)
        this.setState({
            currentGood: currentGood,
            bigImg: bigImg,
            currentIndex: 0
        })
    }
    render () {
        return (
            <div className="detail_info_con">
                <div className="detail_info">             
                    <div className="left">
                        <img src={this.state.bigImg} alt="" className="big_img" id="big_img"   style={{height: this.state.bigHeight + "px"}}/>
                        <ul className="img_nav">

                            {/* {this.state.currentGood?
                                this.state.currentGood.imgArr.map((item, index)=> {
                                    return (<li className={this.state.currentIndex==index?"small_img on":"small_img"}  style={{height:this.state.smallHeight + "px"}} onClick={()=>{this.selectNavFn(index, item)}} key={index}>
                                   
                                        <img src={item} alt=""  />
                                    </li>)
                                }):
                        
                                this.props.goodDetail.skuBeanList[0].imgArr.map((item, index)=> {
                                    return (<li className={this.state.currentIndex==index?"small_img on":"small_img"}   style={{height: this.state.smallHeight + "px"}} onClick={()=>{this.selectNavFn(index, item)}} key={index}>
                                        <img src={item} alt=""  />
                                    </li>)
                                })
                            }   */}
                            {
                                this.state.currentGood.imgArr.map((item, index)=> {
                                    return (<li className={this.state.currentIndex==index?"small_img on":"small_img"}  style={{height:this.state.smallHeight + "px"}} onClick={()=>{this.selectNavFn(index, item)}} key={index}>
                                        <img src={item} alt=""  />
                                    </li>)
                                })
                            }
                            
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
                            <div className="tit_txt">{this.props.goodDetail.product.productName}</div>
                            <div className="intro">{this.props.goodDetail.product.subTitle}</div>
                        </div>

                        <div className="price"><span className="unit">￥</span>{this.state.currentGood?this.state.currentGood.price:this.props.goodDetail.skuBeanList[0].price}</div>
                        <div className="specifications_con">
                            <div className="title_name">颜色</div>
                            <ul className="specifications_list">
                                {this.state.colorArr && this.state.colorArr.map((item, index)=> {
                                    return (<li className={this.state.currentColorIndex==index?"on":""} key={item.id} onClick={()=>{this.selectColorFn(index)}}>{item.attributeValue}</li>)
                                })}
                                
                            </ul>
                        </div>

                        <div className="specifications_con">
                            <div className="title_name">规格</div>
                            <ul className="specifications_list">
                               
                                {this.state.sizeArr && this.state.sizeArr.map((item, index)=>{
                                    return (<li className={this.state.currentSizeIndex==index?"on":""} key={item.id} onClick={()=>{this.selectSizeFn(index)}}>{item.attributeValue}</li>)
                                })}                               
                            </ul>
                        </div>

                        <div className="specifications_con">
                            <div className="title_name">编码</div>
                            <div className="code_con">{this.state.currentGood?this.state.currentGood.productCode:this.props.goodDetail.skuBeanList[0].productCode}</div>
                        </div>

                        <div className="specifications_con">
                            <div className="title_name">模型</div>
                            <div className="download_btn">点击下载</div>
                        </div>



                        <div className="specifications_con">
                            <div className="title_name">数量</div>
                            <div className="count_con">
                                <div className="btn" onClick={()=>{this.handleCountFn(-1)}}>-</div>
                                
                                <Input className="count" value={this.state.count} onChange={this.changeCountFn}/>      
                                <div className="btn" onClick={()=>{this.handleCountFn(1)}}>+</div>
                            </div>
                        </div>

                        <div className="buy_con">
                            <div className="btn buy_btn">加入购物车</div>
                            <div className="btn">定制询价</div>
                            <div className="small_btn">
                                <StarOutlined className="icon"/> 收藏
                            </div>
                            <span className="line"></span>
                            <div className="small_btn share_btn">
                                <ShareAltOutlined className="icon"/> 分享
                                <img src={codeImg} alt="" className="code_img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailInfo;