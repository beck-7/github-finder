import { combineReducers } from "redux";
import githubReducer from "./githubReducer";

export default combineReducers({
  gh: githubReducer,
});
