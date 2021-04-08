import React, {useState} from 'react';
import Modal from 'react-modal'
import BandBlogPostItem from './BandBlogPostItem.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

function addBlog () {

}

function BandBlogPostList ({blogPosts}) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div id="blog-list-container">
      <h3>Past Blog Posts</h3>
      <button onClick={() => { setModalIsOpen(true) }}>+</button>
      <Modal isOpen={modalIsOpen}>
        <h3>Add a Blog Post</h3>
        <form onSubmit={addBlog()}>
          <label htmlFor="blog-name-input">Blog Name</label>
          <input id="blog-name-input" type="text" placeholder=""></input>

          <label htmlFor="blog-description-input">Description</label>
          <input id="blog-description-input" type="text" placeholder=""></input>

          <label htmlFor="blog-post-input">Post</label>
          <textarea id="blog-post-input"></textarea>
        </form>
        <button onClick={() => setModalIsOpen(false)}>Add Blog Post</button>
      </Modal>
      {blogPosts.map((blogPost) => {
        return (
          <BandBlogPostItem
            title={blogPost.title}
            body={blogPost.body}
            key={blogPost.id}
          />
        )
      })}
    </div>
  )

}
// BlogPostList.propTypes = {
//   posts: PropTypes.instanceOf(Array),
// };
// BlogPostList.defaultProps = {
//   posts: [],
// };
