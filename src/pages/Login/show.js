import React from "react";
import {Button, Carousel, Tabs, Radio    } from "antd"; 
import Good from "../../components/Good";
import "animate.css";
import { FaBeer } from 'react-icons/fa';
import { Icon } from "@ant-design/compatible";
import "./index.css";

const { TabPane } = Tabs;
class Show extends React.Component {
    constructor (props) {   
        super(props)
        this.state = {
            value:1,
            size: 'small' 
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
        console.log(e.target.value)
    }
    render () {
        const {count} = this.props.loginState;
        return (
            <div>
                  <Button type="danger" >Danger</Button>
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

                <div className="box animate__animated animate__backInRight"></div> 
            </div>
        )
    }
}







export default Show;