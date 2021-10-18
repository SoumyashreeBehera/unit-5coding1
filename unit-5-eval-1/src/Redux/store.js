import React from "react";
import AuthReducer from "./Auth/reducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export const store = createStore(rootReducer);
