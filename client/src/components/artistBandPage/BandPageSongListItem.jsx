import React from 'react';

export default function BandSongListItem({ song, artist }) {
  return (
    <div>
      <button type="button">Play</button>
      <span>{this.props.song}</span>
      <span>{this.props.artist}</span>
    </div>
  );
}
