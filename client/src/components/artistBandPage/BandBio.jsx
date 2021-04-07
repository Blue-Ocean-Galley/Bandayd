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

  editBio() {

  }

  createNewBio() {

  }

  render() {
    return (
      <Router>
        <div>
          <h3>About the Band</h3>
          <button type="button" id="editBio" onClick={this.createNewBio.bind(this)}>Create New</button>
          <p>{this.props.bandBio}</p>
          <img id="edit-blog-pencil" src='havent found a good one yet' alt="edit blog" onClick={this.editBio.bind(this)}></img>
        </div>
      </Router>
    )
  }
}

export default BandBio;

