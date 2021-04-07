import React from 'react';
import BandBlogPostItem from './BandBlogPostItem.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';


class BandBlogPostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  addBlog() {

  }

  render() {
    return (
      <Router>
        <div id="blog-list-container">
          <h3>Past Blog Posts</h3>
          <button type="button" onClick={this.addBlog.bind(this)}>Create New</button>
          {this.props.blogPosts.map((blogPost) => {
            return (
              <BandBlogPostItem
                title={blogPost.title}
                body={blogPost.body}
                key={blogPost.id}
              />
            )
          })}
        </div>
      </Router>
    )
  }
}

export default BandBlogPostList;

