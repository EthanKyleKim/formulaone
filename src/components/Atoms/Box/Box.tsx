import React from 'react'
import { StyledBox } from './Box.styled'

interface BoxProps {
  children: React.ReactNode
  padding?: string
  margin?: string
  backgroundColor?: string
  borderRadius?: string
  borderTopRadius?: string
  borderBottomRadius?: string
  boxShadow?: string
  display?: string
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
  children,
  padding,
  margin,
  backgroundColor,
  borderRadius = '8px',
  borderTopRadius,
  borderBottomRadius,
  boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)',
  display,
  flexDirection,
  justifyContent,
  alignItems,
  width,
  height,
  overflow = 'auto',
  maxWidth,
  maxHeight,
}: BoxProps) {
  return (
    <StyledBox
      padding={padding}
      margin={margin}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      borderTopRadius={borderTopRadius}
      borderBottomRadius={borderBottomRadius}
      boxShadow={boxShadow}
      display={display}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      width={width}
      height={height}
      overflow={overflow}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
    >
      {children}
    </StyledBox>
  )
}
