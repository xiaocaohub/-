import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Header from "../../components/Header";

import Footer from "../../components/Footer";

import SmallCart from "../../components/SmallCart";

import PasswordShadow from "../../components/Home/PasswordShadow";
import PasswordShadowSwitch from "../../components/Home/PasswordShadowSwitch";
function Layout (props) {
        const storeData = useSelector(state=>state)
        console.log("storeData layout")
        console.log(storeData)
        console.log("storeData layout")

        return (
            <div>
                <Header></Header>
                {props.children}
                <Footer></Footer>

                {/* {this.props.state.commonState.showCartFlag && <SmallCart hideSmallCart={this.props.hideSmallCartFn}></SmallCart>} */}
           
                { storeData.commonState.showSupplyPriceFlag && <PasswordShadow></PasswordShadow>}
        
                { storeData.commonState.showSupplyPriceSwitchFlag && <PasswordShadowSwitch></PasswordShadowSwitch> }
            
            </div>
        )
}


export default Layout;