import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    scroll-behavior:smooth;
  }
  a{
    color: #000;
  }

  body{
    font-family: 'Fira Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
 
`;
