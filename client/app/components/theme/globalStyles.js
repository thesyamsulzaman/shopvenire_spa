import { createGlobalStyle } from "styled-components";
import InterLight from "./fonts/Inter-Light.ttf";
import InterRegular from "./fonts/Inter-Regular.ttf";
import InterBold from "./fonts/Inter-ExtraBold.ttf";

// Import font style
// Import Typography


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter Light',
    src: url(${InterLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  * { 
    box-sizing: border-box;
    font-family: 'Inter Light', arial;
    margin:0;
    padding:0;
  }
  li {
    list-style:none;
  }


`;

export default GlobalStyle;
