import styled from "styled-components";
import { Link } from "react-router-dom";

export const Frame = styled.div`
  max-width: 1180px;
  width: 95%;
  margin: 0 auto;
  height:auto;
  padding:.7em 0;
`;

export const List = styled.ul`
  display:block;
`;

export const Item = styled.li`
  margin: 0 .4em;
  display:block;
  border: 1px solid blue;

  &:first-child { margin-left:0; }
  &:last-child {}
`;

export const Route = styled(Link)`
  font-family: Inter Bold;
  text-decoration:none;
  color: #454547;
  font-size: 0.9rem;

  &:hover { text-decoration: underline; }

`;
