import React from "react";
import EmptyImg from "../../assets/null_data.png";
import "./index.css";
class Empty extends React.Component {

    render () {

        return (
            <div className="empty_con">
                <img src={EmptyImg} alt="" className="empty_img"/>
            </div>
        )
    }
}



export default Empty;