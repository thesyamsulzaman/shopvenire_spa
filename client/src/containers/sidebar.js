import React from "react";
import Sidebar, { SearchForm } from "../components/sidebar";
import {categoryItems as sidebarCategories} from "../fixtures/categories"

export default function SidebarContainer({ children, ...props }) {
  return (
    <Sidebar {...props}>
      <Sidebar.Exit onClick={props.toggleSidebar}>X</Sidebar.Exit>
      <SearchForm />
      <Sidebar.List>
        {sidebarCategories.map(category => {
          return (
            <Sidebar.ListItem key={category.id}>
              <Sidebar.Link to={category.link}>{category.title}</Sidebar.Link>
            </Sidebar.ListItem>
          );
        })}
      </Sidebar.List>
      <hr />
      <Sidebar.List>
        <Sidebar.ListItem>
          <Sidebar.Link to="/login">Login</Sidebar.Link>
        </Sidebar.ListItem>
        <Sidebar.ListItem>
          <Sidebar.Link to="/register">Register</Sidebar.Link>
        </Sidebar.ListItem>
      </Sidebar.List>
    </Sidebar>
  );
}
