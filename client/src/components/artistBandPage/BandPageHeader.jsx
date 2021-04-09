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
}

const HeaderContainer = styled(Tile)`
`;

export default BandPageHeader;