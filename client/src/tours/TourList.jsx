import React, { useState } from 'react';
import Modal from 'react-modal';

import { Button, Tile, Form } from '../styles/globalStyles';

Modal.setAppElement(document.getElementById('app'));
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.6)';

export default function TourList() {
  const [showTourButton, setTourButton] = useState(false);
  const [showTourModal, setTourModal] = useState(false);
  const [showName, setShowName] = useState('');
  const [address, setAddress] = useState('');

  const updateName = (e) => {
    e.preventDefault();
    setShowName(e.target.value);
  };

  const updateAddress = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  };

  return (
    <div>
      <h3>Upcoming Shows</h3>
      <Button onClick={() => setTourModal(!showTourModal)}>Add New Show</Button>
      <Modal
        isOpen={showTourModal}
        // style={customStyles}
        onRequestClose={() => setTourModal(!showTourModal)}
        shouldCloseOnOverlayClick
      >
        <h4>Add A New Show</h4>
        <form>
          <div>
            Name:
          </div>
          <input type="text" value={showName} onChange={updateName} />
          <div>
            Address:
          </div>
          <input type="text" value={address} onChange={updateAddress} />
          <div>
            <Button onClick={() => setTourModal(!showTourModal)}>Submit</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
