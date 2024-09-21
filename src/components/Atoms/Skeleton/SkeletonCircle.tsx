import React from 'react'
import { Circle } from './SkeletonCircle.styled'

interface SkeletonCircleProps {
  size?: string
}

export default function SkeletonCircle({ size }: SkeletonCircleProps) {
  return <Circle size={size} />
}
