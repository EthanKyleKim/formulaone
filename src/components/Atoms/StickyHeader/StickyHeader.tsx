import React from 'react'
import { StyledStickyHeader } from './StickyHeader.styled'
import Typography from '../Typography/Typography'

interface StickyHeaderProps {
  backgroundColor?: string
  height?: string
  children: React.ReactNode
}

export default function StickyHeader({ backgroundColor, children, height }: StickyHeaderProps) {
  return (
    <StyledStickyHeader backgroundColor={backgroundColor} height={height}>
      <Typography variant="h3">{children}</Typography>
    </StyledStickyHeader>
  )
}
