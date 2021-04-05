import styled, { createGlobalStyle } from 'styled-components';

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
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.13);
`;

const CircleButtonPreset = styled(ButtonPreset)`
  border-radius: 24px;
`;

const TilePreset = styled.div`
  background-color: ${({ theme }) => theme.primary_600};
  display: flex;
  align-items: center;
  & > * {
    width: 90%;
  }
`;

const ListTilePreset = styled(TilePreset)`
  display: flex;
  flex-direction: column;
`;

const InputPreset = styled.input`
  padding: 1rem;
  margin: 1rem 0;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.primary_400};
  box-shadow:0 0 1rem 0.5rem rgba(0,0,0,0.06);

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary_400};
  }
`;

const TextAreaPreset = styled.textarea`
  resize: vertical;
  width: 90%;
  padding: 1.5rem;
  border-radius: 1.5rem;
  border: 0;
  box-shadow: 0.4rem 0.4rem 1rem rgba(0,0,0,0.06);
`;

const CardPreset = styled.div`
  background-color: ${({ theme }) => theme.primary_400};
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default GlobalStyle;
export const Button = ButtonPreset;
export const CircleButton = CircleButtonPreset;
export const Tile = TilePreset;
export const ListTile = ListTilePreset;
export const Input = InputPreset;
export const TextArea = TextAreaPreset;
export const Card = CardPreset;
