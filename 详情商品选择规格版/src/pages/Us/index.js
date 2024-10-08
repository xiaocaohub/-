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
        },
        // 统计购物车数量
        
        totalCartGoodCountFn (goodCount) {
            console.log("totalCartGoodCountFn")
            console.log(goodCount)

            dispatch({type:"change_good_count", payload: goodCount})
        }
    }
}

let Us = connect(mapStateToProps, mapDispatchToProps)(Show);

export default Us;