import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html, body, #root {
        width: 100%;
        height: 100%;
    }
  
  body {
    background-color: white;
    position: relative;
    margin: 0;
    padding: 0;
  }

  * {
    font-family: Arial, Helvetica, sans-serif;
  }
`;