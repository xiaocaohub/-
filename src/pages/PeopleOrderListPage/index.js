import React from "react";
import {Link} from "react-router-dom";
import {Tabs, Table, Button, Pagination  } from "antd";

import "./index.css";  

import {setStorageFn, getStorageFn} from "../../utils/localStorage";
import request from "../../api/request";
const columns = [
    {
      title: '订单编号',
      dataIndex: 'nameList',
      key: 'nameList',
      render: (item)=> {
        return (
            <div>
                <p>{item.order}</p>
                <p>商品种数: {item.prodcutNum}</p>
                <p>商品件数: {item.num}</p>
            </div>    
        )
      }
    },
    {
      title: '时间管理',
      dataIndex: 'times',
      key: 'times',
      render: (item)=> {
          return (
            <div>
                <p>下单时间: {item.createTime?item.createTime:"-----"}</p>
                <p>期望发货时间: {item.estimatedDeliveryTime?item.estimatedDeliveryTime:"-----"}</p>
                <p>预计发货时间: {item.estimatedDeliveryTime?item.estimatedDeliveryTime:"-----"}</p>
                <p>实际发货时间: {item.realDeliveryTime?item.realDeliveryTime:"-----"}</p>
            </div>
          )  
      }
    },

    {
      title: '下单账号',
      dataIndex: 'userNumber',
      key: 'userNumber',

      render: (item)=> {
           
          return (
              <div>
                 <p>{ item.uname }</p>
                 <p>{ item.phone }</p>
              </div>
          )
      }
    },
    {
        title: '销售总额',
        dataIndex: 'totalPrice',
        key: 'totalPrice',
        render: (item)=> {
            
            return (<p>￥{item}</p>)      
        }
    },
    {
      title: '应付总额',
      dataIndex: 'payPrice',
      key: 'payPrice',
      render: (item)=> {
          return (<p>￥{item}</p>)
      }
    },
    {
      title: '客户信息',
      dataIndex: 'customerInfo',
      key: 'customerInfo',
      render: (item)=> {
        // console.log("customerInfo")
        // console.log(item)
        // console.log("customerInfo")
          return (
              <div>
                  <p>{item.uName}</p>
                  <p>{item.phone}</p>
                  <p>{item.address}</p>
              </div>
          )
      }
    },     
    {
      title: '订单状态',
      dataIndex: 'orderState',
      key: 'orderState',
      render: (item)=> {
          switch (item) {
              
              case 1: 
                  return "代付款";
                  break;
              case 2:
                  return "审核中";
              case 3: 
                  return "配货中";
                  break;
              case 4: 

                  return "已发货";
                  break;
              case 5: 
                  return "已完成";
                  break;
              case 6: 
                  return "已取消";
                  break;
          }
      }
    },
    {
      title: '操作',
      dataIndex: 'operateText',
      key: 'operateText',
      render: (item)=> {
          return (
              <div>
                  <Button className="operate_btn">{item.payBtn}</Button> <br/>
                  <Button className="operate_btn"><Link to={ "/people/order/detail/" + item.order }>{item.orderDetail}</Link></Button><br/>

                  <Button className="operate_btn">{item.exportOrder}</Button><br/>
                  <Button className="operate_btn">{item.buyRepeat}</Button><br/>
                  <Button className="operate_btn">{item.cancelOrder}</Button>
              </div>
          )
      }
    }
]

class PeopleOrderListPage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            currentNavIndex: 0,
            tableNavArr: [
                {
                   id: 0,
            
                   title: "全部",
                   status: ""
                },
                {
                  id: 1,
                  title: "待付款",
                  status: 1
                },
                {
                  id: 2,
                  title: "配货中",
                  status: 3
                },
               
                {
                  id: 3,
                  title: "已发货",
                  status: 4
                },

                {
                
                  id: 4,
                  title: "已完成",
                  status: 5
                },
                {
                  id: 5,
                  title: "已取消",
                  
                   status: 6
                }
            ],
            orderArr: [],
            orderTotalCount: 0
        } 
    }
    componentDidMount () {
        this.getOrderListFn()
    }
    selectNavFn = (index)=> {

        let navItem = this.state.tableNavArr[index];
        this.setState({
            currentNavIndex: index
        }, function () {
            this.getOrderListFn(navItem.status)
        })
    }
    goorderDetailFn = (item)=>{
        window.localStorage.href = "/people/order/detail"
    }
    getOrderListFn = (status)=> {
        let _this = this;
        let formData = new FormData();
        let token = getStorageFn("token");
        formData.append("api", "app.orderV2.orderList");    
        formData.append("accessId", token);  
        formData.append("storeId", 1);
        formData.append("storeType", 6);
        formData.append("orderParentNo", ""); 
    
        formData.append("status", status || ""); 
        formData.append("pageSize", 5); 
        formData.append("pageNum", 1); 
        formData.append("startTime", ""); 
        formData.append("endTime", ""); 
        formData.append("keyWords", ""); 
        request({
            url: "/api/gw",         
            method: "POST",    
            data: formData
        }).then((res)=> {
            let resData = res.data.data;
            let resOrderArr = resData.records;
            let totalCount = resData.total;
            let orderArr = [];
            // console.log(resOrderArr)
            resOrderArr.forEach((item, index)=> {
                let orderItem = {
                      key: index,
                      nameList: {
                          order: item.orderParentNo,
                          prodcutNum: item.prodcutNum,
                          num: item.num
                      },
                      times: {
                          createTime: item.createTime,
                          estimatedDeliveryTime: item.estimatedDeliveryTime,
                          estimatedDeliveryTime: item.estimatedDeliveryTime,
                          realDeliveryTime: item.realDeliveryTime
                      },
                      userNumber: {
                          uname: item.name,
                          phone: item.mobile
                      },
                      totalPrice: item.totalPrice,
                      payPrice: item.payPrice,
                      customerInfo: {
                          uName: item.name,
                          phone: item.userTel,   
                          address: item.address
                      },
                      orderState:  item.status,
                      operateText: {

                          order: item.orderParentNo,
                          payBtn: "去付款",
                          orderDetail: "订单详情",
  
                          exportOrder: "导出订单",
                          buyRepeat: "再次购买",
                          cancelOrder: "取消订单"
                      }
                  }
                  orderArr.push(orderItem)
            })
            
            _this.setState({
                orderArr: orderArr,
                orderTotalCount: totalCount
            })
        })
    }
    render () {
        const dataSource = [
            {
              key: '1',
              nameList: {
                 order: '202407030000422',
                 count: 20
              },
              times: {
                 time1: "2024-07-03",
                 time2: "2024-07-04"
              },
              userNumber: {
                 uname: "丁",
                 phone: "12345"
              },
              totalMoney: 1000,
              payTotalMoney: 1500,
              customerInfo: {
                  uName: "丁",
                  phone: "12345",   
                  address: "广东省深圳市龙岗区黄屋村"
              },
              orderState:  "已取消",
              operateText: {
                  payBtn: "去付款",
                  orderDetail: "订单详情",
                  exportOrder: "导出订单",

                  buyRepeat: "再次购买",
                  cancelOrder: "取消订单"
              }
            },
            {
                key: '2',
                nameList: {
                    order: '202407030000422',
                    count: 21
                },
                times: {
                    time1: "2024-07-03",
                    time2: "2024-07-04"
                },
                userNumber: {
                    uname: "黄",
                    phone: "12345"
                },
                totalMoney: 2000,
                payTotalMoney: 2100,
                customerInfo: {
                    uName: "丁",
                    phone: "12345",
                    address: "广东省深圳市龙岗区黄屋村"
                },
                orderState:  "已取消",
                operateText: {
                  payBtn: "去付款",

                  orderDetail: "订单详情",
                  exportOrder: "导出订单",
                  buyRepeat: "再次购买",
                  cancelOrder: "取消订单"
              }
            }
          ];
        return (
            <div className="people_order_list_page_con">
                
                <div className="table_con">
                    <ul className="nav_list">
                        {this.state.tableNavArr.map((item, index)=> {
                              return (<li className={this.state.currentNavIndex==index?"on": ""} onClick={()=>{this.selectNavFn(index)}}>{ item.title }</li>)
                        })}
                    </ul>



                    {this.state.orderArr.length>0 && <Table  bordered={true} dataSource={this.state.orderArr} columns={columns} className="order_table" pagination={false}/>}
                    
                    <div className="page_con">
                        <Pagination defaultCurrent={1} total={50} className="page"/>
                    </div> 
                </div>
            </div>
        )
    }
}


export default PeopleOrderListPage