import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import { Button, Tile, Form } from '../styles/globalStyles';

Modal.setAppElement(document.getElementById('app'));
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.6)';

export default function Login({ cb = () => {} }) {
  const [showModal, toggleModal] = useState(false);

  function submitLogin(e) {
    e.preventDefault();
    const { username, password } = e.target.form;
    // const data = {
    //   username: username.value,
    //   password: password.value,
    // };
    username.value = '';
    password.value = '';
    cb();
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
      <Button onClick={() => toggleModal(!showModal)}> Login </Button>
      <Modal
        isOpen={showModal}
        style={customStyles}
        onRequestClose={() => toggleModal(!showModal)}
        shouldCloseOnOverlayClick
      >
        <LoginTile>
          <FeatureForm>
            <label htmlFor="username">
              Username:
              <br />
              <input type="text" name="username" id="username" required />
            </label>
            <br />

            <label htmlFor="password">
              Password:
              <br />
              <input type="password" name="password" id="password" required />
            </label>

            <Button type="submit" onClick={submitLogin}>Login</Button>
          </FeatureForm>
          <p>Don&apos;t have an account yet?</p>
          <p>Sign-up here</p>
          <Button onClick={() => toggleModal(!showModal)}>Close Modal</Button>
        </LoginTile>
      </Modal>
    </>
  );
}
Login.propTypes = {
  cb: PropTypes.func.isRequired,
};

const LoginTile = styled(Tile)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;

const FeatureForm = styled(Form)`

`;
