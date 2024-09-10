import {connect} from "react-redux";
import Show from "./show";
let mapStateToProps = state=> {

    console.log("state", state)
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
        },
        // 统计购物车数量
        totalCartGoodCountFn (goodCount) {
            dispatch({type:"change_good_count", payload: goodCount})
        }
    }
}

let SeriesSetList = connect(mapStateToProps, mapDispatchToProps)(Show);
export default SeriesSetList;