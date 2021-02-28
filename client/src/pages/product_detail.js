import React from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";

import { BreadCrumbContainer } from "../containers/breadcrumb";
import BreadCrumb from "../components/breadcrumb";

export default function ProductDetail() {
  return (
    <>
      <HeaderContainer />
      <BreadCrumbContainer>
        <BreadCrumb.List>
          <BreadCrumb.Item>
            <BreadCrumb.Link to="/">Home</BreadCrumb.Link>
          </BreadCrumb.Item>
            <b>/</b>
          <BreadCrumb.Item>
            <BreadCrumb.Link to="/products">Outwears</BreadCrumb.Link>
          </BreadCrumb.Item>
            <b>/</b>
          <BreadCrumb.Item>
            <BreadCrumb.Link to="/products">Redist Long Sleeve Hoodie</BreadCrumb.Link>
          </BreadCrumb.Item>
        </BreadCrumb.List>
      </BreadCrumbContainer>
      <FooterContainer />
    </>
  );
}
