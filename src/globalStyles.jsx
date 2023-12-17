import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  font-family: system-ui, sans-serif;
  font-weight: normal;
  overflow-x: hidden;
  color: #404040;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

h2 {
  font-size: 1.5rem;
  font-weight: 400;
}

h1 {
  font-size: 1.75rem;
}

h3 {
  font-size: 1.85rem;
}

p {
  font-size: 12px;
  font-weight: 330;
  letter-spacing: 0.2px;
  line-height: 24px;
}
`;

export default GlobalStyle;
