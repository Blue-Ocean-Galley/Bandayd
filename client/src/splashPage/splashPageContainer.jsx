import React from 'react';
import Hero from './HeroImage';
import FeatureCards from './FeatureCards';

export default function SplashPageContainer({ toPath }) {
  return (
    <>
      <Hero toPath={toPath} />
      <FeatureCards />
    </>
  );
}
