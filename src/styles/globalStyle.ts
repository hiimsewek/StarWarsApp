import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    min-height: 100vh;
    background-color: ${({ theme: { colors } }) => colors.gray800};
    color: ${({ theme: { colors } }) => colors.white};
    font-family: ${({ theme: { font } }) => font}
  }
`;
