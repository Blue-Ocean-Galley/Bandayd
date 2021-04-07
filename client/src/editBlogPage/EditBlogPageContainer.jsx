import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  VerticalCard,
  Tile,
} from '../styles/globalStyles';
import PastBlogPosts from './PastBlogPosts';
import EditArea from './EditArea';
import { postArray } from './FakeBlogPosts';

export default function EditBlogPageContainer() {
  // pass in band name/id
  // get all blog posts for that band
  // for each, create a  Verticalcard
  // list: date/title of blog post
  // on Verticalcard click, edit mode:
  // populate edit tile with that post's text
  // display save/cancel buttons

  // if cancel is clicked, end edit mode, clear tile, hide buttons
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
  }, [isEditing]);
  const [currentPost, setCurrentPost] = useState({});
  useEffect(() => {
  }, [isEditing]);

  const postObj = {};
  postArray().forEach((post) => {
    postObj[post.title] = post;
  });

  const handleSave = (text, title) => {
    // put request with updated
    setIsEditing(false);
    postObj[currentPost.title] = { text, title };
  };

  const handleBlogPostClick = ({ postTitle, postText }) => {
    setIsEditing(true);
    setCurrentPost({
      title: postTitle,
      text: postText,
    });
  };
  return (
    <Container>
      <PastBlogPosts
        onPostClick={handleBlogPostClick}
        posts={Object.values(postObj)}
      />
      {isEditing
        ? (
          <EditArea
            text={currentPost.text}
            title={currentPost.title}
            handleSave={handleSave}
            handleCancel={() => setIsEditing(false)}
          />
        )
        : (
          <VerticalCard>
            <p> Choose a post to edit </p>
          </VerticalCard>
        )}
    </Container>
  );
}

const Container = styled(Tile)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
