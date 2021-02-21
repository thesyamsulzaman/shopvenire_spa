import styled from "styled-components";
import { Link } from "react-router-dom";

export const Frame = styled.section`
  max-width: 1180px;
  width: 95%;
  margin: 0 auto;
  margin-top: 0.81em;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakPoints.ipad}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Items = styled.div`
  height: 100%;
  width: 100%;

  & > div:not(:first-child) {
  }
`;

export const Item = styled.div`
  height: 100px;
  padding-left: 0.5em;
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  margin-top: 0.5em;

  &:first-child {
    margin-top: 0;
  }
`;

export const Image = styled.div`
  height: 100%;
  width: 80px;
  background-color: gray;
`;
//export const Image = styled.img``

export const Info = styled.div`
  height: 80px;
  width: auto;
  flex: 1;
  margin-left: 0.7em;
`;
export const TitleInfo = styled(Link)`
  display: block;
  color: #262b30;
  font-size: 1rem;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const BrandInfo = styled(Link)`
  margin-top: 0.5em;
  display: block;
  color: #565f6a;
  font-size: 0.7rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Action = styled.div`
  margin-top: 0.5em;
  border: 2px solid #d3d4d5;
  padding: 0.3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;

  & > button {
    border: none;
    background: none;
    outline: 0;
    color: #d3d4d5;
    font-size: 1rem;
    padding: 0;
    font-weight: bold;

    &:hover {
      color: blue;
    }
  }
`;

export const Amount = styled.p``;
export const Price = styled.p`
  position: absolute;
  right: 0;
  bottom: 0;
  color: #262b30;
  font-size: 1rem;
  padding: 0.5em;
  font-weight: bold;
`;

export const Remove = styled.a`
  position: absolute;
  right: 0;
  top: 0;
  color: #262b30;
  font-size: 1rem;
  padding: 0.5em;
  font-weight: bold;
`;

export const Checkout = styled.div`
  height: 100%;
  width: 100%;
  border: 2px solid #d3d4d5;
  margin-top: 1em;
  padding: 0.5em;

  @media (min-width: ${({ theme }) => theme.breakPoints.ipad}) {
    margin-top: 0;
    margin-left: 1em;
  }
`;

export const Total = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:.5em 0;
  margin-top:.80em

  & p {
    font-color: blue;
  }

`;

export const Proceed = styled(Link)`
  text-decoration:none;
  text-align:center;
  display:block;
  max-width: 100%;
  margin-top:.7em;
  color: #fff;
  background-color: #111;
  border: none;
  padding: 0.8em 0;
`;
