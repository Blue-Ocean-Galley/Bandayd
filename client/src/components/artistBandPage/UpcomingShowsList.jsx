import React, { useState } from 'react';
import UpcomingShowsListItem from './UpcomingShowsListItem.jsx'
import Modal from 'react-modal'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

function addShow() {

}
function UpcomingShowsList ({shows}){
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div id="show-list-container">
      <h3>Upcoming Shows</h3>
      <button onClick={() => { setModalIsOpen(true) }}>+</button>
      <Modal isOpen={modalIsOpen}>
        <h3>Add a Show</h3>
        <form onSubmit={addShow()}>
          <label for="show-name-input">Show Name</label>
          <input id="show-name-input" type="text" placeholder=""></input>

          <label for="show-location-input">Show Location</label>
          <input id="show-location-input" stype="text"></input>

          <label for="show-description-input">Show Description</label>
          <input id="show-description-input" stype="text"></input>

          <label for="show-date-input">Show Date</label>
          <input id="show-date-input" stype="text"></input>
        </form>
        <button onClick={() => setModalIsOpen(false)}>Add Song</button>
      </Modal>
      {shows.map((show) => {
        return (
          <UpcomingShowsListItem
            date={show.date}
            location={show.location}
            key={show.id}
          />
        )
      })}
    </div>
  )
}

export default UpcomingShowsList;