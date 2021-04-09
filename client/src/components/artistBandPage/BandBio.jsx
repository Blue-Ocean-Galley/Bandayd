import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import EditBio from '../../modals/editBio';
import {
  VerticalCard,
  Card,
} from '../../styles/globalStyles';

export default function BandBio({ bandBio }) {
  const [bio, setBio] = useState(bandBio);
  useEffect(() => {
    setBio(bandBio);
  }, [bandBio]);
  const editBio = (post) => {
    setBio(post.post);
  };

  return (
    <VerticalCard>
      <h3>About the Band</h3>
      <EditBio
        text={bandBio}
        id={0}
        handleSave={editBio}
      />
      <Card>{bio}</Card>
    </VerticalCard>
  );
}
BandBio.propTypes = {
  bandBio: PropTypes.string,
};
BandBio.defaultProps = {
  bandBio: 'Add a bio!',
};
