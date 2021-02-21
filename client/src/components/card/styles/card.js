import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-width: 240px;
  position: relative;
  margin-top: 0.31em;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const Body = styled.div`
  background: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: .8em;
`;

export const Title = styled(Link)`
  display: block;
  font-size: 0.9rem;
  color: #454547;
  font-weight: bold;
  text-decoration:none;
  &:hover { 
    text-decoration:underline;
  }
`;

export const Brand = styled(Link)`
  margin-top: 0.6em;
  display: block;
  font-size: 0.8rem;
  color: #bfbfbf;
  text-decoration:none;
  &:hover { 
    text-decoration:underline;
  }
`;
export const Price = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  color: #40CBA2;
`;
export const Info = styled.div``;

export const Image = styled.div`
  width: 100%;
  height: 220px;
  background: #bbb;
`;

//export const Image = styled.image`
//width:100%;
//height:auto;
//object-fit:cover;
//object-position:center;
//min-height: 220px;
//border-radius: 5px;
//`;
