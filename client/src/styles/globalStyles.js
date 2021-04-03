import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    border-radius: 5px;
  }
  html {
    font-size: 62.5%;
  }
  body {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary_text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    font-size: 160%;
  }
`;

const ButtonPreset = styled.button`
  text-transform: uppercase;
  margin: 0;
  padding: 1rem;
  background-color: ${({ theme }) => theme.primary_400};
  border: none;
  color: ${({ theme }) => theme.primary_text};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primary_600};
    color: ${({ theme }) => theme.secondaryText};
  }
`;

export default GlobalStyle;
export const Button = ButtonPreset;
