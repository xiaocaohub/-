import { combineReducers } from "redux";
import commonState from "./common.js";
import homeState from "./home.js";

import productRoomReducer from "./ProductRoom.js";
export default combineReducers({
    commonState,

    homeState,
    
    productRoomReducer
})






