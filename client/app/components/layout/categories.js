import React from "react";
import { Container } from "../base/container";
import CategoryCards from "../modules/category-cards";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryContainer = styled(Container)`
  padding: 0.81em 0;
`;

const NavMenuLink = styled(Link)`
  display: block;
  color: #111;
  margin-top: 0.5em;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
`;

export default () => {
  return (
    <CategoryContainer>
      <h1>Categories</h1>
      <CategoryCards />
    </CategoryContainer>
  );
};
//<NavMenuLink to="/login">Login</NavMenuLink>
//<NavMenuLink to="/register">Register</NavMenuLink>
