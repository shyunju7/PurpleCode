import { combineReducers } from "redux";
import userReducer from "./User";
import loginReducer from "./Login";

const rootReducer = combineReducers({
  userReducer,
  loginReducer,
});

export default rootReducer;
