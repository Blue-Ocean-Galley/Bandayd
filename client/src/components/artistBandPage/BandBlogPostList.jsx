import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import BandBlogPostItem from './BandBlogPostItem';
import {
  ListTile,
  StickyHeaderContainer,
  Button,
  StyledLink,
} from '../../styles/globalStyles';

export default function BlogPostList() {
  const bandId = 1; // change this to read current user
  const [posts, setPosts] = useState([]);
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

  return (
    <StyledList>
      <StickyHeaderContainer>
        <h3>Past Blog Posts</h3>
        <Button>
          <StyledLink to="/editblog">
            Create New
          </StyledLink>
        </Button>
      </StickyHeaderContainer>
      { Object.values(posts).map((blogPost) => (
        <StyledLink
          to="/editblog"
          key={blogPost.id}
        >
          <BandBlogPostItem
            post={blogPost.post}
            name={blogPost.name}
            id={blogPost.id}
            key={blogPost.id}
          />
        </StyledLink>
      ))}
    </StyledList>
  );
}
const StyledList = styled(ListTile)`
  width: 50%;
  height: 40rem;
  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
  display: none;
  }
`;
