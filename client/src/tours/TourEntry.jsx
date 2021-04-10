import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../styles/globalStyles';

export default function TourEntry({ show }) {
  return (
    <Card>
      <h3>{show.name}</h3>
      <h4>{show.bandName}</h4>
      <h5>{show.showDate}</h5>
      <p>{show.displayName}</p>
    </Card>
  );
}

// Shape lets you specify the keys inside the object and the props for each
// Please correct this if it's not right
TourEntry.propTypes = {
  show: PropTypes.shape({
    name: PropTypes.string,
    bandName: PropTypes.string,
    showDate: PropTypes.string,
    displayName: PropTypes.string,
  }).isRequired,
};
