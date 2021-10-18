import React from "react";

export const loadData = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  return token;
};

export const setData = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
};
