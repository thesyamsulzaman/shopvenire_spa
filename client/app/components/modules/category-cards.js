import React from "react";
import styled from "styled-components";
import CategoryCard from "./category-card.js";
import bracelet from "./assets/categories/bracelet_categories.jpg";
import hoodie from "./assets/categories/hoodie_categories.jpg";
import keychain from "./assets/categories/keychains_categories.jpg";
import necklace from "./assets/categories/necklace_categories.jpg";
import outwear from "./assets/categories/outwear_categories.jpg";
import arrowRight from "./assets/arrow-right.svg";

import { Link } from "react-router-dom";

const CategoryCards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  @media (min-width: ${({ theme }) => theme.breakPoints.ipad}) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
  }
`;

const ExploreButton = styled.div`
  margin-top: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ExploreLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  padding: 0.5em 1em;
  text-decoration: none;

  & > p {
    color: #111;
    text-transform: uppercase;
    margin-right: 1em;
  }
`;

export default ({ children }) => {
  return (
    <section>
      <CategoryCards>
        <CategoryCard imageUrl={outwear}>Outwear</CategoryCard>
        <CategoryCard imageUrl={bracelet}>Bracelet</CategoryCard>
        <CategoryCard imageUrl={necklace}>Necklace</CategoryCard>
        <CategoryCard imageUrl={hoodie}>Hoodie</CategoryCard>
        <CategoryCard imageUrl={keychain}>Keychain</CategoryCard>

        <ExploreButton>
          <ExploreLink>
            <p>Explore All</p>
            <img src={arrowRight} width="25" alt="" />
          </ExploreLink>
        </ExploreButton>
      </CategoryCards>
    </section>
  );
};
