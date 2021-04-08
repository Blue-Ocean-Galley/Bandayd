<<<<<<< HEAD
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
=======
import React from 'react';
import styled from 'styled-components';
import { Tile } from '../../styles/globalStyles';
import UpcomingShowsListItem from './UpcomingShowsListItem.jsx'

class UpcomingShowsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }

  addShow() {
  }

  render() {
    return (
      <Tile>
        <h3>Upcoming Shows</h3>
        <button type="button" onClick={this.addShow.bind(this)}>Add a Show</button>
        {this.props.shows.map((show) => {
          return (
            <UpcomingShowsListItem
              date={show.date}
              location={show.location}
              key={show.id}
            />
          )

        })}
      </Tile>
    )
  }
>>>>>>> ac72b66b53c84f3f2cb09896c8f32261fc0443fa
}

export default UpcomingShowsList;