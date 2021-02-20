import React from "react";
import { HeaderContainer } from "../containers/header";
import { ProductsContainer } from "../containers/products";
import { FooterContainer } from "../containers/footer";

export default function Products() {
  return (
    <>
      <HeaderContainer />
      <ProductsContainer />
      <FooterContainer />
    </>
  );
}
