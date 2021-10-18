import React from "react";
import { ADD_MEET, GET_MEET } from "./actionType";

export const addMeetAction = (payload) => {
  return {
    type: ADD_MEET,
    payload: payload,
  };
};

export const getMeetAction = (payload) => {
  return {
    type: GET_MEET,
    payload: [...payload],
  };
};
