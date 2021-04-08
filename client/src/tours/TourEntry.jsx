import React from 'react';

export default function TourEntry({show}) {
  return (
    <div>
      <h3>{show.name}</h3>
      <h5>{show.showDate}</h5>
      <p>{show.displayName}</p>
    </div>
  );
}
