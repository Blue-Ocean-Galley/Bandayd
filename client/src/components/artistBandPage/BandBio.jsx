import React, { useState } from 'react';
import Modal from 'react-modal'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

function addBio () {

}
function BandBio ({bandBio}){
  const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
      <div>
        <h3>About the Band</h3>
        <p>{bandBio}</p>
        <img id="edit-bio-pencil" src='havent found a good one yet' alt="edit bio" onClick={() => { setModalIsOpen(true) }}></img>
        <Modal isOpen={modalIsOpen}>
          <h3>Edit Bio</h3>
          <form onSubmit={addBio()}>
            <input id="bio-input" type="text" placeholder=""></input>
          </form>
          <button onClick={() => setModalIsOpen(false)}>Save Bio</button>
        </Modal>
      </div>
    )

}

export default BandBio;


