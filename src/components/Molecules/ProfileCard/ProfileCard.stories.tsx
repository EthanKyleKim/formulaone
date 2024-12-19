// src/components/Molecules/ProfileCard/ProfileCard.stories.tsx
import React from 'react';
import ProfileCard from './ProfileCard';

export default {
  title: 'Molecules/ProfileCard',
  component: ProfileCard,
};

export const Default = () => (
  <ProfileCard
    position={1}
    name="Lewis Hamilton"
    teamName="Mercedes"
    teamColor="00D2BE"
    imageSrc="https://via.placeholder.com/100"
    imageAlt="Lewis Hamilton"
  />
);

export const MultipleCards = () => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <ProfileCard
      position={1}
      name="Max Verstappen"
      teamName="Red Bull Racing"
      teamColor="1E41FF"
      imageSrc="https://via.placeholder.com/100"
      imageAlt="Max Verstappen"
    />
    <ProfileCard
      position={2}
      name="Sergio Perez"
      teamName="Red Bull Racing"
      teamColor="1E41FF"
      imageSrc="https://via.placeholder.com/100"
      imageAlt="Sergio Perez"
    />
    <ProfileCard
      position={3}
      name="Charles Leclerc"
      teamName="Ferrari"
      teamColor="FF2800"
      imageSrc="https://via.placeholder.com/100"
      imageAlt="Charles Leclerc"
    />
  </div>
);
