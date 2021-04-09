import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Tile } from '../../styles/globalStyles';
import AddProfilePicture from '../../modals/addProfilePicture';

export default function BandPageHeader({ profileUrl }) {
  return (
    <HeaderContainer>
      <ProfilePicContainer>
        <ProfilePic src={profileUrl} alt="band-profile-pic" />
        <AddProfilePicture />
      </ProfilePicContainer>
      <h1> Band Name </h1>
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
  profileUrl: PropTypes.string,
};
BandPageHeader.defaultProps = {
  profileUrl: 'http://placeimg.com/640/480/fashion',
};
