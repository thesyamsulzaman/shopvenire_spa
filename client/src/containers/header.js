import React, { useState } from "react";
import Header from "../components/header/index";
import Sidebar from "./sidebar";

//{sidebar && <Sidebar isOpen={sidebar} toggleSidebar={toggleSidebar} />}
export function HeaderContainer({ children, ...props }) {
  const [sidebar, sidebarToggle] = useState(false);

  const toggleSidebar = () => sidebarToggle(!sidebar);

  return (
    <>
      <Header {...props}>
        <Header.Navbar>
          <Header.Navbar.Hamburger onClick={toggleSidebar} />
          <Header.Navbar.Logo />
          <Header.Navbar.Cart />
        </Header.Navbar>
      </Header>
      <Sidebar isOpen={sidebar} toggleSidebar={toggleSidebar} />
    </>
  );
}
