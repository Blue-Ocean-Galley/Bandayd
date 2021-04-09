<<<<<<< HEAD
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import { Tile } from '../../styles/globalStyles';

function addPic() {

}

function BandPageHeader ({picture}) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <Router>
      <HeaderContainer>
        <div id="proflie-pic-uploader">
          <button onClick={() => { setModalIsOpen(true) }}>+</button>
          <Modal isOpen={modalIsOpen}>
            <h3>Add a Profile Picture</h3>
            <form onSubmit={addPic()}>
              <label hmtlFor="song-title-input">Song Title</label>
              <input id="song-title-input" type="text" placeholder=""></input>
            </form>
            <button onClick={() => setModalIsOpen(false)}>Add Picture</button>
          </Modal>
          <img src={picture} alt="band-profile-pic" ></img>
        </div>
      </HeaderContainer>
    </Router>
  )
=======
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
>>>>>>> 7d30e3e353826adf7ac9b3cc73e734619f8754e8
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
