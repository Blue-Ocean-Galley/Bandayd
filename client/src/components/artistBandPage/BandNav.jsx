import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';


class BandNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSearch: '',
      selectorVal: ''
    };
  }

  componentDidMount() {

  }

  handleFanFavsClick(event) {
    event.preventDefault();
  }

  handleDiscoverClick(event) {
    event.preventDefault();
  }

  handleSearchForm(event) {
    event.preventDefault();
  }

  handleSearchChange(event) {
    this.setState({ pageSearch: event.target.value })
  }

  handleSelectorChange(event) {
    this.setState({ selectorVal: event.target.value })
  }

  render() {
    return (
      <Router>
        <div>
          <img src="imgsrc" id="band-page-logo" alt="band-page-logo"></img>
          <form onSubmit={this.handleSearchForm.bind(this)}>
            <input type="text" value={this.state.pageSearch} onChange={this.handleSearchChange.bind(this)}></input>
          </form>
          <button id="band-page-discover" type="button" onClick={this.handleDiscoverClick.bind(this)}>discover</button>
          <button id="band-page-fan-favs" type="button" onClick={this.handleFanFavsClick.bind(this)}>fan favs</button>
          <select value={this.state.selectorVal} onChange={this.handleSelectorChange.bind(this)}>
            <option selected value="Account">Account</option>
            <option value="Blog">Blog</option>
            <option value="Stats">Stats</option>
            <option value="Settings">Settings</option>
          </select>
        </div>
      </Router>
    )
  }
}

export default BandNav;