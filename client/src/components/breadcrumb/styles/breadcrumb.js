import styled from "styled-components";
import { Link } from "react-router-dom";

export const Frame = styled.div`
  max-width: 1180px;
  width: 95%;
  margin: 0 auto;
  height:auto;
  padding:.8em 0;
`;

export const List = styled.ul`
  display:flex;
`;

export const Item = styled.li`
  margin: 0 .5em;
  &:first-child {
    margin-left:0;
  }
`;

export const Route = styled(Link)`
  font-weight: bold;
  color: #454547;
  font-size: 0.9rem;

`;
