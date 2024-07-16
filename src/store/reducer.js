import homeState from "./home";
import loginState from "./login";
import {combineReducers} from "redux";

export default combineReducers({
    homeState,
    loginState
})
