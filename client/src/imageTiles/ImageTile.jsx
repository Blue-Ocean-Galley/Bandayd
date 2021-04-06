import React from 'react';
import styled from 'styled-components';
import { Tile } from '../styles/globalStyles';

const ImageTile = () => (
  <>
    <ImgPlaceholder></ImgPlaceholder>
  </>
);

const ImgPlaceholder = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  flex-grow: 1;
  margin: 1px;
  max-width: 48rem;
  height: 30rem;
  background: yellow;
`;

export default ImageTile;