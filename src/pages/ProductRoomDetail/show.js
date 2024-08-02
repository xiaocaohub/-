import React from "react";
import {Row, Col} from "antd";
import DetailInfo from "../../components/ProductRoomDetail/DetailInfo";

import Design from "../../components/ProductRoomDetail/Design";
import SameKind from "../../components/ProductRoomDetail/SameKind";
import GoodDetail from "../../components/ProductRoomDetail/GoodDetail";
import "./index.css";
class Show extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            designCurrentIndex: 0,
            designSameNav: [
                {
                    id: 0,
        
                    title: "设计搭配"
                },
                {
                    id: 1,
                    title: "同类推荐"
                }
            ]
        }
    }
    selectSameFn = (index)=> {
        console.log(index)
        this.setState({
            designCurrentIndex: index 
        }) 
    }
    render () {
        return (
            <div className="productroom_detail_page">
                <Row>
                    <Col span={3}></Col>
                    

                    <Col span={18}>
                        <DetailInfo></DetailInfo>

                        <div className="design_same_con">
                           
                            <ul className="nav_list">          
                                {this.state.designSameNav.map((item, index)=> {
                                    return (<li className={this.state.designCurrentIndex == index?"on":""} onClick={()=>{this.selectSameFn(index)}} key={item.id}>
                                        {item.title}
                                    </li>)
                                })}
                            </ul>

                            {this.state.designCurrentIndex == 0 && <Design></Design>}
                            {this.state.designCurrentIndex == 1 && <SameKind></SameKind>}
                        </div>
                    </Col>
                    
                    <Col span={3}></Col>
                </Row>
                
                <GoodDetail></GoodDetail>
            </div>
        )
    }
}

export default Show;