import React, { useState } from "react";
import menu from "./assets/menu.svg";
import exit from "./assets/exit.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../base/container";

const MenuToggler = styled.div`
  cursor: pointer;
`;

export default (props) => {
  const { showMenu, onToggle } = props;

  return (
    <MenuToggler onClick={() => onToggle()}>
      {showMenu ? <img src={menu} width="25" /> : <img src={exit} width="25" />}
    </MenuToggler>
  );
};
