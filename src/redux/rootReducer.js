import { combineReducers } from "redux";
import reducer from "./auth/reducer";

const rootReducer = combineReducers({authReducer : reducer})

export default rootReducer