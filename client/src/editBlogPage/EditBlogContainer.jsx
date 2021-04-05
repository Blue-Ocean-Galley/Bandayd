import React from 'react';
import styled from 'styled-components';
import {
  Card,
  Tile,
  ListTile,
  Button,
} from '../styles/globalStyles';

export default function EditBlogPageContainer() {
  return (
    <>
      <Tile>
        <Card>
          Nav
        </Card>
      </Tile>
      <PastBlogPosts>
        <Card>
          Past Blog Posts
          <Button> Create New </Button>
        </Card>
      </PastBlogPosts>
      <Tile>
        <Card>
          Blog Post
        </Card>
      </Tile>
    </>
  );
}

const PastBlogPosts = styled(ListTile)`

`;
