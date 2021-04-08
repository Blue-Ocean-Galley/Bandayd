import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Tile } from '../../styles/globalStyles';

export default function BandPageHeader({ profileUrl }) {
  return (
    <HeaderContainer>
      <ProfilePic src={profileUrl} alt="band-profile-pic" />
      <h1> Band Name </h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled(Tile)`
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.primary_700};
`;
const ProfilePic = styled.img`
  width: 20rem;
  height: 20rem;
  margin: 2rem;
`;
BandPageHeader.propTypes = {
  profileUrl: PropTypes.string,
};
BandPageHeader.defaultProps = {
  profileUrl: 'http://placeimg.com/640/480/fashion',
};
