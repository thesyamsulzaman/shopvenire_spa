import styled from "styled-components";
import { Link } from "react-router-dom";

export const Frame = styled.section`
  max-width: 1180px;
  width: 95%;
  margin: 0 auto;
`
export const Container = styled.div`
  padding: .51em 0; 
  display:grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;

  @media (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.ipad}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
