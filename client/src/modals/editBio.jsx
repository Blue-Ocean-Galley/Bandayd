import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import EditArea from '../editBlogPage/EditArea';
import { Button } from '../styles/globalStyles';

Modal.setAppElement(document.getElementById('app'));
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.6)';

export default function EditBio({ text, handleSave }) {
  const [showModal, toggleModal] = useState(false);

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

  const onSave = (post) => {
    handleSave(post);
    toggleModal(!showModal);
  };

  return (
    <>
      <Button onClick={() => toggleModal(!showModal)}> Edit Bio ✏ </Button>
      <Modal
        isOpen={showModal}
        style={customStyles}
        onRequestClose={() => toggleModal(!showModal)}
        shouldCloseOnOverlayClick
      >
        <EditModal
          text={text}
          title="Bio"
          id={0}
          handleSave={onSave}
          handleCancel={() => {
            toggleModal(!showModal);
          }}
        />
      </Modal>
    </>
  );
}
EditBio.propTypes = {
  text: PropTypes.string.isRequired,
  handleSave: PropTypes.func.isRequired,
};

const EditModal = styled(EditArea)`
  width: 30rem;
  margin: 0;
`;
