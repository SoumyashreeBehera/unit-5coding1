import React from "react";
import Login from "../components/Login";
import { useDispatch, useSelector } from "react-redux";

export default function LoginPage() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  const handleLogin = async ({ email, password }) => {};
  return (
    <div>
      <Login handleLogin={handleLogin} />
    </div>
  );
}
