import React from "react";
import {Row, Col} from "antd";
import DetailInfo from "../../components/ProductRoomDetail/DetailInfo";

import Design from "../../components/ProductRoomDetail/Design";
import SameKind from "../../components/ProductRoomDetail/SameKind";
import GoodDetail from "../../components/ProductRoomDetail/GoodDetail";

import ShowLoading from "../../components/Loading";
import "./index.css";
class Show extends React.Component {
    constructor (props) {
        super(props)
        console.log("props goodDetail")
        console.log(props)
        console.log("props goodDetail")
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
            ],
            goodId: 0,
            goodInfo: "",
            

            goodInfoFlag: false
        }
        
    }



    componentDidMount () {
        this.setGoodId()
        this.props.getGoodInfoFn()
        this.setGoodInfo()
    }
    setGoodId = ()=> {
        let id = this.props.match.params.id;   
        let _this = this;
        this.setState({
            goodId: id
        }, function () {
            _this.props.getGoodInfoFn(id)
        })
    } 
    setGoodInfo = ()=> {
        let _this = this;
        this.setState({
            goodInfo: _this.props.productRoomDetailState.goodInfo
        })
    }
    selectSameFn = (index)=> {
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
                            {this.state.goodInfo&&<DetailInfo goodDetail={this.state.goodInfo}></DetailInfo>}
                            {this.state.goodInfoFlag&&<ShowLoading></ShowLoading>}
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