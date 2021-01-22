import React, { useState } from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/layout/header";
import Categories from "./components/layout/categories";
import ShoppingCart from "./components/layout/cart";
import Login from "./components/layout/login";
import Register from "./components/layout/register";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Categories}/>
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

//const App = () => {
  //return (
    //<BrowserRouter>
      //<Header />
      //<Switch>
        //<Route exact path="/">
          //<Categories />
        //</Route>
        //<Route path="/cart" render={ShoppingCart} />
        //<Route path="/login" >
          //<Login />
        //</Route>
        //<Route path="/register">
          //<Register />
        //</Route>
      //</Switch>
    //</BrowserRouter>
  //);
//};

export default App;
