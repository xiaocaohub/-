let defaultState = {
    showCartFlag: false
}

function commonReducer (state = defaultState, action) {
    const {type, payload} = action;
    if (type=="show_small_cart") {
        let newState = JSON.parse(JSON.stringify(state));
        newState.showCartFlag = payload;

        return newState;
    }
    return state;
}


export default commonReducer;