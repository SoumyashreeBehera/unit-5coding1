import React from "react";
import AuthReducer from "./Auth/reducer";
import { combineReducer } from "redux";

const rootReducer = combineReducer({
  auth: AuthReducer,
});

export const store = createStore(rootReducer);
