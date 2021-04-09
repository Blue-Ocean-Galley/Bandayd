import React from 'react';
import styled from 'styled-components';
import BandBio from './BandBio';
import BandPageHeader from './BandPageHeader';
import UpcomingShowsList from './UpcomingShowsList';
import MediaList from './MediaList';
import BandBlogPostList from './BandBlogPostList';
import { Tile, ListTile, Card } from '../../styles/globalStyles';

export default function BandPage() {
  const tempSongs = [
    {
      id: 1,
      song: 'LAX',
      artist: 'Vulfpeck',
      trackId: '4I0s9c8rjPVm4QoFtnW2lb',
    },
    {
      id: 2,
      song: 'Nightcall',
      artist: 'Kavinsky',
      trackId: '199fvGLqoH23blptlIIz86',
    },
    {
      id: 3,
      song: 'Kiss Off',
      artist: 'Violent Femmes',
      trackId: '2KCzAlkQRc4ZzexoSkQALv',
    },
    {
      id: 4,
      song: 'Chambre A Coucher',
      artist: 'the OBGMs',
      trackId: '3IvEWu21iCpRCY5FPa7mlB',
    },
    {
      id: 5,
      song: 'Daft Punk is Playing at My House',
      artist: 'LCD Soundsystem',
      trackId: '73mlvsfJM2qwlDUJxeaatI',
    },
  ];
  const tempBio = 'Hello and welcome to our band page. We are a group of dedicated musicians who pride themselves on putting out some ripping tunes. Enjoy :)';
  const tempShows = [
    { id: 1, location: 'Denver', Date: '08-01-2021' },
    { id: 2, location: 'New York City', Date: '12-24-2021' },
    { id: 3, location: 'Dallas', Date: '04-23-2021' },
    { id: 4, location: 'Las Vegas', Date: '02-27-2021' },
    { id: 5, location: 'Paris', Date: '08-14-2021' },
  ];

  return (
    <div className="band-page-container">
      <BandPageHeader />
      <FirstSection>
        <MediaList songs={tempSongs} />
        <Column>
          <BandBio bandBio={tempBio} />
          <UpcomingShowsList shows={tempShows} />
        </Column>
      </FirstSection>
      <SecondSection>
        <BandBlogPostList />
        <Map>
          Map Goes Here
        </Map>
      </SecondSection>
    </div>
  );
}
const FirstSection = styled(Tile)`
  align-items: flex-start;
  background: ${({ theme }) => theme.background};
  margin: 1rem 0.5rem;
`;
const Column = styled(ListTile)`
  align-items: flex-start;
  justify-content: center;
  background: ${({ theme }) => theme.background};
`;
const SecondSection = styled(Tile)`
  align-items: flex-start;
  background: ${({ theme }) => theme.primary_800};
  margin: 1rem 0.5rem;
`;
const Map = styled(Card)`
  flex: 1;
  margin-top: 0;
  height: 39rem;
`;
