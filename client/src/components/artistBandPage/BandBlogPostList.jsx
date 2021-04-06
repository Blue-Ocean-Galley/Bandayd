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

  componentDidMount() {
  }

  handleChange(event) {

  }

  render() {
    return (
      <Router>
        <BandBlogPostItem />
      </Router>
    )
  }
}

export default BandBlogPostList;

