import React from "react";
import {Link} from "react-router-dom";
import {Input, Row, Col} from "antd";

import "./index.css";
import goodImg from "../../../assets/recomend_good1.png";
const { TextArea } = Input;

class GoodTable extends React.Component {
    constructor (props) {
        super(props)
        console.log("props goodtable")
        console.log(props)
    }
    render () {

        return (
            <div className="good_table">
     
                <ul className="header_top">
                    <li className="select"></li>
                    <li className="info">商品信息</li>
                    <li className="good_code">商品编码</li>
                    <li className="vol">体积(m³)</li>

                    <li className="price">供货单价(元)</li>
                    <li className="count">数量</li>
                    <li className="sub_total">小计(元)</li>
     
                </ul>
                <ul className="good_list">
                    {this.props.orderItem.details.length>0 && this.props.orderItem.details.map((item, index)=>{
                        return (
                            <li key={index}>
                                <div className="select"></div>
                                <div className="info">
                                    
                                    
                                    
                                    <Link to="/" className="good_img">
                                        <img src={goodImg} alt=""/>
                                    </Link>
                                    <div className="intro">

                                        <div className="txt"> {item.productName}  </div>
                                        <div className="size"> {item.attribute} </div>
                                    </div>
                                </div>
                                <div className="good_code">{ item.productCode }</div>
                                <div className="vol">{item.volume}</div>
                                <div className="price">{item.supplierPrice}</div>
                            
                            
                                <div className="count_con">{item.num}</div>
                                <div className="sub_total">{item.totalSupplierPrice}</div>
                            </li>
                        )
                    })}
               
                   
     

                    <Row className="remark_con">
                        <div className="title">特殊信息备注:</div>
                        <TextArea
                                placeholder="若延期发货, 请自行修改期望发货时间, 若定制, 请填写定制信息, 否则按常规产品出货。"
                                autoSize={{ minRows: 3, maxRows: 5 }}
                                className="text_area"
                            />
                    </Row>
                </ul>
            </div>
        )
    }
}




export default GoodTable;