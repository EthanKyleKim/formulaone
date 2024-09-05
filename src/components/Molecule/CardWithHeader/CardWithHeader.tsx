// src/components/molecules/CardWithHeader/CardWithHeader.tsx
import React from 'react'
import Box from '../../Atoms/Box/Box'
import { Colors } from '../../../styles/Colors'
import StickyHeader from '../../Atoms/StickyHeader/StickyHeader'

interface CardWithHeaderProps {
  headerText: string
  width?: string
  height?: string
  children: React.ReactNode
}

export default function CardWithHeader({ headerText, children, width, height }: CardWithHeaderProps) {
  const calculatedHeight = height ? `calc(${height} - 40px)` : 'calc(100vh - 40px)'

  return (
    <div style={{ width, height: `${calculatedHeight}`, display: 'flex', flexDirection: 'column' }}>
      <StickyHeader backgroundColor={Colors.primary}>{headerText}</StickyHeader>
      <Box backgroundColor={Colors.gray870} borderTopRadius="0" height="100%">
        {children}
      </Box>
    </div>
  )
}
