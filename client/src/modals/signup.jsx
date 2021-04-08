import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import axios from 'axios';

import { Button, Tile, Form } from '../styles/globalStyles';

Modal.setAppElement(document.getElementById('app'));
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.6)';

export default function Signup() {
  const [showModal, toggleModal] = useState(false);

  function submitSignup(e) {
    e.preventDefault();
    const { email, password, bandname } = e.target.form;
    const checkboxes = e.target.form.querySelectorAll('input[type=checkbox]:checked');
    const genres = [];
    for (let i = 0; i < checkboxes.length; i += 1) {
      genres.push(checkboxes[i].value);
    }
    const data = {
      name: bandname.value,
      email: email.value,
      password: password.value,
      description: '',
      genre: genres[0],
    };
    axios.post('/login', data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(genres);
    email.value = '';
    password.value = '';
    bandname.value = '';
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#333',
      border: 'none',
    },
  };

  return (
    <>
      <Button onClick={() => toggleModal(!showModal)}>Signup</Button>
      <Modal
        isOpen={showModal}
        style={customStyles}
        onRequestClose={() => toggleModal(!showModal)}
        shouldCloseOnOverlayClick
      >
        <SignupTile>
          <FeatureForm>
            {/* <label htmlFor="username">
              Username:
              <br />
              <input type="text" name="username" id="username" required />
            </label>
            <br /> */}
            <div style={{ 'grid-column': '1/-1' }}>
              <label htmlFor="email">
                Email:
                <br />
                <input type="email" name="email" id="email" required />
              </label>
              <br />

              <label htmlFor="password">
                Password:
                <br />
                <input type="password" name="password" id="password" required />
              </label>
              <br />

              <label htmlFor="bandname">
                Band Name:
                <br />
                <input type="bandname" name="bandname" id="bandname" required />
              </label>
              <br />
            </div>

            <p style={{ 'grid-column': '1/-1' }}>Genre(s) of metal:</p>

            <div>
              <label htmlFor="blackmetal">
                <input type="checkbox" id="blackmetal" name="blackmetal" value={1} />
                Black Metal
              </label>
            </div>
            <div>
              <label htmlFor="christian">
                <input type="checkbox" id="christian" name="christian" value={2} />
                Christian
              </label>
            </div>
            <div>
              <label htmlFor="crustpunk">
                <input type="checkbox" id="crustpunk" name="crustpunk" value={3} />
                Crust Punk
              </label>
            </div>
            <div>
              <label htmlFor="deathmetal">
                <input type="checkbox" id="deathmetal" name="deathmetal" value={4} />
                Death Metal
              </label>
            </div>
            <div>
              <label htmlFor="djent">
                <input type="checkbox" id="djent" name="djent" value={5} />
                Djent
              </label>
            </div>
            <div>
              <label htmlFor="fantasy">
                <input type="checkbox" id="fantasy" name="fantasy" value={6} />
                Fantasy
              </label>
            </div>
            <div>
              <label htmlFor="gothic">
                <input type="checkbox" id="gothic" name="gothic" value={7} />
                Gothic
              </label>
            </div>
            <div>
              <label htmlFor="grindcore">
                <input type="checkbox" id="grindcore" name="grindcore" value={8} />
                Grindcore
              </label>
            </div>
            <div>
              <label htmlFor="hairmetal">
                <input type="checkbox" id="hairmetal" name="hairmetal" value={9} />
                Hair Metal
              </label>
            </div>
            <div>
              <label htmlFor="industrial">
                <input type="checkbox" id="industrial" name="industrial" value={10} />
                Industrial
              </label>
            </div>
            <div>
              <label htmlFor="metalcore">
                <input type="checkbox" id="metalcore" name="metalcore" value={11} />
                Metalcore
              </label>
            </div>
            <div>
              <label htmlFor="thrash">
                <input type="checkbox" id="thrash" name="thrash" value={12} />
                Thrash
              </label>
            </div>
            <div>
              <label htmlFor="vikingmetal">
                <input type="checkbox" id="vikingmetal" name="vikingmetal" value={13} />
                Viking Metal
              </label>
            </div>
            <SignupButton type="submit" onClick={submitSignup}>Submit</SignupButton>
          </FeatureForm>
        </SignupTile>
      </Modal>
    </>
  );
}

const SignupTile = styled(Tile)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;

const SignupButton = styled(Button)`
  grid-column: 1 / -1;
`;

const FeatureForm = styled(Form)`
  width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
