import {connect} from "react-redux";
import Show from "./show";
var mapStateToProps = (state)=> {

    return {
        title: "production"
    }
}


var mapDispatchToProps = (dispatch)=> {

    return {

    }
}

const ProductRoom = connect(mapStateToProps, mapDispatchToProps)(Show);
export default ProductRoom;

