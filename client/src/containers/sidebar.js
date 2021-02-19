import React from "react";
import Sidebar, { SearchForm } from "../components/sidebar";

const sidebarCategories = [
  {
    id: 1,
    title: "Hoodies",
    path: "/hoodies"
  },
  {
    id: 2,
    title: "Bracelets",
    path: "/bracelets"
  },
  {
    id: 3,
    title: "Outerwears",
    path: "/outerwears"
  },
  {
    id: 4,
    title: "Keychains",
    path: "/keychains"
  },
  {
    id: 5,
    title: "Hoodies",
    path: "/hoodies"
  },
  {
    id: 6,
    title: "Necklaces",
    path: "/necklaces"
  }
];

export default function SidebarContainer({ children, ...props }) {
  return (
    <Sidebar {...props}>
      <Sidebar.Exit onClick={props.toggleSidebar}>X</Sidebar.Exit>
      <SearchForm />
      <Sidebar.List>
        {sidebarCategories.map(category => {
          return (
            <Sidebar.ListItem key={category.id}>
              <Sidebar.Link to={category.path}>{category.title}</Sidebar.Link>
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
