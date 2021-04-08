import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styled from 'styled-components';
import BandSongListItem from './BandPageSongListItem';
import {
  Button,
  Tile,
  Input,
  Card,
} from '../../styles/globalStyles';
import Tabs from '../../styles/tabs';

export default function MediaList({ songs }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const SongList = songs.map((song) => (
    <BandSongListItem
      artist={song.artist}
      song={song.song}
      key={song.id}
    />
  ));

  const VideoContent = <Card key="video-content"> Videos Coming Soon</Card>;

  return (
    <Container>
      <h3>Featured Songs</h3>
      <Tabs
        headers={['songs', 'videos']}
        contents={[SongList, [VideoContent]]}
      />
      <Button onClick={() => { setModalIsOpen(true); }}> + </Button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick
      >
        <h3>Add a Song</h3>
        <form onSubmit={() => {}}>
          <Input id="song-title-Input" type="text" placeholder="" />

          <Input id="song-album-Input" type="text" />

          <Input id="song-genre-Input" type="text" />
        </form>
        <Button onClick={() => { setModalIsOpen(false); }}> Add Song </Button>
      </Modal>
    </Container>
  );
}
const Container = styled(Tile)`
  flex-direction: column;
  height: 100%;
`;
MediaList.propTypes = {
  songs: PropTypes.instanceOf(Array),
};
MediaList.defaultProps = {
  songs: [],
};
