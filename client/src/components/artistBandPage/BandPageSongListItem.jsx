import React from 'react';

export default function BandSongListItem({ song, artist }) {
  return (
    <div>
      <button type="button">Play</button>
      <span>{song}</span>
      <span>{artist}</span>
    </div>
  );
}
