import React from "react";
import "./index.css";
class UserInfoText extends React.Component {
    
    constructor (props) {
        super(props)
    }

    changeFn = ()=> {
        this.props.changeInfo()
    }
    render () {
        return (
            <div>
                <div className="title">
                    <div className="tit">客户信息</div>
                </div>

                <ul className="user_info_text">
                    <li><span className="tit">收 货 人:</span>黄S <div className="change_btn" onClick={this.changeFn}>修改</div></li>
                    <li><span className="tit">联系电话:</span>00000000000</li>

                    <li><span className="tit">收货地址:</span>广东省深圳市龙岗区同乐镇黄屋村</li>

                    <li><span className="tit">备 注:</span>请按收货地址发货</li>
                </ul>
            </div>
        )
    }
}

export default UserInfoText;