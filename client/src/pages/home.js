import React from "react";
import { HeaderContainer } from "../containers/header";
import { CategoriesContainer } from "../containers/categories";
import { FooterContainer } from "../containers/footer";

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <CategoriesContainer />
      <FooterContainer />
    </>
  );
}
