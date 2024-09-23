// src/components/Atoms/ProfilePosition/ProfilePosition.tsx
import React from 'react'
import Typography from '../../Typography/Typography'

interface ProfilePositionProps {
  position: number
}

export default function ProfilePosition({ position }: ProfilePositionProps) {
  let rankTitle = 'th'
  if (position === 1) rankTitle = 'st'
  if (position === 2) rankTitle = 'nd'
  if (position === 3) rankTitle = 'rd'

  return <Typography variant="h1">{`${position}${rankTitle}`}</Typography>
}
