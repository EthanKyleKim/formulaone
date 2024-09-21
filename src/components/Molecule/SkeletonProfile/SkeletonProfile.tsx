import React from 'react'
import { SkeletonBlock } from '../../Atoms/Skeleton/SkeletonBlock.styled'
import { SkeletonCircle } from '../../Atoms/Skeleton/SkeletonCircle.styled'
import {
  DriverCard,
  DriverName,
  DriverPosition,
  DriversContainer,
  DriverTeam,
} from '../../Part/DriversList/DriversList.styled'
import Typography from '../../Atoms/Typography/Typography'

interface SkeletonProfileProps {
  count: number // 반복 횟수를 파라미터로 받음
}

export default function SkeletonProfile({ count }: SkeletonProfileProps) {
  const skeletonProfiles = Array.from({ length: count }, (_, index) => (
    <DriverCard key={index}>
      <DriverPosition>
        <Typography variant="h1">
          <SkeletonBlock width="90px" height="58.75px" />
        </Typography>
      </DriverPosition>
      <SkeletonCircle size="100px" />
      <DriverName>
        <Typography variant="h4">
          <SkeletonBlock width="185px" height="57.5px" />
        </Typography>
      </DriverName>
      <DriverTeam>
        <Typography variant="body1">
          <SkeletonBlock width="140px" height="24px" />
        </Typography>
      </DriverTeam>
    </DriverCard>
  ))

  return <DriversContainer>{skeletonProfiles}</DriversContainer>
}
