import React, { useState } from "react";
import { Home, Login, Register, Products, Cart, Checkout, ProductDetail } from "./pages";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
};
