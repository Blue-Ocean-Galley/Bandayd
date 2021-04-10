import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Modal from 'react-modal';
import styled from 'styled-components';
import BandSongListItem from './BandPageSongListItem';
import cookies from '../../cookies.js'
import {
  Button,
  Tile,
  Input,
  Card,
  StickyHeaderContainer,
} from '../../styles/globalStyles';
import Tabs from '../../styles/tabs';

export default function MediaList() {
  const [showModal, toggleModal] = useState(false);
  const bandId = cookies.get('userId') || 1;

  const [songs, setSongs] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3010/api/songs/${bandId}`)
      .then((res) => {
        const songObj = {};
        res.data.forEach((song) => {
          songObj[song.id] = song;
        });
        setSongs(songObj);
      }).catch((err) => {
        const tempSongs = [
          {
            id: 1,
            song: 'LAX',
            artist: 'Vulfpeck',
            trackId: '4I0s9c8rjPVm4QoFtnW2lb',
          },
          {
            id: 2,
            song: 'Nightcall',
            artist: 'Kavinsky',
            trackId: '199fvGLqoH23blptlIIz86',
          },
          {
            id: 3,
            song: 'Kiss Off',
            artist: 'Violent Femmes',
            trackId: '2KCzAlkQRc4ZzexoSkQALv',
          },
          {
            id: 4,
            song: 'Chambre A Coucher',
            artist: 'the OBGMs',
            trackId: '3IvEWu21iCpRCY5FPa7mlB',
          },
          {
            id: 5,
            song: 'Daft Punk is Playing at My House',
            artist: 'LCD Soundsystem',
            trackId: '73mlvsfJM2qwlDUJxeaatI',
          },
        ];
        const songObj = {};
        tempSongs.forEach((song) => {
          songObj[song.id] = song;
        });
        setSongs(songObj);
      });
  }, []);

  const handleSave = (song) => {
    axios.post(`http://localhost:3010/api/songs/${bandId}`,
      {
        title: song.title,
        album: song.album,
        genre: song.genre,
        link: song.link,
        bandId,
      }).then((res) => {
        // Adds new song by id to song list
        setSongs((prevState) => ({ ...prevState, [res.data.id]: res.data }));
      });
  }
  const [currentTitle, setTitle] = useState('');
  const [currentAlbum, setAlbum] = useState('');
  const [currentGenre, setGenre] = useState('');
  const [currentLink, setLink] = useState('');

  const customModalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#333',
      border: 'none',
    },
  };

  const SongList = Object.values(songs).map((song) => (
    <BandSongListItem
      trackId={song.trackId}
      key={song.trackId}
    />
  ));

  const VideoContent = <Card key="video-content"> Videos Coming Soon</Card>;

  return (
    <Container>
      <Header>
        <h3>Featured Songs</h3>
        <Button onClick={() => { toggleModal(true); }}> Add Song </Button>
      </Header>
      <Tabs
        headers={['songs', 'videos']}
        contents={[SongList, [VideoContent]]}
      />
      <Modal
        isOpen={showModal}
        style={customModalStyle}
        onRequestClose={() => toggleModal(!showModal)}
        shouldCloseOnOverlayClick
      >
        <h3>Add a Song</h3>
        <Form onSubmit={handleSave({ title: currentTitle, album: currentAlbum, genre: currentAlbum, link: currentLink })}>
          <Label for="song-title-Input">Title</Label>
          <Input onChange={(e) => setTitle(e.target.value)} id="song-title-Input" type="text" defaultValue={currentTitle} />

          <Label for="song-album-Input">Album</Label>
          <Input onChange={(e) => setAlbum(e.target.value)}id="song-album-Input" type="text" defaultValue={currentAlbum} />

          <Label for="song-Genre-Input">Genre</Label>
          <Input onChange={(e) => setGenre(e.target.value)} id="song-genre-Input" type="text" defaultValue={currentGenre} />

          <Label for="song-link">Spotify Link</Label>
          <Input onChange={(e) => setLink(e.target.value)} id="song-link" type="url" defaultValue={currentLink} />
          <Button type="submit" onClick={() => { toggleModal(false); }}> Add Song </Button>
        </Form>
      </Modal>
    </Container>
  );
}
const Container = styled(Tile)`
  flex-direction: column;
  height: 50rem;
  overflow: auto;
  padding-bottom: 0.5rem;
  margin-top: 1rem;
  background: ${({ theme }) => theme.background};
  ::-webkit-scrollbar {
  display: none;
}
`;
const Label = styled.label`
  color: ${({ theme }) => theme.darkText};
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Header = styled(StickyHeaderContainer)`
  padding-bottom: 0.5rem;
`;
// MediaList.propTypes = {
//   songs: PropTypes.instanceOf(Array),
// };
// MediaList.defaultProps = {
//   songs: [],
// };
