import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import cookies from '../../cookies';
import EditBio from '../../modals/editBio';
import {
  VerticalCard,
  Card,
} from '../../styles/globalStyles';

export default function BandBio({ bandBio }) {
  const bandId = cookies.get('userId') || 1;
  const [bio, setBio] = useState('');
  useEffect(() => {
    setBio(bandBio);
  }, [bandBio]);
  const editBio = (post) => {
    setBio(post.post);
    axios.put(`http://localhost:3010/api/bands/bio/${bandId}`,
      {
        bio: post.post,
        bandId,
      });
  };

  return (
    <VerticalCard>
      <h3>About the Band</h3>
      <EditBio
        text={bandBio}
        id={bandId}
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
