import React from 'react';
import UpcomingShowsListItem from './UpcomingShowsListItem.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';


class UpcomingShowsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }

  addShow() {

  }

  render() {
    return (
      <Router>
        <div id="show-list-container">
          <h3>Upcoming Shows</h3>
          <button type="button" onClick={this.addShow.bind(this)}>Add a Show</button>
          {this.props.shows.map((show) => {
            <UpcomingShowsListItem
              date={show.date}
              location={show.location}
              key={show.id}
            />
          })}
        </div>
      </Router>
    )
  }
}

export default UpcomingShowsList;