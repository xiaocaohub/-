import {connect} from "react-redux";
import Show from "./show";
let mapStateToProps = state=> {
    
    return {

        state: {
            commonState: state.commonState
        }
    }
}


let mapDispatchToProps = dispatch=> {
    return {

        hideSmallCartFn () {
            dispatch({type:"show_small_cart", payload: false})
        }
    }
}


let Cart = connect(mapStateToProps, mapDispatchToProps)(Show);
export default Cart;