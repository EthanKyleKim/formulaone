import React from 'react'
import { StyledSkeletonBlock } from './SkeletonBlock.styled'

interface SkeletonBlockProps {
  width?: string
  height?: string
}

export default function SkeletonBlock({ width, height }: SkeletonBlockProps) {
  return <StyledSkeletonBlock width={width} height={height} />
}
