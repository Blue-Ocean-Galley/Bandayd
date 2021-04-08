import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {
  VerticalCard,
  Tile,
} from '../styles/globalStyles';
import PastBlogPosts from './PastBlogPosts';
import EditArea from './EditArea';

export default function EditBlogPageContainer({ bandId = 1 }) {
  bandId = 1;
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
  }, [isEditing]);
  const [currentPost, setCurrentPost] = useState({});
  useEffect(() => {
  }, [isEditing]);
  const [posts, setPosts] = useState({});
  useEffect(() => {
    // get request goes here
    axios.get(`http://localhost:3010/api/blogs/${bandId}`).then((res) => {
      const postObj = {};
      res.data.forEach((post) => {
        postObj[post.id] = post;
      });
      setPosts(postObj);
    });
  }, []);

  const handleSave = (post) => {
    setIsEditing(false);
    if (!currentPost.id) {
      // post request returns new id
      // setPosts((prevState) => ({ ...prevState, [newId]: post }));
      axios.post(`http://localhost:3010/api/blogs/${bandId}`,
        {
          post: {
            name: post.title,
            post: post.text,
            bandId,
          },
        }).then((res) => {
        setPosts((prevState) => ({ ...prevState, [res.data.id]: res.data }));
      });
    } else if (post.text !== currentPost.post
      || post.title !== currentPost.name) {
      console.log('updating post', post);
      setPosts((prevState) => ({ ...prevState, [post.id]: post }));
      // updated post: put req
      axios.put(`http://localhost:3010/api/blogs/${post.id}`,
        {
          id: post.id,
          name: post.title,
          post: post.text,
          bandId,
        });
    }
  };
  const handleBlogPostClick = (post) => {
    setIsEditing(true);
    setCurrentPost(post);
  };

  return (
    <Container>
      <PastBlogPosts
        onPostClick={handleBlogPostClick}
        posts={Object.values(posts)}
      />
      {isEditing
        ? (
          <EditArea
            id={currentPost.id}
            text={currentPost.post}
            title={currentPost.name}
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
