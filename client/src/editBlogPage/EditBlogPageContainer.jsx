import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Card,
  Tile,
  ListTile,
  Button,
  TextArea,
  ListItem,
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
  const [text, setText] = useState('');
  const [currentPost, setCurrentPost] = useState({});
  useEffect(() => {
    setText(currentPost.text);
  }, [isEditing]);

  return (
    <Container>
      <PastBlogPosts>
        <h3> Past Blog Posts </h3>
        <Button onClick={() => setIsEditing(true)}> Create New </Button>
        <ListItem onClick={() => {
          setIsEditing(true);
          setCurrentPost({ text: 'list item 1' });
        }}
        >
          <p>
            Title and snippet
          </p>
        </ListItem>
        <ListItem onClick={() => {
          setIsEditing(true);
          setCurrentPost({ text: 'list item 2' });
        }}
        >
          <p>
            Title and snippet
          </p>
        </ListItem>
        <ListItem onClick={() => {
          setIsEditing(true);
          setCurrentPost({ text: 'list item 3' });
        }}
        >
          <p>
            Title and snippet
          </p>
        </ListItem>
      </PastBlogPosts>
      <EditArea>
        {isEditing
          ? (
            <Card>
              <TextArea onChange={(e) => setText(e.target.value)} value={text} />
              <div>
                <Button onClick={() => {
                  setIsEditing(false);
                  console.log(text);
                }}
                >
                  Save
                </Button>
              </div>
            </Card>
          )
          : (
            <Card>
              <p> Choose a post to edit </p>
            </Card>
          )}
      </EditArea>
    </Container>
  );
}

const PastBlogPosts = styled(ListTile)`
  width: 32%;
  > ${ListItem} {
    cursor: pointer;
  }
`;

const EditArea = styled(Tile)`
  flex: 2;
`;

const Container = styled(Tile)`
  flex-direction: row;
  justify-content: flex-start;
`;
