import React from "react";
import {Link} from "react-router-dom";
import {Input} from "antd";

import "./index.css";
import goodImg from "../../../assets/recomend_good1.png";
class GoodTable extends React.Component {
    constructor (props) {
        super(props)
        console.log('props', props)
    }
    reduceFn = (item, index)=> {
        this.props.reduceFn(item, index)
    }
    addFn = (item, index)=> {

        this.props.addFn(item, index)
    }
    selectGoodFn = (item, index)=> {
        this.props.selectGoodFn(item, index)
    }

    deleteGoodConfirmFn = (item, index)=> {
        this.props.deleteGoodConfirmFn(item, index)
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
                    <li className="operate">操作</li>
                </ul>
          
          
                <ul className="good_list">
                    {this.props.cartArr.map((item, index)=>{
                        return (
                            <li key={item.id}>
          
                                <div className={item.selectFlag?"select on":"select"} onClick={()=>{this.selectGoodFn(item, index)}}></div>
          
                                <div className="info">          
                                    <Link to="/" className="good_img">
                                        <img src={item.imgurl} alt=""/>
                                    </Link>
                        
                                    <div className="intro">
                                        <div className="txt"> { item.product_title } </div>
                                        <div className="size"> { item.skuName } </div>
                                    </div>

                                </div>
                                <div className="good_code"> ---------- </div>
                        

                                <div className="vol">-------</div>
                                <div className="price">{item.price}</div>
                                <div className="count_con">
                                    <div className="btn" onClick={()=>{this.reduceFn(item, index)}}> - </div>
                                    <Input className="count" value={item.goods_num}/>
                               
                                    <div className="btn" onClick={()=>{this.addFn(item, index)}}> + </div>
                                </div>
        
                                <div className="sub_total">{item.price * item.goods_num}</div>
        
                                <div className="operate" onClick={()=>{this.deleteGoodConfirmFn(item, index)}}></div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}




export default GoodTable;