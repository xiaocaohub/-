let defaultState = {
    showCartFlag: false
}

function commonReducer (state = defaultState, action) {
    console.log("common state", state)
    console.log("common action", action)

    const {type, payload} = action;

    if (type=="show_small_cart") {
        let newState = JSON.parse(JSON.stringify(state));
        newState.showCartFlag = payload;
      
        

        console.log("newState", newState)
        return newState;
    }
    return state;
}



export default commonReducer;