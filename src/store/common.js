let defaultState = {
    showCartFlag: false,


    goodCount: 0
}
function commonReducer (state = defaultState, action) {
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
    return state;
}


export default commonReducer;