import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import PropTypes from 'prop-types';

function UpcomingShowsListItem({ date, location }) {
  return (
    <Router>
      <div>
        <span id="show-list-date">{date}</span>
        <span id="show-list-location">{location}</span>
      </div>
    </Router>
  );
}

UpcomingShowsListItem.propTypes = {
  date: PropTypes.any.isRequired,
  location: PropTypes.any.isRequired,
};

export default UpcomingShowsListItem;
