import { createGlobalStyle } from "styled-components";
import './global-styles.css';


const GlobalStyle = createGlobalStyle`
  * { 
    box-sizing: border-box;
    font-family: 'Inter Light';
    letter-spacing: 1px;
    margin:0;
    padding:0;
  }

  li {
    list-style:none;
  }


`;

export default GlobalStyle;
