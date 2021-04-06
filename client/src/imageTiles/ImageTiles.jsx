import React from 'react';
import styled from 'styled-components';
import ImageTile from './ImageTile';
import { Tile } from '../styles/globalStyles';

const ImageTiles = () => (
  <ImageBlock>
    <ImageTile imgUrl="http://placeimg.com/640/480/any" />
    <ImageTile imgUrl="http://placeimg.com/640/480/animals" />
    <ImageTile imgUrl="http://placeimg.com/640/480/nature" />
    <ImageTile imgUrl="http://placeimg.com/640/480/people" />
    <ImageTile imgUrl="http://placeimg.com/640/480/tech" />
    <ImageTile imgUrl="http://placeimg.com/640/480/architecture" />
    <ImageTile imgUrl="http://placeimg.com/640/480/any" />
    <ImageTile imgUrl="http://placeimg.com/640/480/any" />
  </ImageBlock>
);

const ImageBlock = styled(Tile)`
  flex-flow: row wrap;
  justify-content: space-around;
  background: ${({ theme }) => theme.primary_100};
`;

export default ImageTiles;
