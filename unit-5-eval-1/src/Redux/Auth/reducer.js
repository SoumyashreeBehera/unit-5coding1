import React from "react";
import { LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

const initState = {
  isAuth: false,
  token: "",
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
