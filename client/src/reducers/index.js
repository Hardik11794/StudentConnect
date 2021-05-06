import { combineReducers } from "redux";

import AlertReducer from "./alert";
import auth from "./auth";

export default combineReducers({ AlertReducer, auth });
