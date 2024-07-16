import React from "react";
import "./index.css";
import {Spin} from "antd";

class Shadow extends React.Component {
    render () {
        return (
            <div className="shadow">
                <Spin size="large" />
            </div>
        )
    }
}

export default Shadow;