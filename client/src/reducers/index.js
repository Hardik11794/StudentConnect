import { combineReducers } from "redux";

import AlertReducer from "./alert";
import auth from "./auth";
import profile from "./profile";
import post from "./post";

export default combineReducers({ AlertReducer, auth, profile, post });
