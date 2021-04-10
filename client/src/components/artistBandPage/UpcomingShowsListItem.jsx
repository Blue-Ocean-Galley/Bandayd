import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';


function  UpcomingShowsListItem  ({date, location}) {
  return (
    <Router>
      <div>
        <span id="show-list-date">{date}</span>
        <span id="show-list-location">{location}</span>
      </div>
    </Router>
  )

}

export default UpcomingShowsListItem;