import React from "react";

import Categories, { ExploreAllButton } from "../components/categories";
import { categoryItems } from "../fixtures/categories";

import { CategoryCard } from "../components/card";


export function CategoriesContainer({ children, ...props }) {
  return (
    <Categories>
      <h2> Categories</h2>
      <Categories.Container>
        {categoryItems.map(category => {
          return (
            <CategoryCard key={category.id} imageUrl={category.image}>
              <CategoryCard.Link to={category.link}>
                {category.title}
              </CategoryCard.Link>
            </CategoryCard>
          );
        })}
        <ExploreAllButton />

      </Categories.Container>
    </Categories>
  );
}
