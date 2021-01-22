import React from "react";
import menu from "./assets/menu.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../base/container";

const MenuToggler = styled.div``;

const NavMenu = styled(Container)`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 0.5em 0;
  background: #fff;
  z-index: 20;
`;

const NavMenuLink = styled(Link)`
  display:block;
  color: #111;
  margin-top: .50em;
  font-weight: 400;
  text-transform:uppercase;
  text-decoration:none;
`;

export default () => {
  return (
    <MenuToggler>
      <img src={menu} width="25" />
      <NavMenu>
        <NavMenuLink to="/login">Login</NavMenuLink>
        <NavMenuLink to="/register">Register</NavMenuLink>
      </NavMenu>
    </MenuToggler>
  );
};
