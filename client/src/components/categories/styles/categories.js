import styled from "styled-components";
import { Link } from "react-router-dom";


export const Frame = styled.section`
  max-width: 1180px;
  width: 95%;
  margin: 0 auto;
  margin-top: .81em;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  @media (min-width: ${({ theme }) => theme.breakPoints.ipad}) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
  }
`;

export const ExploreButton = styled.div`
  margin-top: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;

`;
export const ExploreLink = styled(Link)`
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

  & > p:hover {
    color: gray;
  }

`;
