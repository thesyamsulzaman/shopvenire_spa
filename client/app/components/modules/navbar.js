import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./toggler";
import Logo from "./logo";
import Cart from "./cart";
import { Link } from "react-router-dom";

const Navbar = styled.nav`
  max-width: 1180px;
  width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2em 0;
  position: relative;
`;

const NavToggler = styled.div``;

const Sidebar = styled.div`
  background-color: #fff;
  position: absolute;
  display: block;
  padding: 0.5em 0.8em;
  border: 1px solid darkgray;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
`;

const NavMenuLink = styled(Link)`
  display: block;
  color: #111;
  margin: 0.5em 0;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
`;

export default ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
    setShowMenu(!showMenu);
  };

  return (
    <Navbar>
      <NavToggler>
        <Menu showMenu={showMenu} onToggle={() => toggleSidebar()} />
        {sidebar && (
          <Sidebar>
            <NavMenuLink to="/login">Login</NavMenuLink>
            <NavMenuLink to="/register">Register</NavMenuLink>
          </Sidebar>
        )}
      </NavToggler>
      <Logo />
      <Cart />
    </Navbar>
  );
};
