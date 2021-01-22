import React from "react";

import bagIcon from "./assets/shopping-bag.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

// import Link from React Router
//
const CartLabel = styled.p`
  display: inline-block;
  background: #111;
  padding: 0.2em 0.3em;
  color: #fff;
  border-radius: 5px;
  position: absolute;
  top: -0.35em;
  left: 0;
  font-size: 0.8rem;
`;

const NavCart = styled(Link)`
  color: #111;
  position: relative;
  text-decoration: none;
`;

export default (props) => {
  return (
    <NavCart to="/cart">
      <img src={bagIcon} width="30" />
      <CartLabel>18</CartLabel>
    </NavCart>
  );
};
