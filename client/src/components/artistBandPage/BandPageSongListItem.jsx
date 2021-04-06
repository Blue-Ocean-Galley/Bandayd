import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';


class BandSongListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }

  handleChange(event) {

  }

  playSong() {

  }

  render() {
    return (
      <Router>
        <div>
          <button type="button" onClick={this.playSong.bind(this)}>Play</button>
          <span id="song-list-song-name">{this.props.song.name}</span>
          <span id="song-list-song-name">{this.props.song.artist}</span>
        </div>
      </Router>
    )
  }
}

export default BandSongListItem;

