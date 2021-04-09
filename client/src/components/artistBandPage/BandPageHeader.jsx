import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Tile } from '../../styles/globalStyles';
import AddProfilePicture from '../../modals/addProfilePicture';

export default function BandPageHeader({ bandInfo }) {
  const profileUrl = bandInfo.profilePhotoUrl || 'https://i.pinimg.com/736x/0f/b6/52/0fb652b3acf855365c1ac09889c93c4c.jpg';
  return (
    <HeaderContainer>
      <ProfilePicContainer>
        <ProfilePic src={profileUrl} alt="band-profile-pic" />
        <AddProfilePicture />
      </ProfilePicContainer>
      <h1>{bandInfo.name}</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled(Tile)`
  justify-content: flex-start;
  align-items: center;
  background-color: '#601b06';
`;
const ProfilePic = styled.img`
  width: 20rem;
  height: 20rem;
  margin: 2rem;
`;
const ProfilePicContainer = styled.div`
  position: relative;
  width: fit-content;
`;
BandPageHeader.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bandInfo: PropTypes.object.isRequired,
};
