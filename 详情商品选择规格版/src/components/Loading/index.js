import React from "react";
import { Spin } from 'antd';
import "./index.css";

class ShowLoading extends React.Component {
    
    render () {
        return (
            <div className="show_loading_page">
                
                <div className="shadow"></div>
                <Spin /></div>
        )
    }
}






export default ShowLoading;