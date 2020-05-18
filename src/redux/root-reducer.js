import { combineReducers } from "redux";
import oneReducer from "./one-action/one.reducer";


export default combineReducers({
    one:oneReducer
})

