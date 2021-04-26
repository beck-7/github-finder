import { combineReducers } from '@reduxjs/toolkit';
import githubSlice from "./githubSlice";
import alertSlice from "./alertSlice";

export default combineReducers({
  gh: githubSlice,
  alert: alertSlice
});
