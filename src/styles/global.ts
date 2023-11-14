import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue']};
  }

  body {
    background: ${(props) => props.theme["background"]};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`