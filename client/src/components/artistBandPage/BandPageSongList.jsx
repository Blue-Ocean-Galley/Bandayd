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
        <h3>Featured Songs</h3>
        <div id="song-list-container">
          <button onClick={() => {setModalIsOpen(true)}}>+</button>
          <Modal isOpen={modalIsOpen}>
            <h3>Add a Song</h3>
            <form onSubmit={addSong()}>
              <label hmtlFor="song-title-input">Song Title</label>
              <input id="song-title-input" type="text" placeholder=""></input>

              <label hmtlFor="song-album-input">Album</label>
              <input id="song-album-input" type="text"></input>

              <label hmtlFor="song-genre-input">Genre</label>
              <input id="song-genre-input" type="text"></input>
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

