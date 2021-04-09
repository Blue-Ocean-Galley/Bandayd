import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'react-modal';
import UpcomingShowsListItem from './UpcomingShowsListItem';
import {
  VerticalCard,
  Button,
  CircleButton,
  Input,
} from '../../styles/globalStyles';

export default function UpcomingShowsList({ shows }) {
  const [showModal, toggleModal] = useState(false);

  const customModalStyle = {
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

  const addShow = () => {
  };

  return (
    <VerticalCard>
      <h3>Upcoming Shows</h3>
      <CircleButton onClick={() => { toggleModal(true); }}>+</CircleButton>
      <Modal
        isOpen={showModal}
        style={customModalStyle}
        onRequestClose={() => toggleModal(!showModal)}
        shouldCloseOnOverlayClick
      >
        <h3>Add a Show</h3>
        <Form onSubmit={addShow()}>
          <Label htmlFor="show-name-Input">Show Name</Label>
          <Input id="show-name-Input" type="text" placeholder="" />

          <Label htmlFor="show-location-Input">Show Location</Label>
          <Input id="show-location-Input" stype="text" />

          <Label htmlFor="show-description-Input">Show Description</Label>
          <Input id="show-description-Input" stype="text" />

          <Label htmlFor="show-date-Input">Show Date</Label>
          <Input id="show-date-Input" stype="text" />
        </Form>
        <Button onClick={() => toggleModal(false)}>Add Song</Button>
      </Modal>
      {shows.map((show) => (
        <UpcomingShowsListItem
          date={show.date}
          location={show.location}
          key={show.id}
        />
      ))}
    </VerticalCard>
  );
}
UpcomingShowsList.propTypes = {
  shows: PropTypes.instanceOf(Array),
};
UpcomingShowsList.defaultProps = {
  shows: [],
};
const Label = styled.label`
  color: ${({ theme }) => theme.darkText};
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
