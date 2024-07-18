import React from "react";
import {connect} from "react-redux";
import Show from "./show";

var mapStateToProps = (state)=> {
 
    return {
        state: state
    }
}


var mapDispatchToProps = (dispatch)=> {
   
    return {
        getHomeDataFn () {

        }
    }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(Show);
export default Home;