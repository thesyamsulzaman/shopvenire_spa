import React from "react";
import { Container } from "../base/container";
import styled from "styled-components";

const ShoppingCartContainer = styled(Container)`
  padding: 0.81em 0;
`;

export default () => {
  return (
    <ShoppingCartContainer>
      <h1>Shopping Cart</h1>
    </ShoppingCartContainer>
  );
};
