import React, {useState} from 'react';
import BandSongListItem from './BandPageSongListItem.jsx'
import Modal from 'react-modal'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

function addSong() {

}
function BandSongList ({songs}) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
    return (

      <div id="outer-song-list-container">
        <div>
          <span>Songs</span>
          <span>Videos</span>
        </div>
        <div id="song-list-container">
          <h3>Featured Songs</h3>
          <button onClick={() => {setModalIsOpen(true)}}>+</button>
          <Modal isOpen={modalIsOpen}>
            <h3>Add a Song</h3>
            <form onSubmit={addSong()}>
              <label for="song-name-input">Song Name</label>
              <input id="song-name-input" type="text" placeholder=""></input>
              <label for="song-album-input">Album</label>
              <input id="song-album-input" stype="text"></input>
            </form>
            <button onClick={() => setModalIsOpen(false)}>Add Song</button>
          </Modal>
          {songs.map((song) => {
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
    )
}

export default BandSongList;

