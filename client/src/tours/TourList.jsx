import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import TourEntry from './TourEntry.jsx';

import { Button, Tile, Card, Form } from '../styles/globalStyles';

Modal.setAppElement(document.getElementById('app'));
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.6)';

export default function TourList() {
  const [showTourButton, setTourButton] = useState(false);
  const [showTourModal, setTourModal] = useState(false);
  const [showName, setShowName] = useState('');
  const [address, setAddress] = useState('');
  const [showInfo, setShowInfo] = useState({});
  const [shows, setShows] = useState([
    {
      id: 1,
      name: 'Our cool show!!',
      showDate: '2020-07-19 09:08:35',
      displayName: 'Boston House of blues',
      city: 'Boston',
      state: 'Massachusetts',
      country: 'USA',
      bandId: 2,
      latitude: 34.5632,
      longitude: -14.357788,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'Our lame show!!',
      showDate: '2020-06-19 09:28:35',
      displayName: 'The Whiskey a go-go',
      city: 'Los Angeles',
      state: 'California',
      country: 'USA',
      bandId: 2,
      latitude: 35.4234,
      longitude: -16.3423,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

  ]);

  const updateName = (e) => {
    e.preventDefault();
    setShowName(e.target.value);
  };

  const updateAddress = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  };

  const searchAddress = (e) => {
    e.preventDefault();
    axios.get('https://nominatim.openstreetmap.org', {
      params: {
        q: address,
        format: 'json',
        limit: 1,
        addressdetails: 1,
      },
    })
      .then((res) => {
        const loc = res.data[0];
        setAddress(loc.display_name);
        setShowInfo({
          name: { showName },
          showDate: '2020-07-19 09:08:35',
          displayName: loc.display_name,
          city: loc.address.city ? loc.address.city : loc.address.town,
          state: loc.address.state,
          country: loc.address.country,
          bandId: 2,
          latitude: loc.lat,
          longitude: loc.long,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      })
      .catch((error) => console.log(error));
  };

  const renderMarker = () => {
    if (showInfo.latitude && showInfo.longitude) {
      console.log('marker should be there')
      return (
        <Marker position={[showInfo.latitude, showInfo.longitude]}>
          <Popup>
            {showName}
          </Popup>
        </Marker>
      );
    }
  };

  const renderShows = () => shows.map((show) => <TourEntry key={show.id} show={show} />);

  return (
    <div>
      <span>
        <h3>Upcoming Shows</h3>
        <Button onClick={() => setTourModal(!showTourModal)}>Add New Show</Button>
      </span>
      {renderShows()}

      {/* MODAL */}
      <Modal
        isOpen={showTourModal}
        onRequestClose={() => setTourModal(!showTourModal)}
        shouldCloseOnOverlayClick
      >
        <h4>Add A New Show</h4>
        <Form>
          <div>
            Name:
          </div>
          <input type="text" value={showName} onChange={updateName} />
          <div>
            Address:
          </div>
          <input type="text" value={address} onChange={updateAddress} />
          <div>
            <Button onClick={searchAddress}>Search</Button>
            <Button>Confirm</Button>
          </div>
        </Form>
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '300px', width: '300px' }}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {renderMarker()}

        </MapContainer>
      </Modal>
    </div>
  );
}
