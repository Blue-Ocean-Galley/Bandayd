import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import BandBio from './BandBio';
import BandPageHeader from './BandPageHeader';
import UpcomingShowsList from './UpcomingShowsList';
import MediaList from './MediaList';
import BandBlogPostList from './BandBlogPostList';
import { Tile, ListTile, Card } from '../../styles/globalStyles';
import cookies from '../../cookies';

export default function BandPage() {
  const bandId = cookies.get('userId') || 1;
  const [bandInfo, setBandInfo] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3010/api/bands/${bandId}`,
      { id: bandId })
      .then((res) => {
        setBandInfo(res.data);
      });
  }, []);

  return (
    <div className="band-page-container">
      <BandPageHeader bandInfo={bandInfo} />
      <FirstSection>
        <MediaList />
        <Column>
          <BandBio bandBio={bandInfo.description} />
          <UpcomingShowsList />
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
