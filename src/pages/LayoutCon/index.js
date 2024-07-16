import React from "react";
import {Row, Col} from "antd";
import Header from "../../components/Header";

import Main from "../../components/Main";
import Footer from "../../components/Footer";
class LayoutCon extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div>
                <Row>
                    <Col span={24}><Header></Header></Col>
                    <Col span={24}>
                        <Row>
                            <Col span={24}>{this.props.children}</Col>
                        </Row>
                    </Col>
                    <Col span={24}><Footer></Footer></Col>
                </Row>
            </div>
        )
    }
}



export default LayoutCon;