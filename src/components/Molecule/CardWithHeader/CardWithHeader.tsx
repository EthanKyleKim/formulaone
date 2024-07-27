// src/components/molecules/CardWithHeader/CardWithHeader.tsx
import React from 'react'
import Box from '../../Atoms/Box/Box'
import StickyHeader from '../../Atoms/StickyHeader/StickyHeader'
import { Colors } from '../../../styles/Colors'

interface CardWithHeaderProps {
  headerText: string
  width?: string
  height?: string
  maxHeight?: string
  children: React.ReactNode
}

export default function CardWithHeader({ headerText, children, width, height, maxHeight }: CardWithHeaderProps) {
  return (
    <div style={{ width, margin: '8px' }}>
      <StickyHeader backgroundColor={Colors.primary}>{headerText}</StickyHeader>
      <Box backgroundColor={Colors.gray870} borderTopRadius="0" height={height} maxHeight={maxHeight}>
        {children}
      </Box>
    </div>
  )
}
