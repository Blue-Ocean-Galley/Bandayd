import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';


class UpcomingShowsListItem extends React.Component {
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
          <span id="show-list-date">{this.props.date}</span>
          <span id="show-list-location">{this.props.location}</span>
        </div>
      </Router>
    )
  }
}

export default UpcomingShowsListItem;