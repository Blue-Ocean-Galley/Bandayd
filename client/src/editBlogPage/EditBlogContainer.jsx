import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Card,
  Tile,
  ListTile,
  Button,
} from '../styles/globalStyles';

export default function EditBlogPageContainer() {
  // pass in band name/id
  // get all blog posts for that band
  // for each, create a  card
  // list: date/title of blog post
  // on card click, edit mode:
  // populate edit tile with that post's text
  // display save/cancel buttons

  // if save button is clicked, put request with updated text
  // if cancel is clicked, end edit mode, clear tile, hide buttons
  const [isEditing, setIsEditing] = useState(false);

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
          <Button onClick={() => setIsEditing(true)}> Create New </Button>
        </Card>
      </PastBlogPosts>
      <Tile>
        <Card>
          Blog Post
          {isEditing
            ? (
              <div>
                <Button onClick={() => setIsEditing(false)}> Cancel </Button>
                <Button onClick={() => setIsEditing(false)}> Save </Button>
              </div>
            )
            : <p> Choose a post to edit </p> }
        </Card>
      </Tile>
    </>
  );
}

const PastBlogPosts = styled(ListTile)`

`;
