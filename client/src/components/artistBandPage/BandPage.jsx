import React from 'react';
import BandBio from './BandBio.jsx'
import BandNav from './BandNav.jsx'
import BandPageHeader from './BandPageHeader.jsx'
import UpcomingShowsList from './UpcomingShowsList.jsx'
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
      ],
      tempBio: 'Hello and welcome to our band page. We are a group of dedicated musicians who pride themselves on putting out some ripping tunes. Enjoy :)',
      tempShows: [
        { id: 1, location: 'Denver', Date: '08-01-2021' },
        { id: 2, location: 'New York City', Date: '12-24-2021' },
        { id: 3, location: 'Dallas', Date: '04-23-2021' },
        { id: 4, location: 'Las Vegas', Date: '02-27-2021' },
        { id: 5, location: 'Paris', Date: '08-14-2021' }
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
          <BandBio bandBio={this.state.tempBio}/>
          <UpcomingShowsList shows={this.state.tempShows}/>
          <BandBlogPostList />
        </div>

      </Router>

    )
  }
}

export default BandPage;


