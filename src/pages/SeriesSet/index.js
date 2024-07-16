import {connect} from "react-redux";
import Show from "./show";
var mapStateToProps = (state)=> {
    return {
        title: "series"
    }
}

var mapDispatchToProps = (dispatch)=> {
    return {

    }
}



const SeriesSet = connect(mapStateToProps, mapDispatchToProps)(Show);

export default SeriesSet;