import React from 'react';
import styled from 'styled-components';
import ImageTile from './ImageTile';
import { Tile } from '../styles/globalStyles';

const ImageTiles = () => (
  <ImageBlock>
    <ImageTile />
    <ImageTile />
    <ImageTile />
    <ImageTile />
    <ImageTile />
    <ImageTile />
    <ImageTile />
    <ImageTile />
  </ImageBlock>
);

const ImageBlock = styled(Tile)`
  flex-flow: row wrap;
  justify-content: space-around;
  background: ${({ theme }) => theme.primary_100};
`;

export default ImageTiles;