import React from "react";
import logo from "./assets/shopvenire-icon-black.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Link to="/">
      <img src={logo} width="150" />
    </Link>
  );
};
