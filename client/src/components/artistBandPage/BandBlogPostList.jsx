import React, {useState} from 'react';
import Modal from 'react-modal'
import BandBlogPostItem from './BandBlogPostItem.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

function addSong () {

}

function BandBlogPostList ({blogPosts}) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div id="blog-list-container">
      <h3>Past Blog Posts</h3>
      <button onClick={() => { setModalIsOpen(true) }}>+</button>
      <Modal isOpen={modalIsOpen}>
        <h3>Add a Blog Post</h3>
        <form onSubmit={addSong()}>
          <label htmlFor="song-name-input">Song Name</label>
          <input id="song-name-input" type="text" placeholder=""></input>
          <label htmlFor="blog-title-input">Title</label>
          <input id="blog-body-input" stype="text"></input>
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
BlogPostList.propTypes = {
  posts: PropTypes.instanceOf(Array),
};
BlogPostList.defaultProps = {
  posts: [],
};
