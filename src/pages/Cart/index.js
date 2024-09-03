import {connect} from "react-redux";
import Show from "./show";
import {setUserInfoAction} from "../../actions/cart";

let mapStateToProps = state=> {
    
    console.log("mapstate")
    console.log(state)
    return {
        state: {
            commonState: state.commonState,
            cartState: state.cartState
        }
    }
}

let mapDispatchToProps = dispatch=> {

    return {
        hideSmallCartFn () {
            dispatch({type:"show_small_cart", payload: false})
        },
        changeInfo (userInfo) {
            // console.log("mapDispatch")
            // console.log(userInfo)
            // console.log("mapDispatch")


            let action = setUserInfoAction(userInfo);
            dispatch(action)
        },
        // 统计购物车数量
        totalCartGoodCountFn (goodCount) {
            console.log("totalCartGoodCountFn")
            console.log(goodCount)

            dispatch({type:"change_good_count", payload: goodCount})
        

        }
    }
}


let Cart = connect(mapStateToProps, mapDispatchToProps)(Show);
export default Cart;