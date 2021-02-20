import React from "react";
import { Frame, Container } from "./styles/products";

export default function Products({ children, ...props }) {
  return <Frame {...props}>{children}</Frame>;
}

Products.Container = function ProductsContainer({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
};
