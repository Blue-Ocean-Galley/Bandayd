import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import {
  VerticalCard,
  Tile,
} from '../styles/globalStyles';
import PastBlogPosts from './PastBlogPosts';
import EditArea from './EditArea';
import cookies from '../cookies';

export default function EditBlogPageContainer() {
  const bandId = cookies.get('userId');
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
  }, [isEditing]);

  const [currentPost, setCurrentPost] = useState({});
  useEffect(() => {
  }, [isEditing]);

  const [posts, setPosts] = useState({});
  useEffect(() => {
    // Initial get request
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
      // if no id, it's as new post
      axios.post(`http://localhost:3010/api/blogs/${bandId}`,
        {
          name: post.name,
          post: post.post,
          bandId,
        }).then((res) => {
        // Adds new post by id to post list
        setPosts((prevState) => ({ ...prevState, [res.data.id]: res.data }));
      });
    } else if (post.post !== currentPost.post
      || post.name !== currentPost.name) { // only send put request if text or title was changed
      setPosts((prevState) => ({ ...prevState, [post.id]: post }));

      axios.put(`http://localhost:3010/api/blogs/post/${post.id}`,
        {
          id: post.id,
          name: post.name,
          post: post.post,
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

// EditBlogPageContainer.propTypes = {
//   bandId: PropTypes.number.isRequired,
// };
