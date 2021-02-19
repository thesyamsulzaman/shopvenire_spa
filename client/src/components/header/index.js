import React from "react";
import { Link } from "react-router-dom";
import { Backround, Navbar, Hamburger, Cart, Logo } from "./styles/header";
import ShopvenireLogo from "./assets/shopvenire-icon-black.png";
import ShoppingCarticon from "./assets/shopping-bag.svg";
import Hamburgericon from "./assets/menu.svg";

export default function Header({ children, ...props }) {
  return <Backround {...props}> {children}</Backround>;
}

Header.Navbar = function ({ children, ...props }) {
  return <Navbar {...props}> {children}</Navbar>;
};

Header.Navbar.Logo = function ({ children, ...props }) {
  return (
    <Logo to="/">
      <img src={ShopvenireLogo} />
    </Logo>
  );
};
Header.Navbar.Cart = function ({ children, ...props }) {
  return (
    <Cart to="/cart" {...props}>
      <img src={ShoppingCarticon} />
    </Cart>
  );
};
Header.Navbar.Hamburger = function ({ children, ...props }) {
  return (
    <Hamburger href="#" {...props}>
      <img src={Hamburgericon} />
    </Hamburger>
  );

};
