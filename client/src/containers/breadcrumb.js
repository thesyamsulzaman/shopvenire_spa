import React from "react";
import BreadCrumb from "../components/breadcrumb";

const routes = [
  {
    path: "/",
    exact: true,
    crumb: () => <div>Home Crumb</div>,
    main: () => <div>Home Page</div>
  },
  {
    path: "/products",
    crumb: () => <div>Home Crumb</div>,
    main: () => <div>Home Page</div>
  }
];

export function BreadCrumbContainer({ children, ...props }) {
  return <BreadCrumb>{children}</BreadCrumb>;
}
