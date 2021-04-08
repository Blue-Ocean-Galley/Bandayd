import React from 'react';
import { Card } from '../styles/globalStyles';

export default function TourEntry({show}) {
  return (
    <Card>
      <h3>{show.name}</h3>
      <h5>{show.showDate}</h5>
      <p>{show.displayName}</p>
    </Card>
  );
}
