import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BandBlogPostItem from './BandBlogPostItem';

export default function BlogPostList({ posts }) {
  return (
    <div id="blog-list-container">
      <h3>Past Blog Posts</h3>
      <button type="button">
        <Link to="/editblog">
          Create New
        </Link>
      </button>
      { posts.map((blogPost) => (
        <BandBlogPostItem
          title={blogPost.title}
          body={blogPost.body}
          key={blogPost.id}
        />
      ))}
    </div>
  );
}
BlogPostList.propTypes = {
  posts: PropTypes.instanceOf(Array),
};
BlogPostList.defaultProps = {
  posts: [],
};
