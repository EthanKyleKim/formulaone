// src/components/Atoms/List/List.tsx
import React from 'react'
import { StyledList, StyledListItem } from './List.styled'

interface ListProps {
  children: React.ReactNode
  flexDirection?: string
  alignItems?: string
  display?: string
}

interface ListItemProps {
  children: React.ReactNode
  width?: string
  height?: string
  alignItems?: string
  display?: string
  onClick?: () => void
  isSelected?: boolean
}

export function List({ children, flexDirection = 'row', display = 'flex' }: ListProps) {
  return (
    <StyledList display={display} flexDirection={flexDirection}>
      {children}
    </StyledList>
  )
}

export function ListItem({
  children,
  width,
  height,
  alignItems = 'center',
  display = 'flex',
  onClick,
  isSelected,
}: ListItemProps) {
  return (
    <StyledListItem
      display={display}
      width={width}
      height={height}
      alignItems={alignItems}
      onClick={onClick}
      $isSelected={isSelected}
    >
      {children}
    </StyledListItem>
  )
}
