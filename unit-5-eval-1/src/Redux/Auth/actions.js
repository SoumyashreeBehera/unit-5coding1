import React from "react";
import { LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

export const loginRequeset = (payload) => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    token: payload,
  };
};
