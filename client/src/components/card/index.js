import React from "react";
import { Container as CategoryContainer, Title } from "./styles/category-card";

export const CategoryCard = ({ children, ...props }) => {
  return <CategoryContainer {...props}>{children}</CategoryContainer>;
};

CategoryCard.Link = function({ children, ...props }) {
  return <Title {...props}> {children}</Title>;
};
