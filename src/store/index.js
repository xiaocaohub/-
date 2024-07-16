import {createStore} from "redux";
import Reducer from "./reducer";
const store = new createStore(Reducer);

export default store;