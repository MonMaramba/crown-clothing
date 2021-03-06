import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
  font-family: "Open Sans Condensed";
  padding: 20px 40px;

  @media screen and (max-width: 800px ){ 
      padding: 10px;
}
}

a {
  text-decoration: none; /* react-router-dom converts Link component to a tag. By default a tags are styled with underline */
  color: black;
}

* {
  box-sizing: border-box;
}

`;
