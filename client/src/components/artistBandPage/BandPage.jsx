import React from 'react';
import styled from 'styled-components';
import BandBio from './BandBio';
import BandPageHeader from './BandPageHeader';
import UpcomingShowsList from './UpcomingShowsList';
import MediaList from './MediaList';
import BandBlogPostList from './BandBlogPostList';
import { ListTile, Tile, Input } from '../../styles/globalStyles';

export default function BandPage() {
  const tempSongs = [
        { id: 1, song: 'Truckin', artist: 'Greatful Dead' },
        { id: 2, song: 'Casey Jones', artist: 'Greatful Dead' },
        { id: 3, song: 'St. Stephen', artist: 'Greatful Dead' },
        { id: 4, song: 'Golden Road', artist: 'Greatful Dead' },
        { id: 5, song: 'Friend of the Devil', artist: 'Greatful Dead' }
      ];
  const tempBio = 'Hello and welcome to our band page. We are a group of dedicated musicians who pride themselves on putting out some ripping tunes. Enjoy :)';
  const tempShows = [
        { id: 1, location: 'Denver', Date: '08-01-2021' },
        { id: 2, location: 'New York City', Date: '12-24-2021' },
        { id: 3, location: 'Dallas', Date: '04-23-2021' },
        { id: 4, location: 'Las Vegas', Date: '02-27-2021' },
        { id: 5, location: 'Paris', Date: '08-14-2021' }
      ];

    return (
      <div className='band-page-container'>
        <BandPageHeader />
        <Tile>
          <MediaList songs={this.state.tempSongs} videos={} />
          <ListTile>
            <BandBio bandBio={this.state.tempBio}/>
            <UpcomingShowsList shows={this.state.tempShows}/>
          </ListTile>
        </Tile>
        {/* <BandBlogPostList posts={this.state.tempBlogPosts}/> */}
      </div>
    );
}
