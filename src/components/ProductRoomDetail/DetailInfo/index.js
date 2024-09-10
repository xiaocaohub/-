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
            // 大图 index
            currentIndex: 1,
            bigImg: require("../../../assets/vedio_list1.png"),
         
            bigHeight: 450,
            count: 1,
            // 颜色
            colorArr: [],
            currentColorIndex: 0,
            currentColor: "",
            // 尺寸
            sizeArr: [],
            currentSizeIndex: 0,
            currentSize: "",
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
            bigImg: goodFirst.imgurl
        }, function () {
            this.selectSizeFn(0)
            this.selectColorFn(0)
            this.props.setSelectGood(goodFirst)
        })  
    }
    setBigImgHeightFn () {
        let bigImg = document.getElementById("big_img");
        let width = bigImg.width;
        let height = (width * 2)/3 ;
       
        let smallImg = document.querySelectorAll(".img_nav li")[0];
        let smallWidth = smallImg.clientWidth;
        let smallHeight = (smallWidth * 2) / 3;
        this.setState({
            
            bigHeight: height,
            smallHeight: smallHeight
        })
    }
    leftImgFn = ()=> {
        let imgArr = this.state.currentGood.imgArr;
        let length = imgArr.length;
        let currentIndex = this.state.currentIndex;
        let bigImg = "";
        if (currentIndex > 0) {
            currentIndex -= 1;
        } else {
            currentIndex = length - 1;
        }
        bigImg = imgArr[currentIndex];

        this.setState({
            currentIndex: currentIndex,
            bigImg: bigImg
        })
   
    }
    rightImgFn = ()=> {
        let imgArr = this.state.currentGood.imgArr;
        let length = imgArr.length;
        let currentIndex = this.state.currentIndex;
        let bigImg = "";
        if (currentIndex >= (length-1)) {
            currentIndex = 0;
        } else {
            currentIndex +=  1;
        }
        bigImg = imgArr[currentIndex];

        this.setState({
            currentIndex: currentIndex,
            bigImg: bigImg
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
        let sizeArr = this.resetSizeArrFn();
        this.setState({
            currentColorIndex: index,
            selectGoodIds: selectGoodIds,
            currentColor: color
            // sizeArr: sizeArr
        }, function () {
            this.checkSizeArrDisableFn()
            this.selectGoodFn()
        })
    }
    resetSizeArrFn = ()=> {
        let sizeArr = this.state.sizeArr;
        sizeArr.forEach((item)=> {
            item.showFlag = true;
        })
        return sizeArr;
    }
    checkSizeArrDisableFn = ()=> {    
        let currentColor = this.state.currentColor;
        
        
        let colorId = currentColor.id;
        // console.log("currentColor", currentColor)
        let sizeArr = this.state.sizeArr;
        let sizeLength = sizeArr.length;

        let allGoodArr = this.state.allGoodArr;
        let allLength = allGoodArr.length;
        // console.log("allGoodArr", allGoodArr)
        for (let i=0; i<sizeLength; i++) {
            let sizeItem = sizeArr[i];
            sizeItem.showFlag = false;
            for (let j=0; j<allLength; j++) {
                let allItem = allGoodArr[j];                
                if (colorId == allItem.attributes[0].attributeValId && sizeItem.id == allItem.attributes[1].attributeValId) {
                    if (allItem.status == 0) {
                        sizeItem.showFlag = true;
                    }
                }
            }
        }
        this.setState({
            sizeArr: sizeArr
        })
    }
    selectSizeFn = (index)=> {
        let size = this.state.sizeArr[index];
        let selectGoodIds = this.state.selectGoodIds;    
        selectGoodIds[1] = size.id;
        this.setState({
            currentSizeIndex: index,
            selectGoodIds: selectGoodIds,
            currentSize: size
        }, function () {
            this.checkColorArrDisableFn()
            this.selectGoodFn()
        })
    }
    checkColorArrDisableFn = ()=> {    
        let currentSize = this.state.currentSize;
        let sizeId = currentSize.id;
        let colorArr = this.state.colorArr;
        let colorLength = colorArr.length;
        let allGoodArr = this.state.allGoodArr;
        let allLength = allGoodArr.length;
        // console.log("allGoodArr", allGoodArr)
        for (let i=0; i<colorLength; i++) {
            let colorItem = colorArr[i];
            colorItem.showFlag = false;
            for (let j=0; j<allLength; j++) {
                let allItem = allGoodArr[j];                
                if (colorItem.id == allItem.attributes[0].attributeValId && sizeId == allItem.attributes[1].attributeValId) {
                    if (allItem.status == 0) {
                        colorItem.showFlag = true;
                    }
                }
            }
        }
       
        this.setState({
            colorArr: colorArr
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
    addCartFn = ()=> {
        this.props.addCartFn(this.state.count)
    }
    render () {
        return (
            <div className="detail_info_con">
                <div className="detail_info">             
                    <div className="left">
                        <div className="big_img_con">
                            <div className="big_img_c">
                                <img src={this.state.bigImg} alt="" className="big_img" id="big_img"   style={{height: this.state.bigHeight + "px"}} onClick={this.checkSizeArrDisableFn}/>
                                {/* <img src={this.state.bigImg} alt="" className="big_img" id="big_img"  onClick={this.checkSizeArrDisableFn}/> */}
                            </div>

                            <div className="btn left_btn" onClick={this.leftImgFn}></div>
                            <div className="btn right_btn" onClick={this.rightImgFn}></div>
                        </div>
                       
                        <ul className="img_nav">
                            {
                                this.state.currentGood && this.state.currentGood.imgArr.map((item, index)=> {
                                  // return (<li className={this.state.currentIndex==index?"small_img on":"small_img"}  onClick={()=>{this.selectNavFn(index, item)}} key={index}>
                                 
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
                                    if (item.showFlag) {
                                        return (<li className={this.state.currentColorIndex==index?"on":""} key={item.id} onClick={()=>{this.selectColorFn(index)}}>{item.attributeValue}</li>)
                                    } else {
                                        return (<li className="dis" key={item.id} >{item.attributeValue}</li>)
                                    }
                                })}
                            </ul>
                        </div>

                        <div className="specifications_con">
                            <div className="title_name">{this.state.sizeTile}</div>
                            <ul className="specifications_list">   

                                {this.state.sizeArr && this.state.sizeArr.map((item, index)=>{
                                    if (item.showFlag) {
                                        return (<li className={this.state.currentSizeIndex==index?"on":""} key={item.id} onClick={()=>{this.selectSizeFn(index)}}>{item.attributeValue}</li>)
                                    } else {
                                        return (<li className="dis" key={item.id}>{item.attributeValue}</li>)
                                    }
                                   
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
                                <div className="btn reduce_btn" onClick={()=>{this.handleCountFn(-1)}}>-</div>
                                
                                <Input className="count" value={this.state.count} onChange={this.changeCountFn}/>      
                                <div className="btn add_btn" onClick={()=>{this.handleCountFn(1)}}>+</div>
                            </div>
                        </div>

                        <div className="buy_con">
                            <div className="btn buy_btn" onClick={this.addCartFn}>加入购物车</div>

                            {/* <div className="btn">定制询价</div> */}
                            {/* <div className="small_btn">
                                <StarOutlined className="icon"/> 收藏
                            </div>
                            <span className="line"></span>
                            <div className="small_btn share_btn">
                                <ShareAltOutlined className="icon"/> 分享
                                <img src={codeImg} alt="" className="code_img"/>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailInfo;