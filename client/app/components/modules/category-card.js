import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  position: relative;
  margin-top: 1.2em;
  min-height: 150px;
  height: auto;
  width: 100%;
  border-radius: 10px;
  background-size: cover;

  display: flex;
  align-items: flex-end;
  padding: 0.71em;
  transition: 0.1s ease-in-out;

  background-image: url(${({ imageUrl }) => imageUrl});

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border-radius: 10px;
    background: #111;
    opacity: 0.6;
    transition: 0.1s ease-in-out;
  }

  &:hover:before {
    background: #111;
    opacity: 0.8;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.ipad}) {
    &:nth-child(1) {
      grid-row: 1 / 3;
      grid-column: 1/3;
    }
    &:nth-child(2) {
      grid-column: 3 / 5;
    }
    &:nth-child(3) {
    }
    &:nth-child(4) {
      grid-row: 2 / 4;
    }
    &:nth-child(5) {
      grid-column: 1 /3;
    }
  }
`;

const CardTitle = styled(Link)`
  font-size: 1.2rem;
  font-weight: bold;
  z-index: 10;
  color: #fff;
`;

export default ({ imageUrl, children }) => {
  return (
    <Card imageUrl={imageUrl}>
      <CardTitle to="/hoodie">{children}</CardTitle>
    </Card>
  );
};
