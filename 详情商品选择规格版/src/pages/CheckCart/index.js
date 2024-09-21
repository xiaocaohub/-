import {connect} from "react-redux";
import Show from "./show";
let mapStateToProps = state=> {
    return {

    }
}


let mapDispatchToProps = dispatch=> {
    return {
        // 统计购物车数量
        totalCartGoodCountFn (goodCount) {
            console.log("totalCartGoodCountFn")
            console.log(goodCount)

            dispatch({type:"change_good_count", payload: goodCount})
        }
    }
}

let CheckCart = connect(mapStateToProps, mapDispatchToProps)(Show);

export default CheckCart;