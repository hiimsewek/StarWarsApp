import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --headerHeight: 70px;
    --iconSize: 2.4rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    overflow-x: hidden;
  }

  div#root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${({ theme: { colors } }) => colors.gray800};
    color: ${({ theme: { colors } }) => colors.white};
    font-family: ${({ theme: { font } }) => font};
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme: { colors } }) => colors.white};
    transition: opacity 0.3s linear;
    
     &:hover {
      opacity: 0.7
     }
  }

  .scrollBlock {
    overflow-y: hidden;
  }
`;
