import React from 'react';
import BandBio from './BandBio.jsx'
import BandNav from './BandNav.jsx'
import BandPageHeader from './BandPageHeader.jsx'
import UpcomingShows from './UpcomingShows.jsx'
import BandPageSongList from './BandPageSongList.jsx'
import BandBlogPostList from './BandBlogPostList.jsx'

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
      tempSongs: [
        { id: 1, song: 'Truckin', artist: 'Greatful Dead' },
        { id: 2, song: 'Casey Jones', artist: 'Greatful Dead' },
        { id: 3, song: 'St. Stephen', artist: 'Greatful Dead' },
        { id: 4, song: 'Golden Road', artist: 'Greatful Dead' },
        { id: 5, song: 'Friend of the Devil', artist: 'Greatful Dead' }
      ]
    };

  }

  componentDidMount() {
    //make a request to get all band data, then pass down as props
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
          <BandPageSongList songs={this.state.tempSongs}/>
          <BandBio />
          <UpcomingShows />
          <BandBlogPostList />
        </div>

      </Router>

    )
  }
}

export default BandPage;


