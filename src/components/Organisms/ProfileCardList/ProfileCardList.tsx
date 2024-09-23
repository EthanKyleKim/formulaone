// src/components/Organisms/ProfilesList/ProfilesList.tsx
import React from 'react'
import { useSliceMergeStore } from '../../../stores/useSliceMergeStore'
import ProfileCard from '../../Molecules/ProfileCard/ProfileCard'
import Box from '../../Atoms/Box/Box'
import { useFetchDriversWithPosition } from '../../../features/DriversWithPosition/DriversWithPosition'

export default function ProfileCardList() {
  const {
    sessionState: { session_key, meeting_key },
  } = useSliceMergeStore()

  const { mergedData } = useFetchDriversWithPosition({ meeting_key, session_key })

  return (
    <Box display="flex" flexWrap="wrap" gap="16px" padding="16px">
      {mergedData.map((profile) => (
        <ProfileCard
          key={profile.full_name}
          position={profile.position?.position || 0}
          name={profile.full_name}
          teamName={profile.team_name}
          teamColor={profile.team_colour}
          imageSrc={profile.headshot_url}
          imageAlt={profile.full_name}
        />
      ))}
    </Box>
  )
}
