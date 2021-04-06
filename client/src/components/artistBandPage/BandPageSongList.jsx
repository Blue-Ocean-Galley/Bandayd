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

  handleClickSongs(event) {

  }

  handleClickVideos(event) {

  }

  render() {
    return (
      <Router>
        <div id="outer-song-list-container">
          <div>
            <span>Songs</span>
            <span>Videos</span>
          </div>
          <div id="song-list-container">
            <h3>Featured Songs</h3>
            <button type="button" onClick={this.addSong.bind(this)}>+</button>
            {this.props.songs.map((song) => {
              <BandSongListItem
                artist={song.artist}
                song={song.song}
                key={song.id}
              />
            })}
          </div>
        </div>
      </Router>
    )
  }
}

export default BandSongList;

