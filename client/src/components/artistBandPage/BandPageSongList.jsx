import React from 'react';
import styled from 'styled-components';
import { Tile } from '../../styles/globalStyles';
import BandSongListItem from './BandPageSongListItem';

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
      <Tile>
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
      </Tile>
    )
  }
}

export default BandSongList;

