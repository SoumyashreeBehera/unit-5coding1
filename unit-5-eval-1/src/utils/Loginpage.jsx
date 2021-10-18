import React from "react";
import Login from "../components/Login";
import { useDispatch, useSelector } from "react-redux";
import { loginRequeset, loginSuccess } from "../Redux/Auth/actions";
import { Redirect } from "react-router";
import axios from "axios";

export default function LoginPage() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  const handleLogin = ({ email, password }) => {
    dispatch(loginRequeset());
    let fun = async () => {
      let res = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      console.log(res.data);
      let success = loginSuccess(res.data);
      dispatch(success);
    };
    fun();
  };
  return isAuth ? (
    <Redirect to="/" />
  ) : (
    <div>
      <Login handleLogin={handleLogin} />
    </div>
  );
}
