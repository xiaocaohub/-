import React from "react";
import {Link} from "react-router-dom";
import {Input, message} from "antd";

import { RightOutlined, StarOutlined, ShareAltOutlined } from '@ant-design/icons';
import codeImg from "../../../assets/footer_code2.png";
import "./index.css";

 

class DetailInfo extends React.Component {
    constructor (props) {
        super(props)
        // console.log("show detail props")
        // console.log(props)

        // console.log("show detail props")
        this.state = {
            currentIndex: 1,
            bigImg: require("../../../assets/vedio_list1.png"),
            bigHeight: 450,

            count: 1,
            colorArr: [],
            currentColorIndex: 0,
            currentColor: "",
            sizeArr: [],
            currentSizeIndex: 0,
            // 所有规格商品
            allGoodArr: [],
            // 选中的商品 colorId, sizeId
            selectGoodIds: [],
            // 选中的商品
            currentGood: props.goodDetail.skuBeanList[0],
            // 选中颜色匹配上的所有商品
            allColorSizeGoodArr: []
        }   
    }

    componentDidMount () {
       this.initDataFn()
       this.setBigImgHeightFn()
    }

    initDataFn = ()=> {
        let attrList = this.props.goodDetail.attrList;
        let colorArr = attrList[0].attr;
        let colorTitle = attrList[0].attrName;
        let sizeArr = attrList[1].attr;
        let sizeTile = attrList[1].attrName;
        let allGoodArr = this.props.goodDetail.skuBeanList;
        let selectGoodIds = [];
        selectGoodIds[0] = colorArr[0].id;
        selectGoodIds[1] = sizeArr[0].id;
        let goodFirst = this.props.goodDetail.skuBeanList[0];
        
        this.setState({
            colorArr: colorArr,
            colorTitle: colorTitle,
            sizeArr: sizeArr,
            sizeTile: sizeTile,
            allGoodArr: allGoodArr,
            selectGoodIds: selectGoodIds,
            currentGood: goodFirst,
            currentColor: colorArr[0],
            bigImg: goodFirst.imgurl
        }, function () {
            this.props.setSelectGood(goodFirst)
            this.getAllColorSizeGoodArrFn()
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
        console.log("color", color)
        this.setState({
            currentColorIndex: index,
            selectGoodIds: selectGoodIds,
            currentColor: color
        }, function () {
            this.selectGoodFn()
        })
    }

    getAllColorSizeGoodArrFn = ()=> {
        // let colorArr = attrList[0].attr;
        // let sizeArr = attrList[1].attr;
        let currentColor = this.state.currentColor;
        console.log("currentColor", currentColor)
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
            }
        }

        console.log("currentGood", currentGood)
        let bigImg = currentGood.imgurl;
        this.setState({
            currentGood: currentGood,
            bigImg: bigImg,
            currentIndex: 0
        }, function () {
            this.props.setSelectGood(currentGood)
        })
    }
    copyFn () {
        const textarea = document.createElement("textarea");
        textarea.readOnly = "readonly";
        textarea.style.position = "absolute";
        textarea.style.left = "-999px";
        textarea.style.opacity = "0";
        textarea.value = message.value;
        document.body.appendChild(textarea)
        textarea.select()
        const result = document.execCommand("copy");
        if (result) {
            console.log("copy success", result)
        }
    }
    render () {
        return (
            <div className="detail_info_con">
                <div className="detail_info">             
                    <div className="left">
                        <img src={this.state.bigImg} alt="" className="big_img" id="big_img"   style={{height: this.state.bigHeight + "px"}} onClick={this.getAllColorSizeGoodArrFn}/>
                        <ul className="img_nav">
                            {
                                this.state.currentGood && this.state.currentGood.imgArr.map((item, index)=> {
                                    return (<li className={this.state.currentIndex==index?"small_img on":"small_img"}  style={{height:this.state.smallHeight + "px"}} onClick={()=>{this.selectNavFn(index, item)}} key={index}>
                                        <img src={item} alt=""  />
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                    
                    <div className="right">
                        <div className="top_tit">
                            <span className="tit">{this.props.goodDetail.product.brandName}</span>
                            <span className="txt">
                                <Link to="/">进入系列</Link> 
                                <RightOutlined className="right_icon"/>    
                            </span>
                        </div>

                        <div className="title">
                            {/* <span className="tit">新品</span>
                            <span className="tit">现货</span> */}

                            <div className="tit_txt">{this.props.goodDetail.product.productName} </div>
                            <div className="intro">{this.props.goodDetail.product.subTitle} </div>
                        </div>

                        <div className="price"><span className="unit">￥</span>{this.state.currentGood?this.state.currentGood.price:this.props.goodDetail.skuBeanList[0].price}</div>
                        <div className="specifications_con">
                            <div className="title_name">{this.state.colorTitle}</div>
                            <ul className="specifications_list">
                                {this.state.colorArr && this.state.colorArr.map((item, index)=> {
                                    return (<li className={this.state.currentColorIndex==index?"on":""} key={item.id} onClick={()=>{this.selectColorFn(index)}}>{item.attributeValue}</li>)
                                })}
                            </ul>
                        </div>

                        <div className="specifications_con">
                            <div className="title_name">{this.state.sizeTile}</div>
                            <ul className="specifications_list">             
                                {this.state.sizeArr && this.state.sizeArr.map((item, index)=>{
                                    return (<li className={this.state.currentSizeIndex==index?"on":""} key={item.id} onClick={()=>{this.selectSizeFn(index)}}>{item.attributeValue}</li>)
                                })}                               
                            </ul>
                        </div>

                        <div className="specifications_con">
                            <div className="title_name">编码</div>
                            <div className="code_con" onClick={this.copyFn}>{this.state.currentGood?this.state.currentGood.productCode:this.props.goodDetail.skuBeanList[0].productCode}</div>
                        </div>

                        {/* <div className="specifications_con">
                            <div className="title_name">模型</div>
                            <div className="download_btn">点击下载</div>
                        </div> */}



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

                            {/* <div className="btn">定制询价</div> */}
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