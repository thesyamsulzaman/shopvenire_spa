import React from "react";
import { Frame, List, Item, Route } from "./styles/breadcrumb";

export default function BreadCrumb({ children, ...props }) {
  return <Frame {...props}>{children}</Frame>;
}

BreadCrumb.List = function BreadCrumbList({ children, ...props }) {
  return <List {...props}>{children}</List>;
}

BreadCrumb.Item = function BreadCrumbItem({ children, ...props }) {
  return <Item {...props}>{children}</Item>;
}

BreadCrumb.Link = function BreadCrumbLink({ children, ...props }) {
  return <Route {...props}>{children}</Route>;
}
