import React from "react";
import "./index.css";
class Nav extends React.Component {

    render () {

        return (
            <div className="series_nav_con">
                <ul className="nav_list">

                    <li className="on">全部</li>
                    <li>极简</li>
                    <li>轻奢</li>
                    <li>奶油</li>
                     

                    <li>中古</li>
                     
                    <li>侘寂</li>
                    <li>混搭</li>
                </ul>
            </div>
        )
    }
}



export default Nav;