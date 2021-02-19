import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
  margin-top: 1em;
  box-sizing:border-box;

  & > input[type="text"] {
    border:none;
    outline:0;
    border-bottom: 1px solid #111;
    padding: .5em 0;
    max-width: 100%;
    font-size: 1rem;
  }

`

export const Container = styled.div`
  width: 250px;
  padding: 1em;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  z-index: 2;
  transition: 220ms;
  background: #fff;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1);
`;

export const List = styled.ul`
  padding: 1em 0;

`;
export const ListItem = styled.li`
  display: block;
  margin-top: 1em;
`;
export const ListItemLink = styled(Link)`
  color: #111;
  font-weight: bold;

  &:hover {
    text-decoration: none;
  }
`;

export const ExitButton = styled.a`
  cursor:pointer;
  & > img {
  }
`;
