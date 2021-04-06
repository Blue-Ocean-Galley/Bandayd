import React from 'react';
import BandBio from './BandBio.jsx'
import BandNav from './BandNav.jsx'
import BandPageHeader from './BandPageHeader.jsx'
import UpcomingShows from './UpcomingShows.jsx'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';


class BandPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Filter By City',
      locations: ['New York', 'Las Vegas', 'New Mexico', 'San Fran']
    };
  }

  componentDidMount() {
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <Router>
        <div class='band-page-container'>
          <BandNav />
          <BandPageHeader />

        </div>

      </Router>

    )
  }
}

export default BandPage;


