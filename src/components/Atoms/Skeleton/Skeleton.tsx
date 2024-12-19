// Skeleton.tsx
import React from 'react'
import { StyledSkeleton } from './Skeleton.styled'

interface SkeletonProps {
  type: 'circle' | 'block'
  size?: string // For circle
  width?: string // For block
  height?: string // For block
}

export default function Skeleton({ type, size, width, height }: SkeletonProps) {
  return <StyledSkeleton type={type} size={size} width={width} height={height} />
}
