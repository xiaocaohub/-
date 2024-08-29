import React from "react";
import {Form, Select, Input, Button} from "antd";
import {setStorageFn, getStorageFn} from "../../../utils/localStorage";
import UserForm from "../UserForm";
import UserInfoText from "../UserInfoText";

import "./index.css";

 
const { Option } = Select;
const formItemLayout = {
    labelCol: {
      xs: { span: 1 },
      sm: { span: 1 },
    },

    wrapperCol: {
      xs: { span: 21 },
      sm: { span: 21 },
    }
  };

  const tailFormItemLayout = {  
    wrapperCol: {
      xs: {

        span: 24,
        offset: 4,
      },
      sm: {
        span: 20,
        offset: 4,
      }
    }
  }

const {TextArea} = Input;
 

class UserInfo extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            changeFlag: true,
            userInfo: {

                province: "",               
                city: "",
                area: "",
                detailAdress:  "",
                recipient:  "", // 收件人
                phone:  "",
                remark:  ""
            }
        }
    }
    changeInfoFn = (userInfo)=> {
        let changeFlag = !this.state.changeFlag;
        this.setState({
     
            changeFlag: changeFlag
        })
    }
    detailAdressFn = (e)=> {   
        let value = e.target.value;

        let userInfo = this.state.userInfo;
        userInfo.detailAdress = value;
        this.setState({
            userInfo: userInfo
        })
    }
    recipientFn = (e)=> {
        let value = e.target.value;
        let userInfo = this.state.userInfo;

        userInfo.recipient = value;
        this.setState({
            userInfo: userInfo
        })
    }
    phoneFn = (e)=> {
        let value = e.target.value;
        let userInfo = this.state.userInfo;
        userInfo.phone = value;
        this.setState({
            userInfo: userInfo
        })
    }
    remarkFn = (e)=> {
        let value = e.target.value;
        let userInfo = this.state.userInfo;
        userInfo.remark = value;
        this.setState({
            userInfo: userInfo
        })
    }
    submitFn = ()=> {
        let userInfo = this.state.userInfo;
        setStorageFn("userInfo", userInfo)
        this.setState({
            changeFlag: false
        })
    }
    changeFn = ()=> {

        this.setState({
            changeFlag: true
        })
    }
    render () {
        return (
            <div className="user_info_con">        
                {/* {this.state.changeFlag && <UserForm userInfo={this.props.userInfo} changeInfo={this.changeInfoFn}></UserForm>}

                {!this.state.changeFlag && <UserInfoText userInfo={this.props.userInfo} changeInfo={this.changeInfoFn}></UserInfoText>} */}
                <div className={this.state.changeFlag?"user_form_com on":"user_form_com"}>

                    <div className="title">            
                        <div className="tit">客户信息</div>
                        <div className="txt">（注：客户收货地址信息）</div>
                    </div>

                    <Form className="form_con"  {...formItemLayout}>
                        <Form.Item label="所在地区" >
                       
                            <Select
                                labelInValue  defaultValue={{ key: 'lucy' }}
                                style={{ width:210, marginLeft:20}}>                             
                                <Option value="jack">Jack (100)</Option>
                                <Option value="lucy">Lucy (101)</Option>
                            </Select>

                            <Select
                                labelInValue
                                defaultValue={{ key: 'lucy' }}
                                style={{ width:210, marginLeft: 20}}                    
                            >
                                <Option value="lucy">Lucy (101)</Option>
                                <Option value="jack">jack (102)</Option>
                            </Select>

                            <Select
                                labelInValue
                                defaultValue={{ key: 'lucy' }}                            
                                style={{ width:210, marginLeft: 20}}
                            >
                                <Option value="jack">Jack (100)</Option>
                                <Option value="lucy">Lucy (101)</Option>
                            </Select>
                        </Form.Item>



                        <Form.Item label="详细地址">
                            <Input style={{ width:670, marginLeft:20}} value={this.state.userInfo.detailAdress} onChange={this.detailAdressFn}/> 
                        </Form.Item>

                        <Form.Item label="收件人" >
                            <Input style={{ width:670, marginLeft:20}} value={this.state.userInfo.recipient} onChange={this.recipientFn}/> 
                        </Form.Item>

                    
                        <Form.Item label="手机号" >

                            <Input style={{ width:670, marginLeft:20}} value={this.state.userInfo.phone} onChange={this.phoneFn}/> 
                    
                    
                        </Form.Item>
    
                        <Form.Item label="备注">
                            <TextArea rows={5} style={{ width:670, marginLeft: 20}} value={this.state.userInfo.remark} onChange={this.remarkFn}/>
                    
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" onClick={this.submitFn} className="submit_btn">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

                <div className={!this.state.changeFlag?"user_info_text_con on":"user_info_text_con"}>
                    <div className="title">
                        <div className="tit">客户信息</div>
                    </div>
                    <ul className="user_info_text">

                        <li><span className="tit">收 货 人:</span>{this.state.userInfo.recipient} <div className="change_btn" onClick={this.changeFn}>修改</div></li>
                        <li><span className="tit">联系电话:</span>{this.state.userInfo.phone}</li>
                        <li><span className="tit">收货地址:</span>
                            {  this.state.userInfo.province } 
                            
                            {  this.state.userInfo.city }

                            { this.state.userInfo.area }
                            { this.state.userInfo.detailAdress }
                        </li>

                        <li><span className="tit">备 注:</span>{this.state.userInfo.remark }</li>
                    </ul>
                </div>

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