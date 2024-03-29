import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ImageTile = ({ ImgUrl, overlay }) => (
  <>
    <ImgWrapper to="/band" ImgUrl={ImgUrl} overlay={overlay} />
  </>
);

const ImgWrapper = styled(Link)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  flex-grow: 1;
  margin: 1px;
  max-width: 48rem;
  height: 30rem;
  background: linear-gradient(to right, ${(props) => props.overlay}, ${(props) => props.overlay}), url("${(props) => props.ImgUrl}") no-repeat top center;

  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.2), 0 12px 20px rgba(0,0,0,0.23);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    transform: scale(1.05) rotate(-2deg);
`;

ImageTile.propTypes = {
  ImgUrl: PropTypes.string.isRequired,
  overlay: PropTypes.string.isRequired,
};

export default ImageTile;
