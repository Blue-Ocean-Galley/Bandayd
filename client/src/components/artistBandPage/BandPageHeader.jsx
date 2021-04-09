import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Tile } from '../../styles/globalStyles';

export default function BandPageHeader({ profileUrl }) {
  return (
    <HeaderContainer>
<<<<<<< HEAD
      <div id="proflie-pic-uploader">
        <button onClick={() => { setModalIsOpen(true) }}>+</button>
        <Modal isOpen={modalIsOpen}>
          <h3>Add a Profile Picture</h3>
          <form onSubmit={() => {}}>
            <label hmtlFor="song-title-input">Song Title</label>
            <input id="song-title-input" type="text" placeholder=""></input>
          </form>
          <button onClick={() => setModalIsOpen(false)}>Add Picture</button>
        </Modal>
        <img src={picture} alt="band-profile-pic" ></img>
      </div>
    </HeaderContainer>
  )
=======
      <ProfilePic src={profileUrl} alt="band-profile-pic" />
      <h1> Band Name </h1>
    </HeaderContainer>
  );
>>>>>>> ec89f8334a8735d246916a7a79993bc3c015d7e0
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
BandPageHeader.propTypes = {
  profileUrl: PropTypes.string,
};
BandPageHeader.defaultProps = {
  profileUrl: 'http://placeimg.com/640/480/fashion',
};