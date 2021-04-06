import React from 'react';
import styled from 'styled-components';
import ImageTile from './ImageTile';
import { Tile } from '../styles/globalStyles';

// for color prop, must use hex format with alpha channel
// 4D is 30% opacity
// Resources: https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
const ImageTiles = () => (
  <ImageBlock>
    <ImageTile imgUrl="http://placeimg.com/640/480/any" overlay='#FF00004D'/>
    <ImageTile imgUrl="http://placeimg.com/640/480/animals" overlay='#FFA5004D' />
    <ImageTile imgUrl="http://placeimg.com/640/480/nature" overlay='#FFFF004D' />
    <ImageTile imgUrl="http://placeimg.com/640/480/people" overlay='#0080004D'/>
    <ImageTile imgUrl="http://placeimg.com/640/480/tech" overlay='#0000FF4D' />
    <ImageTile imgUrl="http://placeimg.com/640/480/architecture" overlay='#4B00824D' />
    <ImageTile imgUrl="http://placeimg.com/640/480/nightlife" overlay='#EE82EE4D' />
    <ImageTile imgUrl="http://placeimg.com/640/480/abstract" overlay='
#8000404D' />
  </ImageBlock>
);

const ImageBlock = styled(Tile)`
  flex-flow: row wrap;
  justify-content: space-around;
  background: ${({ theme }) => theme.primary_100};
`;

export default ImageTiles;
