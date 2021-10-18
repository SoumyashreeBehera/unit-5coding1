import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

export default function Dashboard() {
  const { isAuth } = useSelector((state) => state.auth);
  return !isAuth ? <Redirect to="/login" /> : <div>Dashboard</div>;
}
