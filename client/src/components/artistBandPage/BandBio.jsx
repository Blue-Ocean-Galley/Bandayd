import React, { useState } from 'react';
import EditBio from '../../modals/editBio';
import {
  VerticalCard,
  Card,
} from '../../styles/globalStyles';

export default function BandBio({ bandBio }) {
  const [bio, setBio] = useState('Add a bio!');

  const editBio = (post) => {
    setBio(post.post);
  };

  return (
    <VerticalCard>
      <h3>About the Band</h3>
      <EditBio
        text={bio}
        id={0}
        handleSave={editBio}
      />
      <Card>{bio}</Card>
    </VerticalCard>
  );
}
