import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';


class BandBio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }

  handleEditBio() {

  }

  render() {
    return (
      <Router>
        <div>
          <h3>About the Band</h3>
          <button type="button" id="editBio" onClick={this.handleEditBio.bind(this)}>+</button>
          <p>{this.props.bandBio}</p>
        </div>
      </Router>
    )
  }
}

export default BandBio;

