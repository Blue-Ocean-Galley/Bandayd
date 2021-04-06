import React from 'react';
import BandSongListItem from './BandSongListItem'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';


class BandSongList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }

  handleChange(event) {

  }

  render() {
    return (
      <Router>
        <BandSongListItem />
      </Router>
    )
  }
}

export default BandSongList;

