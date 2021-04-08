import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BandBlogPostItem from './BandBlogPostItem';
import {
  ListTile,
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
      <h3>Past Blog Posts</h3>
      <button type="button">
        <Link to="/editblog">
          Create New
        </Link>
      </button>
      { Object.values(posts).map((blogPost) => (
        <BandBlogPostItem
          post={blogPost.post}
          name={blogPost.name}
          id={blogPost.id}
          key={blogPost.id}
        />
      ))}
    </StyledList>
  );
}
// BlogPostList.propTypes = {
//   posts: PropTypes.instanceOf(Array),
// };
// BlogPostList.defaultProps = {
//   posts: [],
// };
const StyledList = styled(ListTile)`
  width: 50%;
`;
