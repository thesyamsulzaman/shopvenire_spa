import React from "react";
import { Container as CategoryContainer, Title as CategoryTitle } from "./styles/category-card";
import {
  Container as CardContainer,
  Title,
  Brand,
  Body,
  Image,
  Price,
  Info
} from "./styles/card";

export const Card = ({ children, ...props }) => {
  return <CardContainer {...props}> { children } </CardContainer>;
};

Card.Body = function CardBody({ children, ...props }) {
  return <Body {...props}>{children}</Body>;
};

Card.Image = function CardImage({ children, ...props }) {
  return <Image {...props} />;
};

Card.Info = function CardInfo({ children, ...props }) {
  return <Info {...props}>{children}</Info>;
};

Card.Title = function CardTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};
Card.Brand = function CardBrand({ children, ...props }) {
  return <Brand {...props}>{children}</Brand>;
};

Card.Price = function CardPrice({ children, ...props }) {
  return <Price {...props}>{children}</Price>;
};

export const CategoryCard = ({ children, ...props }) => {
  return <CategoryContainer {...props}>{children}</CategoryContainer>;
};

CategoryCard.Link = function CategoryCardLink({ children, ...props }) {
  return <CategoryTitle {...props}> {children}</CategoryTitle>;
};
