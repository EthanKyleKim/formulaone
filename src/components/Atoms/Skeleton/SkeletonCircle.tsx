import React from 'react'
import { StyledSkeletonCircle } from './SkeletonCircle.styled'

interface SkeletonCircleProps {
  size?: string
}

export default function SkeletonCircle({ size }: SkeletonCircleProps) {
  return <StyledSkeletonCircle size={size} />
}
