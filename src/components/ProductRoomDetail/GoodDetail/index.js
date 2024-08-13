import React from "react";
import {Row, Col} from "antd";
import "./index.css";

import goodImg from "../../../assets/recomend_good1.png";
class GoodDetail extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            realPhotos: [],
            showRealPhotos: [],
            // 属性
            attrArr: [],
            imgHeight: 90,
            foldFlag: true
        }
    }
    componentDidMount () {
        this.init()
    }
    init = ()=> {
      
        let  product = this.props.goodDetail.product;
        let  parameters = product.parameters;
        parameters = eval(parameters);
        let realPhotos = product.realPhotos;
        let showRealPhotos = product.realPhotos.slice(0, 2);
        console.log("showRealPhotos")
        console.log(showRealPhotos)
        console.log("showRealPhotos")
        let content = eval(product.content)[0].content;
        this.setState({
            content: content ,
            realPhotos: realPhotos,
            attrArr: parameters,
            showRealPhotos: showRealPhotos
        }, function () {


            this.setImgHeightFn()
        })
    }
    setImgHeightFn = ()=> {

        let img = document.querySelectorAll(".good_edit_detail .img_list .img")[0];
        let width = img.clientWidth;
        let height = (width * 2)/3;
        this.setState({
            imgHeight: height
        })
    }

    showMoreFn = ()=> {
        let flag = !this.state.foldFlag;
        let realPhotos = this.state.realPhotos;
        
        let showRealPhotos = [];
        if (flag) {
            showRealPhotos = realPhotos.slice(0, 2)
        } else {
            showRealPhotos = realPhotos;
        }
        this.setState({
            foldFlag: flag,
            showRealPhotos: showRealPhotos
        })
    }
    render () {
        return (
            <Row className="good_edit_detail">
                <Col span={3}></Col>
                <Col span={18} className="content">       
                    <div className="left" dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
                    <div className="right">
                        <div className="title_top">
                            <span className="tit">实物拍摄</span>
                            <span className={this.state.foldFlag?"show_btn":"show_btn on"} onClick={this.showMoreFn}>{this.state.foldFlag?"展开全部":"收起"}</span>
                        </div> 

                        <div className="img_list">
                            {this.state.showRealPhotos.map((item, index)=> {
                                return (<img src={item} alt="" className="img" key={index} style={{height:this.state.imgHeight+"px"}}/>)
                            })}                            
                        </div>

                        <div className="text_con">
                            <div className="tit">商品信息</div>
                            <ul className="txt_list">
                                {this.state.attrArr.map((item, index)=>{
                                    if (item.value) {
                                        return (<li key={index}><span className="title">{item.label}:</span>  <span className="txt">{item.value}</span> </li>)
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col span={3}></Col>
            </Row>
        )
    }
}


export default GoodDetail;