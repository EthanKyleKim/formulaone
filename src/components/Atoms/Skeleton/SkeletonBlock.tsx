import React from 'react'
import { Block } from './SkeletonBlock.styled'

interface SkeletonBlockProps {
  width?: string
  height?: string
}

export default function SkeletonBlock({ width, height }: SkeletonBlockProps) {
  return <Block width={width} height={height} />
}
