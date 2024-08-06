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
            </div>
        )
    }
}

export default UserInfo;