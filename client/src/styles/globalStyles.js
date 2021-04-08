import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  * {
    border-radius: 5px;
    box-sizing:border-box;
  }
  html {
    font-size: 62.5%;
    height: 100%;
  }
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary_text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    font-size: 160%;
    height: 100%;

    &.div {
      height: 100%;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.primary_text};
`;

export const Button = styled.button`
  text-transform: uppercase;
  margin: 0;
  padding: 1rem;
  background-color: ${({ theme }) => theme.primary_400};
  border: none;
  color: ${({ theme }) => theme.primary_text};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.secondary_light};
    color: ${({ theme }) => theme.dark_text};
  }
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.13);
`;

export const CircleButton = styled(Button)`
  border-radius: 24px;
`;

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.primary_600};
  display: flex;
  align-items: center;
  & > * {
    width: 90%;
  }
`;

export const ListTile = styled(Tile)`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 1rem;
  margin: 1rem 0;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.primary_400};
  box-shadow:0 0 1rem 0.5rem rgba(0,0,0,0.06);

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary_400};
  }
  &:invalid {
    border: 1px solid ${({ theme }) => theme.secondary};
  }
`;

export const TextArea = styled.textarea`
  resize: vertical;
  width: 90%;
  padding: 1.5rem;
  border-radius: 1.5rem;
  border: 0;
  box-shadow: 0.4rem 0.4rem 1rem rgba(0,0,0,0.06);
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.primary_400};
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const VerticalCard = styled(Card)`
  flex-direction: column;
`;

export const Form = styled.form`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListItem = styled.div`
  background: ${({ theme }) => theme.primary_200};
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TabRow = styled.div`
  overflow: hidden;
  background: ${({ theme }) => theme.primary_400};
  font-family: Open Sans;
  height: 3em;
`;
export const Tab = styled.button`
border: none;
  outline: none;
  cursor: pointer;
  width: 40%;
  position: relative;

  margin-right: 0.1em;
  font-size: 1em;
  border: ${(props) => (props.active ? '1px solid #ccc' : '')};
  border-bottom: ${(props) => (props.active ? 'none' : '')};
  background-color: ${(props) => (props.active ? '#d4d6d7' : '#515b60')};
  height: ${(props) => (props.active ? '3em' : '2.6em; top:.4em')};
  transition: background-color 0.5s ease-in-out;

  :hover {
    background-color: '#d4d6d7';
  }
`;

export const TabContent = styled.div`
  ${(props) => (props.active ? '' : 'display:none')}
`;

export const StickyHeaderContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.primary};
`;

export default GlobalStyle;
