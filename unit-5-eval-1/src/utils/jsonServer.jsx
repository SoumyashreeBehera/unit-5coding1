import axios from "axios";
import React from "react";

export const addNewMeet = async ({ title, description, date, time }) => {
  let res = await axios.post("http://localhost:3001/meets", {
    title: title,
    description: description,
    date: date,
    time: time,
  });
  let data = res.data;
  return data;
};

export const getAllMeet = async () => {
  let res = await axios.get("http://localhost:3001/meets");
  let data = res.data;
  return data;
};
