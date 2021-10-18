import React from "react";
import { ADD_MEET, GET_MEET } from "./actionType";

const initState = {
  data: [],
};

export default function meetReducer(state = initState, { type, payload }) {
  switch (type) {
    case ADD_MEET:
      return {
        ...state,
        data: [...state.data, payload],
      };
    case GET_MEET:
      return {
        ...state,
        data: [...payload],
      };
    default:
      return state;
  }
}
