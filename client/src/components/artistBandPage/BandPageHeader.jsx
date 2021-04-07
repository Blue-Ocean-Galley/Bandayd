import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';


class BandPageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: []
    };
  }

  handleUpload(e){
    // const file = e.target.files[0];
    // const newImages = [...this.state.image];
    // newImages.push(file);
    // this.setState({
    //   image: newImages
    // });
  }

  handleShareButton(event) {

  }

  componentDidMount() {
  }

  render() {
    return (
      <Router>
        <div id="band-header-container">
          <div id="proflie-pic-uploader">
            {/* <input type="file" value="+" onChange={this.handleUpload.bind(this)} /> */}
            <img src={!!this.state.image[0] ? this.state.image[0] : ''} alt="band-profile-pic" alt="Band Proflie Picture"></img>
            <button type="button" onClick={this.handleShareButton.bind(this)}>Share</button>
          </div>
        </div>
      </Router>
    )
  }
}

export default BandPageHeader;