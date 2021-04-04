import React from 'react';
import styled from 'styled-components';
import { Card, Tile } from '../styles/globalStyles';

export default function FeatureCards() {
  return (
    <FeatureTile>
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
`;

const FeatureTile = styled(Tile)`
  flex-direction: row;
  justify-content: space-around;
`;
