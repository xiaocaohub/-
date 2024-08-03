import React from "react";
import "./index.css";
import {Row, Col} from "antd";

class Show extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className="cart_page_con">
                <Row>
                    <Col span={3}></Col>




                    <Col span={18}>
                         <div className="search_con">
                            <div className="title"></div>
                         </div>
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </div>
        )
    }
}




export default Show;