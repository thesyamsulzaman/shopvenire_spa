import React, { useState } from "react";
import { Home, Login, Register } from "./pages/";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};
