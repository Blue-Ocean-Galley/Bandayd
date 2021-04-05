import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Tile } from '../styles/globalStyles';

export default function FeatureCards() {
  return (
    <FeatureTile>
      <FeatureCard>
        <Link to="/editblog">
          <h2>Band blogs</h2>
        </Link>
        <h2> ☆ </h2>
        <p>
          Post updates for your fans with a simple, easy to use
          text editing interface.
        </p>
      </FeatureCard>
      <FeatureCard>
        <h2>Feature Name</h2>
        <h2> ☆ </h2>
        <p>
          Alias tenetur veniam unde voluptatem officia qui eos non.
          Illo provident incidunt quis quo. Saepe dolores alias blanditiis
        </p>
      </FeatureCard>
      <FeatureCard>
        <h2>Feature Name</h2>
        <h2> ☆ </h2>
        <p>
          Alias tenetur veniam unde voluptatem officia qui eos non.
          Illo provident incidunt quis quo. Saepe dolores alias blanditiis
        </p>
      </FeatureCard>
    </FeatureTile>
  );
}

const FeatureCard = styled(Card)`
  flex-direction: column;
  text-align: center;
  width: 20rem;
  height: 32rem;
  > * {
    text-decoration: none;
    color: ${({ theme }) => theme.primary_text};
  }
`;

const FeatureTile = styled(Tile)`
  flex-direction: row;
  justify-content: space-around;
`;
