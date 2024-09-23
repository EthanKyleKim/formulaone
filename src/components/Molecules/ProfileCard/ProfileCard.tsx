// src/components/Molecules/ProfileCard/ProfileCard.tsx
import React from 'react'
import Box from '../../Atoms/Box/Box'

import { Colors } from '../../../styles/Colors'
import ProfilePosition from '../../Atoms/ProfileCard/ProfilePosition/ProfilePosition'
import { ProfileImage } from '../../Atoms/ProfileCard/ProfileImage/ProfileImage'
import ProfileName from '../../Atoms/ProfileCard/ProfileName/ProfileName'
import ProfileTeam from '../../Atoms/ProfileCard/ProfileTeam/ProfileTeam'

interface ProfileCardProps {
  position: number
  name: string
  teamName: string
  teamColor: string
  imageSrc: string
  imageAlt: string
}

export default function ProfileCard({ position, name, teamName, teamColor, imageSrc, imageAlt }: ProfileCardProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="calc((100% - (4 * 20px)) / 5)"
      height="420px"
      boxShadow="0 4px 12px rgba(0, 0, 0, 0.2)"
      backgroundColor={`${Colors.backgroundColor}`}
      borderRadius="8px"
      boxShadowHover={`0 16px 32px #${teamColor}`}
      transformHover="translateY(-5px)"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      zoom="80%"
    >
      <ProfilePosition position={position} />
      <ProfileImage src={imageSrc} alt={imageAlt} />
      <ProfileName name={name} />
      <ProfileTeam teamName={teamName} teamColor={teamColor} />
    </Box>
  )
}
