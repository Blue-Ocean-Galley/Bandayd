import React from 'react';
import styled from 'styled-components';

const ImageTile = () => (
  <>
    <ImgPlaceholder />
  </>
);

const ImgPlaceholder = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  flex-grow: 1;
  margin: 1px;
  max-width: 48rem;
  height: 30rem;
  background: yellow;

  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.2), 0 12px 20px rgba(0,0,0,0.23);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    transform: scale(1.05) rotate(-2deg);
`;

export default ImageTile;
