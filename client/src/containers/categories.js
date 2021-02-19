import React from "react";

import braceletImage from "./categories/bracelet_categories.jpg";
import hoodieImage from "./categories/hoodie_categories.jpg";
import keyChainsImage from "./categories/keychains_categories.jpg";
import necklacesImage from "./categories/necklaces_categories.jpg";
import outwearImage from "./categories/outwear_categories.jpg";
import arrowRight from "./categories/arrow-right.svg";

import Categories from "../components/categories";

import { CategoryCard } from "../components/card";

import {
  ExploreButton,
  ExploreLink
} from "../components/categories/styles/categories";

const categories = [
  {
    id: 5,
    link: "/outwears",
    image: outwearImage,
    title: "Outwears"
  },
  {
    id: 1,
    link: "/bracelets",
    image: braceletImage,
    title: "Bracelets"
  },
  {
    id: 4,
    link: "/necklaces",
    image: necklacesImage,
    title: "Necklaces"
  },
  {
    id: 2,
    link: "/hoodies",
    image: hoodieImage,
    title: "Hoodies"
  },
  {
    id: 3,
    link: "/keychains",
    image: keyChainsImage,
    title: "Keychains"
  },
];

export function CategoriesContainer({ children, ...props }) {
  return (
    <Categories>
      <h2> Categories</h2>
      <Categories.Container>
        {categories.map(category => {
          return (
            <CategoryCard key={category.id} imageUrl={category.image}>
              <CategoryCard.Link to={category.link}>
                {category.title}
              </CategoryCard.Link>
            </CategoryCard>
          );
        })}

        <ExploreButton>
          <ExploreLink to="/products">
            <p>Explore All</p>
            <img src={arrowRight} width="25" alt="" />
          </ExploreLink>
        </ExploreButton>
      </Categories.Container>
    </Categories>
  );
}
