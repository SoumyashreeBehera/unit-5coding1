import React from "react";
import { ADD_MEET } from "./actionType";

const initState = {
  data: { title: "", description: "", date: "", time: "" },
};

export default function meetReducer(state = initState, { type, payload }) {
  switch (type) {
    case ADD_MEET:
      return {
        ...state,
        data: { ...state.data, ...payload },
      };
    default:
      return state;
  }
}
