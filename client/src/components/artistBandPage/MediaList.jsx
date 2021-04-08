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
  const [showModal, toggleModal] = useState(false);

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

  const SongList = songs.map((song) => (
    <BandSongListItem
      trackId={song.trackId}
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
      <Button onClick={() => { toggleModal(true); }}> + </Button>
      <Modal
        isOpen={showModal}
        style={customModalStyle}
        onRequestClose={() => toggleModal(!showModal)}
        shouldCloseOnOverlayClick
      >
        <h3>Add a Song</h3>
        <Form onSubmit={() => {}}>
          <Label for="song-title-Input">Title</Label>
          <Input id="song-title-Input" type="text" placeholder="" />
          <Label for="song-album-Input">Album</Label>
          <Input id="song-album-Input" type="text" />
          <Label for="song-Genre-Input">Genre</Label>
          <Input id="song-genre-Input" type="text" />
          <Label for="song-link">Spotify Link</Label>
          <Input id="song-link" type="url" />
        </Form>
        <Button onClick={() => { toggleModal(false); }}> Add Song </Button>
      </Modal>
    </Container>
  );
}
const Container = styled(Tile)`
  flex-direction: column;
  height: 100%;
`;
const Label = styled.label`
  color: ${({ theme }) => theme.darkText};
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
MediaList.propTypes = {
  songs: PropTypes.instanceOf(Array),
};
MediaList.defaultProps = {
  songs: [],
};
