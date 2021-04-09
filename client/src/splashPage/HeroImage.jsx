import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Card, Tile } from '../styles/globalStyles'; // Button removed for Login modal
import Login from '../modals/login';

export default function Hero() { // { toPath } not currently in use.
  return (
    <HeroImage>
      <ImageOverlay>
        <h1>BandAyd</h1>
        <p>
          Nisi maiores nemo et quae repellat quibusdam quia.
          Deserunt dolor id amet soluta maiores tenetur accusantium fugiat.
          Totam voluptatem ea quo. Et qui ullam blanditiis nam occaecati.
          Eius atque quae quibusdam optio et alias.
        </p>
        <Login />
        {/* <Link to={toPath}>
          <Button> Sign Up </Button>
        </Link> */}
      </ImageOverlay>
    </HeroImage>
  );
}
// Hero.propTypes = {
//   toPath: PropTypes.string.isRequired,
// };

const HeroImage = styled(Tile)`
  min-height: 50rem;
  height: 50%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('http://placeimg.com/640/480');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  justify-content: center;
`;

const ImageOverlay = styled(Card)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  width: 40%;
  text-align: center;
  & > h1 {
    font-size: 6rem;
    text-transform: uppercase;
  }
`;
