import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Routes() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <h3>Dashboard</h3>
        </Route>
        <Route path="/login" exact>
          <h3>Login</h3>
        </Route>
      </Switch>
    </div>
  );
}
