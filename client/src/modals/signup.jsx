import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

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
    // const data = {
    //   username: username.value,
    //   password: password.value,
    //   bandname: bandname.value,
    // };
    console.log(genres);
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

            <p>Genre(s) of metal:</p>

            <div>
              <label htmlFor="blackmetal">
                <input type="checkbox" id="blackmetal" name="blackmetal" value="blackmetal" />
                Black Metal
              </label>
            </div>
            <div>
              <label htmlFor="christian">
                <input type="checkbox" id="christian" name="christian" value="christian" />
                Christian
              </label>
            </div>
            <div>
              <label htmlFor="crustpunk">
                <input type="checkbox" id="crustpunk" name="crustpunk" value="crustpunk" />
                Crust Punk
              </label>
            </div>
            <div>
              <label htmlFor="deathmetal">
                <input type="checkbox" id="deathmetal" name="deathmetal" value="deathmetal" />
                Death Metal
              </label>
            </div>
            <div>
              <label htmlFor="djent">
                <input type="checkbox" id="djent" name="djent" value="djent" />
                Djent
              </label>
            </div>
            <div>
              <label htmlFor="fantasy">
                <input type="checkbox" id="fantasy" name="fantasy" value="fantasy" />
                Fantasy
              </label>
            </div>
            <div>
              <label htmlFor="gothic">
                <input type="checkbox" id="gothic" name="gothic" value="gothic" />
                Gothic
              </label>
            </div>
            <div>
              <label htmlFor="grindcore">
                <input type="checkbox" id="grindcore" name="grindcore" value="grindcore" />
                Grindcore
              </label>
            </div>
            <div>
              <label htmlFor="hairmetal">
                <input type="checkbox" id="hairmetal" name="hairmetal" value="hairmetal" />
                Hair Metal
              </label>
            </div>
            <div>
              <label htmlFor="industrial">
                <input type="checkbox" id="industrial" name="industrial" value="industrial" />
                Industrial
              </label>
            </div>
            <div>
              <label htmlFor="metalcore">
                <input type="checkbox" id="metalcore" name="metalcore" value="metalcore" />
                Metalcore
              </label>
            </div>
            <div>
              <label htmlFor="thrash">
                <input type="checkbox" id="thrash" name="thrash" value="thrash" />
                Thrash
              </label>
            </div>
            <div>
              <label htmlFor="vikingmetal">
                <input type="checkbox" id="vikingmetal" name="vikingmetal" value="vikingmetal" />
                Viking Metal
              </label>
            </div>
            <Button type="submit" onClick={submitSignup}>Submit</Button>
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

const FeatureForm = styled(Form)`

`;
