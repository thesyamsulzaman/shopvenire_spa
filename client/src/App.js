import React, { useState } from "react";

import { HeaderContainer as Header } from "./containers/header";
import { CategoriesContainer as Categories } from "./containers/categories";
import { FooterContainer as Footer } from "./containers/footer";
import { LoginContainer as Login } from "./containers/login";
import { RegisterContainer as Register } from "./containers/register";

import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Categories} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
