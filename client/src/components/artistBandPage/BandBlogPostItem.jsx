import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';


class BandBlogPostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }

  handleChange(event) {

  }

  render() {
    return (
      <Router>
        <div>
          <span id="blog-list-title">{this.props.title}</span>
          <span id="blog-list-body">{this.props.body}</span>
        </div>
      </Router>
    )
  }
}

export default BandBlogPostItem;

