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

  & > div:not(:first-child) { }
`;

export const Item = styled.div`
  height: 100px;
  padding-left: .5em;
  display:flex;
  align-items:center;
`;

export const Image = styled.div`
  height: 80px;
  width: 80px;
  background-color: gray;
`;
//export const Image = styled.img``

export const Info = styled.div`
  height: 80px;
  width: auto;
  background: blue;
  flex: 1;
  margin-left: .7em;
`

export const Checkout = styled.div`
  height: 300px;
  width: 100%;
  background: red;

  @media (min-width: ${({ theme }) => theme.breakPoints.ipad}) {
    margin-left: 1em;
  }
`;
