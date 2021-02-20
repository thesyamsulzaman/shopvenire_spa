import React from "react";
import { Container as CategoryContainer, Title } from "./styles/category-card";


// export const Card = ({children, ...props}) => {
// 	return <Inner {...props}></Inner>
// }

// Card.Body = function CardBody({...props}) {
// }

export const CategoryCard = ({ children, ...props }) => {
  return <CategoryContainer {...props}>{children}</CategoryContainer>;
};

CategoryCard.Link = function CategoryCardLink({ children, ...props }) {
  return <Title {...props}> {children}</Title>;
};
