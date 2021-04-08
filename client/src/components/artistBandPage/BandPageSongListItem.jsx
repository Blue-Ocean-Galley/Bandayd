import React from 'react';
import PropTypes from 'prop-types';

export default function BandSongListItem({ trackId }) {
  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    <iframe src={`https://open.spotify.com/embed/track/${trackId}`} width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" />
  );
}
BandSongListItem.propTypes = {
  trackId: PropTypes.string,
};
BandSongListItem.defaultProps = {
  trackId: '6iwOCZFBlw3Xjj0fuO3sI6',
};
