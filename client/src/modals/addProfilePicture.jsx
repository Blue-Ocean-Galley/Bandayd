import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Modal from 'react-modal';
import cookies from '../cookies';

// import PropTypes from 'prop-types';
import {
  Button,
  CircleButton,
  Input,
  Form,
  Tile,
} from '../styles/globalStyles';

Modal.setAppElement(document.getElementById('app'));
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.6)';

export default function AddProfilePicture() {
  const bandId = cookies.get('userId') || 1;
  const [showModal, toggleModal] = useState(false);
  const [photoUrl, setPhotoUrl] = useState('');

  const customStyles = {
    content: {
      top: '50%',
      width: '40%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#333',
      border: 'none',
    },
  };
  // http://placeimg.com/640/480/cats
  const onSave = () => {
    toggleModal(!showModal);
    axios.put(`http://localhost:3010/api/bands/photo/${bandId}`,
      {
        photoUrl,
        bandId,
      });
  };

  return (
    <>
      <AddButton onClick={() => toggleModal(!showModal)}>+</AddButton>
      <Modal
        isOpen={showModal}
        style={customStyles}
        onRequestClose={() => toggleModal(!showModal)}
        shouldCloseOnOverlayClick
      >
        <Tile>
          <Form>
            <h3> Add Profile Picture </h3>
            <Input
              type="url"
              name="profile-picture"
              id="profile-picture"
              defaultValue="Photo URL"
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
            <Button type="submit" onClick={onSave}>Add Profile Picture</Button>
          </Form>
        </Tile>

      </Modal>
    </>
  );
}
const AddButton = styled(CircleButton)`
  width: 2rem;
  height: 2rem;
  padding: 0;
  top: 80%;
  left: 75%;
  position: absolute;
`;
