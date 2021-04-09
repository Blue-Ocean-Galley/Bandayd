import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'react-modal';
import UpcomingShowsListItem from './UpcomingShowsListItem';
import {
  VerticalCard,
  Button,
  CircleButton,
  Input,
} from '../../styles/globalStyles';

export default function UpcomingShowsList() {
  const bandId = 1;
  const [shows, setShows] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3010/api/shows/${bandId}`).then((res) => {
      const showsObj = {};
      res.data.forEach((show) => {
        showsObj[show.id] = show;
      });
      setShows(showsObj);
    });
  }, []);

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

  const handleSave = (show) => {
    axios.post(`http://localhost:3010/api/shows/${bandId}`,
      {
        name: show.name,
        location: show.location,
        description: show.description,
        date: show.date,
        bandId,
      }).then((res) => {
        // Adds new show by id to show list
        setShows((prevState) => ({ ...prevState, [res.data.id]: res.data }));
      });
  }

  const [currentName, setName] = useState('');
  const [currentLocation, setLocation] = useState('');
  const [currentDescription, setDescription] = useState('');
  const [currentDate, setDate] = useState('');

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
        <Form onSubmit={handleSave({ name: currentName, location: currentLocation, description: currentDescription, date: currentDate })}>
          <Label htmlfor="show-name-Input">Show Name</Label>
          <Input onChange={(e) => setName(e.target.value)} id="show-name-Input" type="text" defaultValue={currentName} />

          <Label htmlfor="show-location-Input">Show Location</Label>
          <Input onChange={(e) => setLocation(e.target.value)} id="show-location-Input" type="text" defaultValue={currentLocation}/>

          <Label htmlfor="show-description-Input">Show Description</Label>
          <Input onChange={(e) => setDescription(e.target.value)} id="show-description-Input" type="text" defaultValue={currentDescription} />

          <Label htmlfor="show-date-Input">Show Date</Label>
          <Input onChange={(e) => setDate(e.target.value)} id="show-date-Input" type="text" defaultValue={currentDate} />

          <Button type="submit" onClick={() => toggleModal(false)}>Add Song</Button>
        </Form>
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
// UpcomingShowsList.propTypes = {
//   shows: PropTypes.instanceOf(Array),
// };
// UpcomingShowsList.defaultProps = {
//   shows: [],
// };
const Label = styled.label`
  color: ${({ theme }) => theme.darkText};
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
