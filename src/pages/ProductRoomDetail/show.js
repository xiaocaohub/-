import React from "react";
import {Row, Col} from "antd";
import DetailInfo from "../../components/ProductRoomDetail/DetailInfo";

import SameKind from "../../components/ProductRoomDetail/SameKind";
import "./index.css";
class Show extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className="productroom_detail_page">
                <Row>
                    <Col span={3}></Col>
                    

                    <Col span={18}>
                        <DetailInfo></DetailInfo>

                        <SameKind></SameKind>

                    </Col>
                    <Col span={3}></Col>
                </Row>
            </div>
        )
    }
}

export default Show;