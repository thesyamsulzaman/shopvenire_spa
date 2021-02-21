import React from "react";
import { HeaderContainer } from "../containers/header";
import { CartContainer } from "../containers/cart";
import { FooterContainer } from "../containers/footer";

export default function Cart() {
  return (
    <>
      <HeaderContainer />
      <CartContainer />
      <FooterContainer />
    </>
  );
}
