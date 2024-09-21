import {CHECK_SUPPLY_PRICE, SWITCH_SUPPLY_PRICE} from "../actionType/common";
let defaultState = {
    showCartFlag: false, // 显示小购物车

    showSupplyPriceFlag: false, // 显示供货价弹窗
    
    showSupplyPriceSwitchFlag: false, // 显示供货价查看弹窗
    goodCount: 0 // 购物车数量
}
function commonReducer (state = defaultState, action) {

    // console.log("action")
    // console.log(action)
    // console.log("action")
    const {type, payload} = action;

    if (type=="show_small_cart") {
        let newState = JSON.parse(JSON.stringify(state));
        newState.showCartFlag = payload;
        return newState;
    }

    if (type== "change_good_count") {
        let newState = JSON.parse(JSON.stringify(state));
        newState.goodCount = payload;
    
        return newState; 
    }
    if (type == CHECK_SUPPLY_PRICE) {

        let newState = JSON.parse(JSON.stringify(state));
        newState.showSupplyPriceFlag = payload;
        return newState;
    }





    if (type == SWITCH_SUPPLY_PRICE) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.showSupplyPriceSwitchFlag = payload;
        return newState;
    }
    return state;
}



export default commonReducer;