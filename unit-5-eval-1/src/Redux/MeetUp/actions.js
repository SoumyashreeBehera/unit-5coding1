import React from "react";
import { ADD_MEET } from "./actionType";

export const addMeet = (payload) => {
  return {
    type: ADD_MEET,
    payload: payload,
  };
};
