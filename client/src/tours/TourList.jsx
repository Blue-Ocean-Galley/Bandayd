/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import TourEntry from './TourEntry';

import { Button, Tile, Card, Form } from '../styles/globalStyles';

Modal.setAppElement(document.getElementById('app'));
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.6)';

export default function TourList() {
  const [showTourButton, setTourButton] = useState(false);
  const [showTourModal, setTourModal] = useState(false);
  const [showName, setShowName] = useState('');
  const [address, setAddress] = useState('');
  const [showInfo, setShowInfo] = useState({});
  const [newDate, setNewDate] = useState();
  const [newTime, setNewTime] = useState();
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
      bandName: 'The Electric Kitty-Cats',
      latitude: 34.5632,
      longitude: 4.357788,
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
      bandName: 'The Electric Kitty-Cats',
      latitude: 35.4234,
      longitude: -1.3423,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

  ]);

  useEffect(() => {
    axios.get('http://localhost:3010/api/shows/')
      .then((res) => {
        // console.log(res)
        setShows(res.data);
        console.log(shows)
      })
      .catch((err) => console.log(err));
  }, []);

  const updateName = (e) => {
    e.preventDefault();
    setShowName(e.target.value);
  };

  const updateAddress = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  };

  const updateNewDate = (e) => {
    e.preventDefault();
    setNewDate(e.target.value);
  };

  const updateNewTime = (e) => {
    e.preventDefault();
    setNewTime(e.target.value);
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

  const renderShows = () => {
    if (shows) {
      return shows.map((show) => {
        if (show.name && show.bandName) {
          return <TourEntry key={show.id} show={show} />;
        }
      });
    }
  };
  const renderMarkers = () => {
    if (shows) {
      // console.log(shows)
      return shows.map((show) => {
        if (show.latitude && show.longitude) {
          return (
            <Marker position={[show.latitude, show.longitude]} key={show.id}>
              <Popup>
                {show.name}
                {show.showDate}
                {show.displayName}
              </Popup>
            </Marker>
          );
        }
      });
    }
  };

  return (
    <div>
      <span>
        <h3>Upcoming Shows</h3>
        <Button onClick={() => setTourModal(!showTourModal)}>Add New Show</Button>
      </span>
      {renderShows()}
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '300px', zIndex: 0}}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {renderMarkers()}
      </MapContainer>

      {/* MODAL */}
      <Modal
        isOpen={showTourModal}
        onRequestClose={() => setTourModal(!showTourModal)}
        shouldCloseOnOverlayClick
      >
        <Tile>
          <h4>Add A New Show</h4>
          <Form>
            <div>
              Show Name:
            </div>
            <input type="text" value={showName} onChange={updateName} />
            <div>
              Date:
            </div>
            <input type="time" name="show-time" value={newTime} onChange={updateNewTime} />
            <input
              type="date"
              name="show-date"
              value={newDate}
              onChange={updateNewDate}
              min="2021-01-01"
              max="2031-12-31"
            />
            <div>
              Address:
            </div>
            <input type="text" value={address} onChange={updateAddress} />
            <div>
              <Button onClick={searchAddress}>Search</Button>
              <Button>Confirm</Button>
            </div>
          </Form>
          <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '300px', width: '300px', zIndex: 100000000 }}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {renderMarker()}

          </MapContainer>
        </Tile>
      </Modal>
    </div>
  );
}
