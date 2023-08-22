import {createGlobalStyle} from "styled-components";
import {theme} from "./theme";

export const GlobalStyles = createGlobalStyle`
  *,
  ::after,
  ::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family:"Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font}
  }
  
  a{
    text-decoration: none;
    color: inherit;
  }
  
  ul{
    list-style: none;
  }
  
  section{
    padding: 100px 0 140px; 
  }
  
  section:nth-child(even){
    background-color: ${theme.colors.primaryBg};
  }
  section:nth-child(odd){
    background-color: ${theme.colors.secondaryBg};
  }
  
`