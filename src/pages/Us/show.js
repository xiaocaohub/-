import React from "react";
import bannerImg from "../../assets/banner1.png";
import "./index.css";


class Show extends React.Component {    
    render () {
        return (
            <div className="us_page_con">
                <img src={bannerImg} className="banner_img"/>
             
                
            </div>
        )
    }
}




export default Show;