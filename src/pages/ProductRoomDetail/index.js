import {connect} from "react-redux";
import Show from "./show";
import {getGoodInfoAction} from "../../actions/ProductRoomDetail";

let mapStateToProps = state=> {
    // console.log("mapState detail")
    // console.log(state)
    // console.log("mapState detail")
    return {
        productRoomDetailState: state.productRoomDetailState,
        state: {
            commonState: state.commonState
        }
    }
}

let mapDispatchToProps = dispatch=> {
    return {
        getGoodInfoFn (goodId) {
            let _this = this;    
            let formData = new FormData();
            let option = {"brandId":"","minPrice":"","maxPrice":""};
            formData.append("api", "app.product.productDetails");          
            formData.append("storeId", 1);
            formData.append("storeType", 6);
            formData.append("productId", goodId);       
            let action = getGoodInfoAction(formData)(dispatch)
        },
        hideSmallCartFn () {
            dispatch({type:"show_small_cart", payload: false})
        }
    }
}

let ProductRoomDetail = connect(mapStateToProps, mapDispatchToProps)(Show);





export default ProductRoomDetail;