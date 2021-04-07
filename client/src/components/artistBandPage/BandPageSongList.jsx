import React from 'react';
import BandSongListItem from './BandPageSongListItem.jsx'
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

  addSong() {

  }

  handleClickSongs(event) {

  }

  handleClickVideos(event) {

  }

  render() {
    console.log('Songs', this.props.songs)
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
              return (
                <BandSongListItem
                  artist={song.artist}
                  song={song.song}
                  key={song.id}
                />
              )

            })}
          </div>
        </div>
      </Router>
    )
  }
}

export default BandSongList;

