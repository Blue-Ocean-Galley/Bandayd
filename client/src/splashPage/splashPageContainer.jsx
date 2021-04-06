import React from 'react';
import PropTypes from 'prop-types';
import Hero from './HeroImage';
import FeatureCards from './FeatureCards';

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
