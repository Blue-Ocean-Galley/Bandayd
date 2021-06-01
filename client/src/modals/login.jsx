import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { Button, Tile, Form } from '../styles/globalStyles';
import cookies from '../cookies';
import Signup from './signup';

Modal.setAppElement(document.getElementById('app'));
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.6)';

export default function Login() {
  const [showModal, toggleModal] = useState(false);
  const history = useHistory();

  function submitLogin(e) {
    e.preventDefault();
    const { email, password } = e.target.form;
    const data = {
      email: email.value,
      password: password.value,
    };
    axios.post('http://localhost:3010/api/login', data)
      .then((response) => {
        console.log(response);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 1);
        cookies.set({
          userId: response.data.id,
          expires: expires.toGMTString(),
        });
        history.push('/band');
      })
      .catch((error) => {
        console.error(error);
      });
    // email.value = '';
    // password.value = '';
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
      <NavButton onClick={() => toggleModal(!showModal)}> Login </NavButton>
      <Modal
        isOpen={showModal}
        style={customStyles}
        onRequestClose={() => toggleModal(!showModal)}
        shouldCloseOnOverlayClick
        ariaHideApp={false}
      >
        <LoginTile>
          <FeatureForm>
            <label htmlFor="email">
              Username:
              <br />
              <input type="email" name="email" id="email" required />
            </label>
            <br />

            <label htmlFor="password">
              Password:
              <br />
              <input type="password" name="password" id="password" required />
            </label>

            <Button type="submit" onClick={submitLogin}>Login</Button>
          </FeatureForm>
          <div>
            <p>Don&apos;t have an account yet?</p>
            <Signup />
          </div>
        </LoginTile>
      </Modal>
    </>
  );
}
Login.propTypes = {
  cb: PropTypes.func,
};
Login.defaultProps = {
  cb: () => {},
};

const LoginTile = styled(Tile)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;

const FeatureForm = styled(Form)`

`;
const NavButton = styled(Button)`
  padding: 1rem;
    margin: 0.5rem;
    color: ${({ theme }) => theme.primary_text};
    background ${({ theme }) => theme.background};

    &:hover {
      color: ${({ theme }) => theme.background};
      background: ${({ theme }) => theme.secondary_light};
    }
`;
