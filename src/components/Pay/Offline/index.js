import React from "react";
import {Input, DatePicker, Upload} from "antd";
import "./index.css";

class Offline extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            title: "结算通",
            balanceFlag: false,
            payList: [
                {
                    id: 0,
                    txt: "线下转账",
                    imgSrc: require("../../../assets/icon/pay_bank_card.png"),    

                    selectFlag: true
                }
            ],
            uploadImg: require("../../../assets/icon/add_pic.png"),
            fileList: []
        }
    }
    selectBalanceFn = ()=> {
        let balanceFlag = !this.state.balanceFlag;
        this.setState({
            balanceFlag: balanceFlag
        })
    }
    selectPayFn (index) {
        let payList = this.state.payList;
        payList.forEach((item, i)=>{            
            item.selectFlag = false;
            if (i===index) {
                item.selectFlag = true
            }
        })


        this.setState({
            payList: payList
        })
    }

    render () {
        return (
            <div className="offline_con">
                <div className="balance_con">
                    <div className={this.state.balanceFlag?"balance on":"balance"} onClick={this.selectBalanceFn}>
                        <div className="title">账户余额</div>
                        <div className="money"><span className="unit">￥</span> 21005.00</div>
                    </div>
                    <div className="balance_pay">账户余额支付: <span>21005.00</span></div>
                </div>


                <ul className="pay_list">
                    {this.state.payList.map((item, index)=> {
                        return (<li className={item.selectFlag?"on":""} onClick={()=>{this.selectPayFn(index)}}> <img src={item.imgSrc} /> {item.txt}</li>)
                    })}
                    <div className="money">其他支付: <span>22005.00</span></div>
                </ul>
                <div className="line"></div>
 
               {/*  <div className="pay_btn">立即支付</div> */}
                
                <div className="bank_info_con">
                    <div className="bank_info">
                        <p>账户名称: 深圳市珞珂家居有限公司</p>        
                        <p>开户银行: 中国工商银行股份有限公司深圳龙翔支行</p>
                        <p>账户号码: 4000056109100660310</p>
                    </div>

                    <ul className="upload_con">
                        <li>
                            <div className="title">汇款银行</div>
                            <Input className="bank_name" placeholder="请输入汇款银行"/>
                            <div className="txt">例：工商银行、中国银行...</div>
                        </li>
                        <li>
                            <div className="title">实际汇款时间</div>
                            <DatePicker className="date"/>
                        </li>
                        <li>
                            <div className="title">上传汇款凭证</div>

                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                fileList={this.state.fileList}                         
                            >
                                 <img src={this.state.uploadImg} alt="avatar" style={{ width: '100%' }} />
                            </Upload>
                            <div className="txt">最多上传5张图 (每张不超过1M) 请一定按照订单金额 (精准到小数点2位) 付款, 否则财务审核不通过, 视为无效订单!</div>
                        </li>
                    </ul>
                </div>

                <div className="sub_btn">提交</div>
            </div>
        )
    }
}



export default Offline;