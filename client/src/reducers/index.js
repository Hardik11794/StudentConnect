import { combineReducers } from "redux";

import AlertReducer from "./alert";
import auth from "./auth";
import profile from "./profile";
import postReducer from "./post";

export default combineReducers({ AlertReducer, auth, profile, postReducer });
