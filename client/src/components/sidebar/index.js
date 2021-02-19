import React from "react";
import {
  Container,
  List,
  ListItem,
  ListItemLink,
  ExitButton,
  Form
} from "./styles/sidebar";
import ExitIcon from "./assets/exit.svg";

export default function Sidebar({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Sidebar.List = function ({ children, ...props }) {
  return <List {...props}>{children}</List>;
};

Sidebar.ListItem = function ({ children, ...props }) {
  return <ListItem {...props}>{children}</ListItem>;
};

Sidebar.Link = function ({ children, ...props }) {
  return <ListItemLink {...props}>{children}</ListItemLink>;
};

Sidebar.Exit = function ({ children, ...props }) {
  return (
    <ExitButton {...props}>
      <img src={ExitIcon} />
    </ExitButton>
  );
};

export function SearchForm({ children, ...props }) {
  return (
    <Form>
      <input type="text" placeholder="Search for Product" />
    </Form>
  );
}
