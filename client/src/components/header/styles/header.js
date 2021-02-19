import styled from "styled-components";
import { Link } from "react-router-dom";

export const Backround = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1);
  z-index: 1;
  background:#fff;
`;

export const Navbar = styled.nav`
  max-width: 1180px;
  width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3em 0;
  position: relative;
`;


export const Logo = styled(Link)`
  & img {
    width: 140px;
  }
`;

export const Cart = styled(Link)`
  & img {
    width: 30px;
    
  }
`;

export const Hamburger = styled.a`
  & img {
    width: 25px;
  }
`;

export const NavLink = styled(Link)``;
