import React from 'react';
import styled from 'styled-components';
import { Tile } from '../../styles/globalStyles';
import UpcomingShowsListItem from './UpcomingShowsListItem.jsx'

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
      <Tile>
        <h3>Upcoming Shows</h3>
        <button type="button" onClick={this.addShow.bind(this)}>Add a Show</button>
        {this.props.shows.map((show) => {
          return (
            <UpcomingShowsListItem
              date={show.date}
              location={show.location}
              key={show.id}
            />
          )

        })}
      </Tile>
    )
  }
}

export default UpcomingShowsList;