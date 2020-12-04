import { combineReducers } from "redux";
import userReducer from "./User";
import loginRegister from "./Login";

const rootReducer = combineReducers({
  userReducer,
  loginRegister,
});

export default rootReducer;
