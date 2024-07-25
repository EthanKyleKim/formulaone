import React from 'react'
import { StyledStickyHeader } from './StickyHeader.styled'
import Typography from '../Typography/Typography'

interface StickyHeaderProps {
  backgroundColor?: string
  color?: string
  height?: string
  children: React.ReactNode
}

export default function StickyHeader({ backgroundColor, children, color, height }: StickyHeaderProps) {
  return (
    <StyledStickyHeader backgroundColor={backgroundColor} height={height}>
      <Typography variant="h2" color={color}>
        {children}
      </Typography>
    </StyledStickyHeader>
  )
}
