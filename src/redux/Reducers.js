import { combineReducers } from "redux";
import authReducer from "../action/loginAction";

export default combineReducers({
  auth: authReducer,
});
