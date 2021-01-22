import React from "react";
import styled from "styled-components";
import NavBar from "../modules/navbar";

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1);
  z-index: 99;
`;

export default () => {
  return (
    <Header>
      <NavBar />
    </Header>
  );
};
