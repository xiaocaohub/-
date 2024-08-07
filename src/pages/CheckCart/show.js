import React from "react";
import {Row, Col} from "antd";
import GoodTable from "../../components/CheckCart/GoodTable";

import "./index.css";

class Show extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className="check_cart_page">
                <Row>
                    <Col span={3}></Col>




                    <Col span={18}>
                        <GoodTable></GoodTable>
                    
                    </Col>
                    
                    <Col span={3}></Col>
                </Row>
            </div>
        )
    }
}








export default Show;