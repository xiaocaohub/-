import {connect} from "react-redux";
import Show from "./show";
import {getGoodInfoAction} from "../../actions/ProductRoomDetail";

let mapStateToProps = state=> {
    // console.log("mapState", state)
    return {
        productRoomDetailState: state.productRoomDetailState
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
            // request({
            //     url: "/api/gw",         
            //     method: "POST",
            //     data: formData
            // }).then((res)=> {
            //     console.log(res)
            //     let resData = res.data.data;
            // })
       
                let action = getGoodInfoAction(formData)(dispatch)
        
        }
    }
}




let ProductRoomDetail = connect(mapStateToProps, mapDispatchToProps)(Show);



export default ProductRoomDetail;