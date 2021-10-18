import React from "react";
import { loadData } from "../../utils/localstorage";
import { LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

let tokenData = loadData();

const initState = {
  isAuth: tokenData || false,
  token: tokenData ? tokenData.token : "",
};

export default function AuthReducer(state = initState, { type, payload }) {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload,
      };

    default:
      return state;
  }
}
