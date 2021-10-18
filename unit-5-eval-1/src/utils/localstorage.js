import React from "react";

export const loadData = () => {
  let tokenData = JSON.parse(localStorage.getItem("token"));
  return tokenData;
};

// export const loadNameLocation = () => {
//   let token = JSON.parse(localStorage.getItem("data"));
//   return token;
// };

export const setData = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
};
