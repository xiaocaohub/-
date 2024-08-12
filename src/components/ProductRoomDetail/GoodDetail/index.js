import React from "react";
import {Row, Col} from "antd";
import "./index.css";

import goodImg from "../../../assets/recomend_good1.png";
class GoodDetail extends React.Component {
    constructor (props) {
        super(props)
        console.log("GoodDetail----")
        console.log(props)
        console.log("GoodDetail")
        this.state = {
            realPhotos: [],
            // 属性
            attrArr: []
        }
    }
    componentDidMount () {
        this.init()
    }
    init () {
        let  product = this.props.goodDetail.product;
        let  parameters = product.parameters;
        parameters = eval(parameters);
        let realPhotos = product.realPhotos;
        let content = eval(product.content)[0].content;
        console.log("content", content)
        this.setState({
            content: content ,
            realPhotos: realPhotos,
            attrArr: parameters
        })
    }
    render () {
        return (
            <Row className="good_edit_detail">
          
          
             
                <Col span={3}></Col>
                <Col span={18} className="content">
                    <div className="left">
                        {/* {this.state.content} */}
                    </div>
                    <div className="right">
                        <div className="title_top">
                            <span className="tit">实物拍摄</span>
                            <span className="show_btn">收起</span>
                        </div>

                        <div className="img_list">
                            {this.state.realPhotos.map((item, index)=> {
                                return <img src={item} alt="" className="img" key={index}/>
                            })}                            
                        </div>

                        <div className="text_con">

                            <div className="tit">商品信息</div>
                            <ul className="txt_list">
                                {/* {this.state.attrArr.map((item, index)=>{
                                    return (<li key={index}><span className="title">{item.label}:</span>  <span className="txt">{item.value}</span> </li>)
                                })} */}
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