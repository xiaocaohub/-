import {connect} from "react-redux";
import Show from "./show";
var mapStateToProps = (state)=> {
    return {
        state: {
            commonState: state.commonState
        }
    }
}
var mapDispatchToProps = (dispatch)=> {
    return {       
        hideSmallCartFn () {
               dispatch({type:"show_small_cart", payload: false})
        }
    }
}

let Us = connect(mapStateToProps, mapDispatchToProps)(Show);

export default Us;