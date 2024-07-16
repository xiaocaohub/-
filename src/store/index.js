import {createStore} from "redux";
import Reducer from "./reducer";
let store = new createStore(Reducer);

export default store;