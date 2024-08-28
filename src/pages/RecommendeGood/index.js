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

const RecommendeGood = connect(mapStateToProps, mapDispatchToProps)(Show);

export default RecommendeGood;