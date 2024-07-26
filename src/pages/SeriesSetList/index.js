import {connect} from "react-redux";
import Show from "./show";
let mapStateToProps = state=> {

    console.log("state", state)
    return {

    }
}


let mapDispatchToProps = dispatch=> {

    return {

    }
}

let SeriesSetList = connect(mapStateToProps, mapDispatchToProps)(Show);

export default SeriesSetList;