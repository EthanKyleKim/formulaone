import React from 'react'
import { StyledBox } from './Box.styled'

interface BoxProps {
  children: React.ReactNode
  top?: string
  bottom?: string
  left?: string
  right?: string
  zIndex?: string
  position?: string
  padding?: string
  margin?: string
  backgroundColor?: string
  borderRadius?: string
  borderTopRadius?: string
  borderBottomRadius?: string
  boxShadow?: string
  display?: string
  gap?: string
  flexDirection?: string
  justifyContent?: string
  alignItems?: string
  textAlign?: string
  width?: string
  height?: string
  overflow?: string
  maxHeight?: string
  maxWidth?: string
}

export default function Box({
  borderRadius = '8px',
  boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)',
  overflow = 'auto',
  children,
  ...props
}: BoxProps) {
  return (
    <StyledBox borderRadius={borderRadius} boxShadow={boxShadow} overflow={overflow} {...props}>
      {children}
    </StyledBox>
  )
}
