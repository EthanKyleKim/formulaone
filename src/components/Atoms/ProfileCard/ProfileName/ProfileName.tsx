// src/components/Atoms/ProfileName/ProfileName.tsx
import React from 'react'
import Typography from '../../Typography/Typography'

interface ProfileNameProps {
  name: string
}

export default function ProfileName({ name }: ProfileNameProps) {
  return <Typography variant="h4">{name.replace(/ /g, '\n')}</Typography>
}
