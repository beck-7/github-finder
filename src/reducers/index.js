import { combineReducers } from "redux";
import githubReducer from "./githubReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  gh: githubReducer,
  alert: alertReducer,
});
