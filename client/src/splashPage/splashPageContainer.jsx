import React from 'react';
import PropTypes from 'prop-types';
import Hero from './HeroImage';
import FeatureCards from './FeatureCards';
import ImageTiles from '../imageTiles/ImageTiles';

export default function SplashPageContainer({ toPath }) {
  return (
    <>
      <Hero toPath={toPath} />
      <FeatureCards />
      <ImageTiles />
    </>
  );
}

SplashPageContainer.propTypes = {
  toPath: PropTypes.string.isRequired,
};
