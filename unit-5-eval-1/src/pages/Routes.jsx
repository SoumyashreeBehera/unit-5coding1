import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import LoginPage from "../utils/Loginpage";
import Dashboard from "./Dashboard";

export default function Routes() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}
