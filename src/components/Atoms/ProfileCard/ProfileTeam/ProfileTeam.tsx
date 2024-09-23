// src/components/Atoms/ProfileTeam/ProfileTeam.tsx
import React from 'react'
import Typography from '../../Typography/Typography'

interface ProfileTeamProps {
  teamName: string
  teamColor: string
}

export default function ProfileTeam({ teamName, teamColor }: ProfileTeamProps) {
  return (
    <Typography variant="body1" color={`#${teamColor}`}>
      {teamName}
    </Typography>
  )
}
