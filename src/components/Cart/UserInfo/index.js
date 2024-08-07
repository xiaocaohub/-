import React from "react";
import "./index.css";
import UserForm from "../UserForm";

import UserInfoText from "../UserInfoText";
class UserInfo extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            changeFlag: true
        }
    }
    changeInfoFn = ()=> {
        let changeFlag = !this.state.changeFlag;
        this.setState({

            changeFlag: changeFlag
        })
    }
    render () {
        return (
            <div className="user_info_con">
                
                {this.state.changeFlag && <UserForm changeInfo={this.changeInfoFn}></UserForm>}

                {!this.state.changeFlag && <UserInfoText changeInfo={this.changeInfoFn}></UserInfoText>}

                <div className="message_title">
                    <div className="title">物流提示</div>

                    <div className="txt">1.本产品不包含物流费用。</div>
                    <div className="txt">2.发货前物流公司会与你沟通物流相关费用。</div>
                </div>
            </div>
        )
    }
}

export default UserInfo;