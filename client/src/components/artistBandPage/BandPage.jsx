import React from 'react';
import BandBio from './BandBio';
import BandPageHeader from './BandPageHeader';
import UpcomingShowsList from './UpcomingShowsList';
import BandPageSongList from './BandPageSongList';
import BandBlogPostList from './BandBlogPostList';
import styled from 'styled-components';

class BandPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempSongs: [
        { id: 1, song: 'Truckin', artist: 'Greatful Dead' },
        { id: 2, song: 'Casey Jones', artist: 'Greatful Dead' },
        { id: 3, song: 'St. Stephen', artist: 'Greatful Dead' },
        { id: 4, song: 'Golden Road', artist: 'Greatful Dead' },
        { id: 5, song: 'Friend of the Devil', artist: 'Greatful Dead' }
      ],
      tempBio: 'Hello and welcome to our band page. We are a group of dedicated musicians who pride themselves on putting out some ripping tunes. Enjoy :)',
      tempShows: [
        { id: 1, location: 'Denver', Date: '08-01-2021' },
        { id: 2, location: 'New York City', Date: '12-24-2021' },
        { id: 3, location: 'Dallas', Date: '04-23-2021' },
        { id: 4, location: 'Las Vegas', Date: '02-27-2021' },
        { id: 5, location: 'Paris', Date: '08-14-2021' }
      ],
      tempBlogPosts: [
        { id: 1, title: 'Blog1', body: 'kjfabdkabsdkabsdkjbaskdjbaskdjbaksjdbakjsdbakjsdbkajsd' },
        { id: 2, title: 'Blog2', body: 'alsdkakjsdnkajsndlandlknasdlknaslkdnaslkdnalskdnalksdn' },
        { id: 3, title: 'Blog3', body: 'ajdnskajndsljkansdjlansdklnasdlknasldknalskdnalsndlkns' },
        { id: 4, title: 'Blog4', body: 'ajksdakjsdkjasbdjasbdkjasbdkjbasdkjbasjkdbakjsbdkajsbd' },
        { id: 5, title: 'Blog5', body: 'akjfdnflidhgoiassjbfjasfioafnosfihaoighadgniaosfjoiajs' }
      ]
    };
  }

  componentDidMount() {
    //make a request to get all band data, then pass down as props
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    console.log('band bio', this.state.tempBio)
    return (
      <div className='band-page-container'>
        <BandPageHeader />
        <BandPageSongList songs={this.state.tempSongs}/>
        <BandBio bandBio={this.state.tempBio}/>
        <UpcomingShowsList shows={this.state.tempShows}/>
        {/* <BandBlogPostList posts={this.state.tempBlogPosts}/> */}
      </div>
    );
  }
}

export default BandPage;


