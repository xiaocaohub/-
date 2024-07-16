const defaultState = {
    uname: "",
    pword: "",

    count: 1
}

function loginState (state=defaultState, action={}) {
    const {type} = action;
    if (type === "add_count") {
        const newState = JSON.parse(JSON.stringify(state));
        newState.count += 1;
        return newState;
    }
    return state;
}


export default loginState;