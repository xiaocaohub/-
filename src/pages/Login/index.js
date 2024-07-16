import React from "react";
import {connect} from "react-redux";


import Show from "./show";
const mapStateToProps = (state)=> {
    return {
        loginState: state.loginState
    }
}



const mapDispatchToProps = (dispatch)=> {
    return {

        addFn () {

            dispatch({type: "add_count"})
        }
    }
}



const Login = connect(mapStateToProps, mapDispatchToProps)(Show);
export default Login;