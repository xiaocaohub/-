import React from "react";
import {Button, Carousel, Tabs, Radio,Spin,Upload,message,Badge,Tooltip,Divider, Space, Breadcrumb, Switch, Steps, Timeline, Anchor, Drawer, Checkbox,Form,Modal, Popconfirm, Cascader } from "antd";
import Good from "../../components/Good";

import { FaBeer } from 'react-icons/fa';
import { DownloadOutlined,StepBackwardOutlined,AndroidOutlined, LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';

import {Icon} from "@ant-design/compatible";

import Shadow from "../Shadow";
import "./index.css";
const { TabPane } = Tabs;
const {Step} = Steps;



const { Link } = Anchor;
const description = 'This is a description.';
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

const options = [
    {
      value: 'zhejiang',
      label: '浙江',
      children: [
        {
          value: 'hangzhou',
          label: '杭州',
          children: [
            {
              value: 'xihu',
              label: '西湖'
            }
          ]
        }
      ]
    },
    {
      value: 'jiangsu',
      label: '江苏',
      children: [
        {
          value: 'nanjing',
          label: '南京',
          children: [
            {
              value: 'zhonghuamen',
              label: '江宁区'
            }
          ]
        }
      ]
    }
  ]
class Show extends React.Component {
    constructor (props) {   
        super(props)

        this.state = {
            value:1,
            size: 'small' ,
            isLoading: false,
            currentStep: 1,
            open: false,
            checkAll: false,
            indeterminate: true,
            checkedList: defaultCheckedList,
            modalVisible: false
        }


        this.prev = this.prev.bind(this)
    }

    onChange = (a, b, c)=> {
        console.log(a, b, c);
    }
    prev  ()  {
        this.img.prev()
    }
    slectChange = (e)=> {
        const _this = this;
        this.setState({isLoading: true})
        setTimeout(function () { _this.setState({isLoading: false })}, 2000)
    }
    itemRender = (e)=>{
        console.log(e)
    }
    switchFn = (e)=> {
        console.log(e)
    }
    stepFn = ()=>{
        const step = this.state.currentStep + 1;
        this.setState({
            currentStep: step
        })
    }
    showDrawer = () => {
        this.setState({
            open: true
        })
    }
    onClose = () => {
        this.setState({
            open: false
        })
    }
    checkAllFn = (e) => {
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            // indeterminate: false,
            checkAll: e.target.checked,
          });
    }
    checkFn = checkedList => {
        console.log("checkedList", checkedList)
        this.setState({
          checkedList,
         // indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
          checkAll: checkedList.length === plainOptions.length,
        });
    }
    showModalFn = ()=> {
        console.log("modal")
        this.setState({
            modalVisible: true
        })
    }
    handleCancel = ()=> {
        this.setState({
            modalVisible: false
        })
    }





    handleOk = e => {
        this.setState({
            modalVisible: false
        });
    }
    confirmFn = ()=> {
        Modal.confirm({
            title: "温馨提示",
            content: "删除吗?",
            onOk() {
                console.log("ok")
            },
            onCancel() {
                console.log("cancel")
            }
        })
    }
    downChange = (value)=> {
        
        console.log(value)
    }
    render () {
        const {count} = this.props.loginState;
        const props = {
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
              authorization: 'authorization-text',
            },
            onChange(info) {
              if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
              if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
              } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
            }
        }
        return (
            <div>
                 <Anchor>
                    <Link href="#components-anchor-demo-basic" title="Basic demo" />
                </Anchor>

                <Icon type="close-circle" />
                <AndroidOutlined    className="icon_big"/>
                <Button type="primary" danger>Primary</Button>
                <Button type="primary" icon={<StepBackwardOutlined />}   />
                <h1>login page-------{count}</h1>
                <Button onClick={this.props.addFn}>click me</Button>
                
                <Carousel  ref={dom=>{this.img=dom }} className="slick-list" autoplay>    
                    <div key={1}><h3>1</h3></div>
                    <div key={2}><h3>2</h3></div>
                    <div key={3}><h3>3</h3></div>
                    <div key={4}><h3>4</h3></div>
                </Carousel>
                <Button onClick={this.prev}>left</Button>

                <div> 
                    <Radio.Group defaultValue="a" buttonStyle="solid" onChange={this.slectChange} >
                        <Radio.Button value="a" >Hangzhou</Radio.Button>
                        <Radio.Button value="b" >Shanghai</Radio.Button>
                        <Radio.Button value="c"  >Beijing</Radio.Button>
                        <Radio.Button value="d"  >Chengdu</Radio.Button>
                    </Radio.Group>
                </div>
                
                {this.state.isLoading&&<Shadow/>} 
                <div>
                    <Upload {...props}>
                        <Button>
                            Click to Upload
                        </Button>
                    </Upload>
                </div>

                <div className="icon_con">
                    <Badge count={200}  overflowCount={999}>
                        <div className="box"></div>
                    </Badge>
                </div>

                <Tooltip title="prompt text">

                    <span>小丁</span>
                </Tooltip>

                <Divider orientation="right" >Right Text</Divider>
                <Space align="start"   size="large" wrap={true}>
                    <Button type="primary" danger>Primary</Button>
                    <Button type="primary" danger>Primary</Button>
                </Space>
                                
                <Breadcrumb itemRender={this.itemRender}> 
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/login">Application Center</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                    
            
                        <a href="/home">Application List</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
            

                <Switch onChange={this.switchFn}  />

                <div>
                    <h1>步骤条</h1>
                    <Steps
                        percent={60}
                        labelPlacement="vertical"
                        current={this.state.currentStep}
                        items={
                            [
                                {
                                    title: '下单',
                                    description
                                },
                                {
                                    title: '派商品',
                                    description
                                },
                                {
                                    title: '已完成',
                                    description
                                }
                            ]
                        }
                    />
                    <Button onClick={this.stepFn}>step</Button>
                </div>

                <div style={{padding:"20px"}}>
                    <h1>时间轴</h1>
                    <Timeline>
                        <Timeline.Item  color="green">Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                        <Timeline.Item  color="red">Technical testing 2015-09-01</Timeline.Item>
                        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                        <Timeline.Item dot={<SmileOutlined  style={{ fontSize: '21px' }}/>} color="red">Network problems being solved 2015-10-01</Timeline.Item>
                    </Timeline>
                </div>


                <div id="components-anchor-demo-basic" style={{height:"100px",border:"1px solid brown"}}>
                #components-anchor-demo-basic
                </div>

                <div>
                    <h1>抽屉</h1>
                    <Drawer title="商品详情" placement="right" width={1000} onClose={this.onClose} open={this.state.open}>
                        <div>
                            <h1>选择</h1>
                          
                            <p>
                                <Checkbox  checked={this.state.checkAll} onChange={this.checkAllFn}>全选</Checkbox>
                            </p>
                            <CheckboxGroup  
                                options={plainOptions}
                                value={this.state.checkedList}
                                onChange={this.checkFn}
                            />
                        </div>
                    </Drawer>
                    <Button type="primary" onClick={this.showDrawer}>Open</Button>
                </div>

                <div style={{padding:"25px"}}>
                    <h1>选择</h1>
                    <Checkbox  checked={this.state.checkAll} onChange={this.checkAllFn}>Checkbox</Checkbox>             
                    <br />
                    
                    <CheckboxGroup
                       options={plainOptions}
                       value={this.state.checkedList}
                    
                       onChange={this.checkFn}
                    />
                </div>

                <div>
                    <Modal
                        title="Basic Modal"
                        width={900}
                        visible={this.state.modalVisible}
                        style={{top:150}}
                        onOk={this.handleOk}
                           onCancel={this.handleCancel}
                        >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                    <Button onClick={this.showModalFn}>show modal</Button>
                    <Button onClick={this.confirmFn}>modal confirm</Button>
                </div>


                <Popconfirm placement="topLeft" title="hello how are you?" onConfirm={this.confirmFn} okText="Yes" cancelText="No">
                    <Button>TL</Button>
                </Popconfirm>


                <h1>下拉</h1>
                <Cascader options={options} onChange={this.downChange} placeholder="Please select" />
            </div>
        )
    }
}




export default Show;