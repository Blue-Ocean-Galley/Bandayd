import React from 'react';
import PropTypes from 'prop-types';

export default function BandSongListItem({ song, artist }) {
  return (
    <div>
      <button type="button">Play</button>
      <span>{song}</span>
      <span>{artist}</span>
    </div>
  );
}
BandSongListItem.propTypes = {
  song: PropTypes.string,
  artist: PropTypes.string,
};
BandSongListItem.defaultProps = {
  song: '',
  artist: '',
};
