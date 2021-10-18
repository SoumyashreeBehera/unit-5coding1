import React from "react";
import { ADD_MEET } from "./actionType";

export const addMeetAction = (payload) => {
  return {
    type: ADD_MEET,
    payload: payload,
  };
};

export const getMeetAction = (payload) => {
  return {
    type: ADD_MEET,
    payload: payload,
  };
};
