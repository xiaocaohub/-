import {connect} from "react-redux";
import Show from "./show.js";
let mapStateToProps = state=> {

    console.log("login page state", state)
    return {

    }
}


let mapDispatchToProps = dispatch=> {
    return {

    }
}




let LoginPage  = connect(mapStateToProps, mapDispatchToProps)(Show); 



export default LoginPage;