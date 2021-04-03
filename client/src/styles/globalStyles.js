import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary_text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  }
`;

export default GlobalStyle;
