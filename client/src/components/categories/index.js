import React from "react";
import {
  Frame,
  Container,
  ExploreButton,
  ExploreLink
} from "./styles/categories";
import { CategoryCard } from "../card/index";

export default function Categories({ children, ...props }) {
  return <Frame {...props}>{children}</Frame>;
}

Categories.Container = function ({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
};

Categories.Card = function ({ children, ...props }) {
  return <CategoryCard {...props}>{children}</CategoryCard>;
};

Categories.Card.Title = function ({ children, ...props }) {
  return <CategoryCard.Title {...props}>{children}</CategoryCard.Title>;
};
