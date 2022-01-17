import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
      background-color: teal;
      color: ivory;
  }
  

`;

export default GlobalStyle;
