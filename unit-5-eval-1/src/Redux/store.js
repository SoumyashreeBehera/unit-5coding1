import React from "react";
import AuthReducer from "./Auth/reducer";
import { createStore, combineReducers } from "redux";
import meetReducer from "./MeetUp/reducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  meet: meetReducer,
});

export const store = createStore(rootReducer);
